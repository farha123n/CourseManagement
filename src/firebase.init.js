// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9uiuCd4YlT_EosdqtgCh61if62KNL6c",
  authDomain: "user-management-861a8.firebaseapp.com",
  projectId: "user-management-861a8",
  storageBucket: "user-management-861a8.firebasestorage.app",
  messagingSenderId: "934136109898",
  appId: "1:934136109898:web:960c953b30f5cf85c2bfb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
