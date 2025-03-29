import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Homepage/Dashboard';
import CreateNewReservation from './components/HeaderPages/Reservation/CreateNewReservation/CreateNewReservation';
import ModifyorCancelBooking from './components/HeaderPages/Reservation/ModifyorCancelBooking/ModifyorCancelBooking';
import ViewUpcomingReservations from './components/HeaderPages/Reservation/ViewUpcomingReservations/ViewUpcomingReservations';
import CheckAvailability from './components/HeaderPages/Reservation/CheckAvailability/CheckAvailability';
import GroupReservations from './components/HeaderPages/Reservation/GroupReservations/GroupReservations';
import CheckinGuests from './components/HeaderPages/FrontDesk/CheckinGuests/CheckinGuests';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reservations/create" element={<CreateNewReservation />} />
      <Route path="/reservations/modify" element={<ModifyorCancelBooking />} />
      <Route path="/reservations/upcoming" element={<ViewUpcomingReservations />} />
      <Route path="/reservations/check-availability" element={<CheckAvailability />} />
      <Route path="/reservations/group-reservations" element={<GroupReservations />} />
      <Route path="/frontdesk/checkinguests" element={<CheckinGuests />} />
    </Routes>
  </BrowserRouter>
);

export default App;
