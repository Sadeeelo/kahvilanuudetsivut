import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Rent from './Components/Rent';
import MenuView from './Components/MenuView'; // <-- lisää tämä

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<MenuView />} />
        <Route path="/" element={<Landing />} />
        <Route path="/vuokraa" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
