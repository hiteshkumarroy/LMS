import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
//   authDomain: "loginlms-a7ea1.firebaseapp.com",
//   projectId: "loginlms-a7ea1",
//   storageBucket: "loginlms-a7ea1.firebasestorage.app",
//   messagingSenderId: "665916718747",
//   appId: "1:665916718747:web:16dbe0bfe5aeeface0903e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()
// export {auth,provider}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsPWOqzGg9sj8ebA3DEH5OwsEM4Bw8nZc",
  authDomain: "lmsai-53f78.firebaseapp.com",
  projectId: "lmsai-53f78",
  storageBucket: "lmsai-53f78.firebasestorage.app",
  messagingSenderId: "194228578196",
  appId: "1:194228578196:web:b52455675cd82882615181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
// const app = initializeApp(firebaseConfig);