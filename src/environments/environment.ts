// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
import { IConfig } from './iconfig';

export const environment = {
  production: false
};

export const CONFIG: IConfig = {
  'firebaseConfig': {
    apiKey: 'AIzaSyDwIKpto56aaK9knrx2jTClcMjr65jZE_o',
    authDomain: 'rwa-trivia-2135a.firebaseapp.com',
    databaseURL: 'https://rwa-trivia-2135a.firebaseio.com',
    projectId: 'rwa-trivia-2135a',
    storageBucket: 'rwa-trivia-2135a.appspot.com',
    messagingSenderId: '240606923097'
  },
  'functionsUrl': 'https://us-central1-rwa-trivia-2135a.cloudfunctions.net'
};
