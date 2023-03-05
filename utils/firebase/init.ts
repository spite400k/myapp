// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn8pUwCsadLMnCV_q07TGHlodZ5ZzBSxo",
  authDomain: "sample-login-820ee.firebaseapp.com",
  projectId: "sample-login-820ee",
  storageBucket: "sample-login-820ee.appspot.com",
  messagingSenderId: "661456317882",
  appId: "1:661456317882:web:aea9dc2017cc8d04054183",
  measurementId: "G-6LY0E4C30C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = !getApps().length ? getAnalytics(app) : "";
// ここまでの参考　https://maku.blog/p/73eq2cm/