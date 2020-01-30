import firebase from 'firebase';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDOjgXLYg3gkDH91nPyhBE8YARRpX6uv_I",
  authDomain: "konstantin-veselovskii.firebaseapp.com",
  databaseURL: "https://konstantin-veselovskii.firebaseio.com",
  projectId: "konstantin-veselovskii",
  storageBucket: "konstantin-veselovskii.appspot.com",
  messagingSenderId: "712622682799",
  appId: "1:712622682799:web:9411c0639f855ed2e1da5a",
  measurementId: "G-LTMRFTD2H1"
};
var firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
