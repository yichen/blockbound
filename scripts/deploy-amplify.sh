#!/usr/bin/env bash
# Deploy the production build to AWS Amplify Hosting via the Amplify API.
# Requires the AWS CLI v2 and credentials with Amplify access (aws sts get-caller-identity).
# Usage: AWS_PROFILE=my-profile ./scripts/deploy-amplify.sh
set -euo pipefail

APP_NAME="${AMPLIFY_APP_NAME:-blockbound}"
BRANCH="${AMPLIFY_BRANCH:-main}"
REGION="${AWS_REGION:-us-west-2}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export AWS_REGION="$REGION"
command -v aws >/dev/null || { echo "AWS CLI not found. Install AWS CLI v2 first."; exit 1; }
command -v zip >/dev/null || { echo "zip not found."; exit 1; }

echo "→ Building production bundle"
npm run build >/dev/null

echo "→ Looking up Amplify app '$APP_NAME' in $REGION"
APP_ID=$(aws amplify list-apps --query "apps[?name=='$APP_NAME'].appId | [0]" --output text)
if [ -z "$APP_ID" ] || [ "$APP_ID" = "None" ]; then
  echo "→ Creating Amplify app"
  APP_ID=$(aws amplify create-app --name "$APP_NAME" --platform WEB --query 'app.appId' --output text)
fi
echo "  appId: $APP_ID"

BRANCH_EXISTS=$(aws amplify list-branches --app-id "$APP_ID" --query "branches[?branchName=='$BRANCH'].branchName | [0]" --output text)
if [ -z "$BRANCH_EXISTS" ] || [ "$BRANCH_EXISTS" = "None" ]; then
  echo "→ Creating branch '$BRANCH'"
  aws amplify create-branch --app-id "$APP_ID" --branch-name "$BRANCH" >/dev/null
fi

echo "→ Creating manual deployment"
DEPLOYMENT=$(aws amplify create-deployment --app-id "$APP_ID" --branch-name "$BRANCH" --query '{jobId:jobId,url:zipUploadUrl}' --output json)
JOB_ID=$(python3 -c 'import json,sys; print(json.load(sys.stdin)["jobId"])' <<<"$DEPLOYMENT")
ZIP_URL=$(python3 -c 'import json,sys; print(json.load(sys.stdin)["url"])' <<<"$DEPLOYMENT")

TMP_ZIP="$(mktemp -t blockbound-amplify).zip"
(cd dist && zip -qr "$TMP_ZIP" .)
echo "→ Uploading build artifact"
curl -sS -X POST -T "$TMP_ZIP" "$ZIP_URL"
rm -f "$TMP_ZIP"

echo "→ Starting deployment job $JOB_ID"
aws amplify start-deployment --app-id "$APP_ID" --branch-name "$BRANCH" --job-id "$JOB_ID" >/dev/null

for i in $(seq 1 120); do
  STATUS=$(aws amplify get-job --app-id "$APP_ID" --branch-name "$BRANCH" --job-id "$JOB_ID" --query 'job.summary.status' --output text)
  if [ "$STATUS" = "SUCCEED" ]; then break; fi
  if [ "$STATUS" = "FAILED" ] || [ "$STATUS" = "CANCELLED" ]; then
    aws amplify get-job --app-id "$APP_ID" --branch-name "$BRANCH" --job-id "$JOB_ID"
    echo "Deployment failed."
    exit 1
  fi
  sleep 5
done

DOMAIN=$(aws amplify get-app --app-id "$APP_ID" --query 'app.defaultDomain' --output text)
echo "✅ Live: https://${BRANCH}.${DOMAIN}"
