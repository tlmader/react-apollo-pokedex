#!/bin/bash

# See Amplify Docs - Headless mode for CI/CD
# https://docs.amplify.aws/cli/usage/headless

set -e
IFS='|'

# Configure Amplify
AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":\"$AWS_ACCESS_KEY_ID\",\
\"secretAccessKey\":\"$AWS_SECRET_ACCESS_KEY\",\
\"region\":\"$AWS_REGION\"\
}"
AMPLIFY="{\
\"appId\":\"d1kgnx1qc39cwt\",\
\"envName\":\"dev\",\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG}"

# Pull Amplify project using configuration
npm i -g @aws-amplify/cli
amplify pull \
  --amplify $AMPLIFY \
  --providers $PROVIDERS \
  --yes

# Build and publish
amplify publish --invalidateCloudFront --yes
