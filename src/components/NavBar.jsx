// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navar.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


