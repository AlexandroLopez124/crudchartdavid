// src/components/CakeForm.jsx
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../api/firebaseConfig';

const CakeForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && price) {
      try {
        await addDoc(collection(db, 'cakes'), {
          name,
          price: parseFloat(price), // Asegúrate de que el precio sea un número
          createdAt: new Date()
        });
        setName('');
        setPrice('');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Cake Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Add Cake</button>
    </form>
  );
};

export default CakeForm;

