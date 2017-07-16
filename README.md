
npm install --save redux react-redux redux-thunk react-router-dom firebase


npm install -g firebase-tools

The following are not needed to run on Heroku
firebase-admin node-env-file


Environment Variables
Create .env file in project root with env Variables

REACT_APP_API_KEY=AIzaSyAF5pJIIeGCnKGM2GZKDga2DuJg2aeEp-4
REACT_APP_AUTH_DOMAIN=footytips-dev.firebaseapp.com
REACT_APP_DATABASE_URL=https://footytips-dev.firebaseio.com
REACT_APP_STORAGE_BUCKET=footytips-dev.appspot.com
REACT_APP_MESSAGING_SENDER_ID=189591411481

This explains static.json
https://github.com/mars/create-react-app-buildpack

Use git clone to replicate/download project from github

git clone https://github.com/notgoodwithpowertools/footy-tips-2.git

Install Heroku toolbelt
wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh


Add the remote for heroku
heroku git:remote -a footy-tips-2
