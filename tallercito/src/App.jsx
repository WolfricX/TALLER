import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tablas from './pages/tablas';
import Seguridad from './pages/seguridad';
import Registro from './pages/registro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Tablas />} />
        <Route path="/Confirm" element={<Seguridad />} />
        <Route path="/Register" element={<Registro />} />
      </Routes>
    </Router>
  );
};

export default App;