import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Homepage/Dashboard';

const App = () => (
  <BrowserRouter>
    {/* الهيدر يظهر دائمًا */}
    <Navbar />

    {/* المحتوى يتغير حسب الصفحة */}
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
