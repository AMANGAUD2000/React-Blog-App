import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW9ss6ClpvheOZ24LZtygQtEW2OWDwvK0",
  authDomain: "blogproject-76587.firebaseapp.com",
  projectId: "blogproject-76587",
  storageBucket: "blogproject-76587.appspot.com",
  messagingSenderId: "55108125887",
  appId: "1:55108125887:web:893d864ae202227288320a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
