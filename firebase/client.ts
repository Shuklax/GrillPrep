import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAZ_kG4OYQGFTyRqcfe-0Pxear8frggWeU",
    authDomain: "grillprep.firebaseapp.com",
    projectId: "grillprep",
    storageBucket: "grillprep.firebasestorage.app",
    messagingSenderId: "63089316064",
    appId: "1:63089316064:web:a2537df0fae49f12e2c085",
    measurementId: "G-YM81BHCKC5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);