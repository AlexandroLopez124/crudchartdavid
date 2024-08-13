// src/components/CakeItem.jsx

import React, { useState } from 'react';
import CakeForm from './CakeForm';

const CakeItem = ({ cake, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <CakeForm currentCake={cake} onCancel={handleCancel} />
      ) : (
        <>
          <span>{cake.name} - {cake.flavor}</span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={onDelete}>Eliminar</button>
        </>
      )}
    </li>
  );
};

export default CakeItem;
