cd $PUBLIC;
sudo chown -R $USER:www-data $PUBLIC;

echo "Installing Git deployment";
cd $WEBROOT;
mkdir $STAGING.git;
cd $STAGING.git;
git init --bare;
cd hooks;
touch post-receive;
echo "#!/bin/sh
unset GIT_DIR;
export GIT_WORK_TREE=$WEBROOT/build;
export GIT_DIR=$WEBROOT/$STAGING.git;
git checkout -f master;
cd $WEBROOT/build && gulp;
rsync -r $WEBROOT/build/public/* $PUBLIC/" >> post-receive;

cd $WEBROOT;
mkdir build;
cd build;
npm install;

cd $WEBROOT/$STAGING.git/hooks;
chmod 775 post-receive;