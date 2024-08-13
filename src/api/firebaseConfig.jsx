// src/api/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (la que ya tienes)
const firebaseConfig = {
  apiKey: "AIzaSyDT2_Bwh5FGWwQXUfHYfUZpe5_r9d17s1c",
  authDomain: "tareacrud-d69cb.firebaseapp.com",
  projectId: "tareacrud-d69cb",
  storageBucket: "tareacrud-d69cb.appspot.com",
  messagingSenderId: "563205823227",
  appId: "1:563205823227:web:769decc2f24867d7a22e5e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };
