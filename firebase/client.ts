import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyApWRaQ1QZ8UDMz9H6pTc1LK4Mc_tXkIW8",
    authDomain: "prepwise-23723.firebaseapp.com",
    projectId: "prepwise-23723",
    storageBucket: "prepwise-23723.firebasestorage.app",
    messagingSenderId: "954152794367",
    appId: "1:954152794367:web:1918d0a195b55be34bb4ca",
    measurementId: "G-7HLW1P4D2N"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);