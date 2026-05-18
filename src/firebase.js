import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEqvDM7qjOO21RoIZKhwEXfCJ-DfdL2I8",
  authDomain: "cloudsense-d5ed1.firebaseapp.com",
  projectId: "cloudsense-d5ed1",
  storageBucket: "cloudsense-d5ed1.firebasestorage.app",
  messagingSenderId: "259580191004",
  appId: "1:259580191004:web:d1b3c3a68243f5530bdad9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);