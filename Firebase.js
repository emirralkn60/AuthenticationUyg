// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlX4ItxUTtuMHJTu10Ye-8sNRDF89UqrY",
  authDomain: "login-d8594.firebaseapp.com",
  projectId: "login-d8594",
  storageBucket: "login-d8594.firebasestorage.app",
  messagingSenderId: "898340212440",
  appId: "1:898340212440:web:42d12e7b1d1e893fed11ad"
};

// Initialize Firebase
if(!firebase.apps.length)
{
 firebase.initializeApp(firebaseConfig);
}
const auth=firebase.auth();
export {auth};