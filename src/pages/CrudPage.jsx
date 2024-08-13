// src/pages/CrudPage.jsx
import React from 'react';
import CakeForm from '../components/CakeForm';
import CakeList from '../components/CakeList';
import './CrudPage.css'; // Asegúrate de importar el archivo CSS

const CrudPage = () => {
  return (
    <div className="crud-container">
      <h1>Gestión de Pasteles</h1>
      <div className="crud-form">
        <CakeForm />
      </div>
      <div className="crud-table">
        <CakeList />
      </div>
    </div>
  );
};

export default CrudPage;




