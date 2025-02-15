import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwEaK1ZNt1yTveyK_1cMkwCErTH5lfNTw",
  authDomain: "salesman-empire.firebaseapp.com",
  projectId: "salesman-empire",
  storageBucket: "salesman-empire.firebasestorage.app",
  messagingSenderId: "97792040953",
  appId: "1:97792040953:web:900e6ba63c277a59b22728",
  measurementId: "G-7SGT3L94ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

export { db };