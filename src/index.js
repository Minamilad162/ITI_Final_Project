import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Nav,Footer} from './components/basic'
import Delete from './components/Admin/Delete/Delete';
import Series from './components/User/SeriesPage/Series';
import Landing from './components/User/Landing/Landing';
import Profile from './components/User/EditProfile/Edit';
// import PaymentForm from './credit-cards'
ReactDOM.render(
  <React.StrictMode>
    {/* <Nav></Nav>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <br/>
    <div>dkdfklfdklkl</div>
    <Footer /> */}

    {/* <Profile></Profile> */}

{/* working fine */}
    {/* <Series></Series> */}

{/* working fine */}
    {/* <Delete/> */}


    {/* <PaymentForm></PaymentForm> */}

{/* working fine   */}
    <Landing></Landing>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
