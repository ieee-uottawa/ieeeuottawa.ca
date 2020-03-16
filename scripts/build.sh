cd frontend
yarn install
yarn build

if [ $? -ne 0 ]; then
    exit 1
fi

GIT_BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi)
if [ $GIT_BRANCH = 'master' ]; then
    yarn add firebase-tools
    firebase deploy
fi
