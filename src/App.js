import React, { Component } from 'react';
import './App.css';
import Login from "./components/User/Login/Login";
import Payment from "./components/User/Payment/Payment";
import Register from "./components/User/Register/Register"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import LoginAdmin from './components/Admin/Login/Login';
import RegisterAdmin from './components/Admin/Register/Register';

function App() {
  return (
    <div  style={{background: 'Black'}}>
      <Payment/>
      <RegisterAdmin/>
        </div>
  );
}
export default App;
