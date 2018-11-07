yarn build

GIT_BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi)
echo $(git rev-parse --abbrev-ref HEAD)
echo $GIT_BRANCH
if [ $GIT_BRANCH = 'master' ]; then
    yarn add firebase-tools
    firebase deploy
fi