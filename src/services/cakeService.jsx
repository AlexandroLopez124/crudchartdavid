// src/services/cakeService.jsx

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

const cakesCollection = collection(db, "cakes");

export const addCake = async (cake) => {
  await addDoc(cakesCollection, cake);
};

export const getCakes = async () => {
  const snapshot = await getDocs(cakesCollection);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const updateCake = async (id, updatedCake) => {
  const cakeDoc = doc(db, "cakes", id);
  await updateDoc(cakeDoc, updatedCake);
};

export const deleteCake = async (id) => {
  const cakeDoc = doc(db, "cakes", id);
  await deleteDoc(cakeDoc);
};

