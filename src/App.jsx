import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import CrudPage from './pages/CrudPage';
import ChartPage from './pages/ChartPage';
import { CakeProvider } from './context/CakeContext';

const App = () => {
  return (
    <Router>
      <CakeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </CakeProvider>
    </Router>
  );
};

export default App;





