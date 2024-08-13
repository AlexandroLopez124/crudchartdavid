// src/components/CakeList.jsx
import React, { useContext } from 'react';
import { CakeContext } from '../context/CakeContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../api/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './CakeList.css'; // Importa el CSS

const CakeList = () => {
  const { cakes, setSelectedCake } = useContext(CakeContext);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'cakes', id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const handleEdit = (cake) => {
    setSelectedCake(cake);
    navigate('/edit');
  };

  return (
    <div className="cake-list-container">
      <table className="cake-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cakes.map((cake) => (
            <tr key={cake.id}>
              <td>{cake.name}</td>
              <td>${cake.price.toFixed(2)}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(cake)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(cake.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CakeList;



