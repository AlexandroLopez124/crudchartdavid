// src/pages/ChartPage.jsx
import React from 'react';
import ChartCakes from '../components/ChartCakes';
import './ChartPage.css'; // Asegúrate de importar el archivo CSS

const ChartPage = () => {
  return (
    <div className="chart-container">
      <h2></h2>
      <div className="chart">
        <ChartCakes />
      </div>
    </div>
  );
};

export default ChartPage;

