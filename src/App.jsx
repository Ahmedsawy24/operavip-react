import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Homepage/Dashboard';
import CreateNewReservation from './components/HeaderPages/Reservation/CreateNewReservation/CreateNewReservation';


const App = () => (
  <BrowserRouter>
    {/* الهيدر يظهر دائمًا */}
    <Navbar />

    {/* المحتوى يتغير حسب الصفحة */}
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reservations/create" element={<CreateNewReservation />} />
    </Routes>
  </BrowserRouter>
);

export default App;
