import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA11pn2CVAufABkpfYDAMiDOsd_fDdxBXg",
  authDomain: "algowise-technologies.firebaseapp.com",
  databaseURL: "https://algowise-technologies-default-rtdb.firebaseio.com",
  projectId: "algowise-technologies",
  storageBucket: "algowise-technologies.firebasestorage.app",
  messagingSenderId: "1077130119826",
  appId: "1:1077130119826:web:3de83d6874551cec1f744b",
  measurementId: "G-WZW1MSZFBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

export default app;