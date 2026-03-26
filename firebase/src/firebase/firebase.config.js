// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG9hiOzv_ZIlYHEnDLpjOS5YxFov_lO-w",
  authDomain: "react-firebase-bc0f5.firebaseapp.com",
  projectId: "react-firebase-bc0f5",
  storageBucket: "react-firebase-bc0f5.firebasestorage.app",
  messagingSenderId: "16932734992",
  appId: "1:16932734992:web:9b89f41a20a49d05eda295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const createUser = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const signInUser = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const resetPassword = async (email) => {
  try {
    const result = await sendPasswordResetEmail(auth, email);
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const signOutUser = async () => {
  try {
    const result = await signOut(auth);
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    throw error;
  }
}