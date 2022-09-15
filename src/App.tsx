import React from 'react';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import {Route, Routes} from "react-router-dom";
import Order from "./components/Order";

function App() {
  return (
      <Routes>
        <Route path='/' element={<RegistrationForm/>} />
        <Route path='/order' element={<Order/>} />
      </Routes>
  );
}

export default App;
