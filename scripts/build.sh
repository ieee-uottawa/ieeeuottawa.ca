yarn build

GIT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
if [ $GIT_BRANCH = 'master' ]; then
    yarn add firebase-tools
    firebase deploy
fi