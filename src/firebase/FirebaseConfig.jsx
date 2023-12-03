// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged }  from 'firebase/auth';
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDudFSNFjUUmEmjmUpzMMXJ-ARx6cxQx8A",
  authDomain: "car-rental-app-74369.firebaseapp.com",
  projectId: "car-rental-app-74369",
  storageBucket: "car-rental-app-74369.appspot.com",
  messagingSenderId: "174279391499",
  appId: "1:174279391499:web:c8f1d0b314c6ca924e4a0e",
  measurementId: "G-SFXZWSKHK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firedb = getFirestore(app);
const auth = getAuth(app);

export {firedb,  auth}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}