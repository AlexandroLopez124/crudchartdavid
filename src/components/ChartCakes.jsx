import React, { useContext, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { CakeContext } from '../context/CakeContext';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ChartCakes = () => {
  const { cakes } = useContext(CakeContext);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (cakes.length > 0) {
      // Sort cakes by price in descending order and get the top 3
      const topCakes = cakes
        .sort((a, b) => b.price - a.price)
        .slice(0, 3);

      setChartData({
        labels: topCakes.map(cake => cake.name),
        datasets: [{
          data: topCakes.map(cake => cake.price),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1,
        }]
      });
    }
  }, [cakes]);

  return (
    <div>
      <h2>Los 3 Pasteles mas caros</h2>
      {chartData.labels ? (
        <Pie data={chartData} />
      ) : (
        <p>Dato no disponible</p>
      )}
      <a href="/">Regresar al Inicio</a>
    </div>
  );
};

export default ChartCakes;


