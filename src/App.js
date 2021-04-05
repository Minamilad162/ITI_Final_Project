import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Login from './components/User/Login/Login';
import Payment from './components/User/Payment/Payment';
import Register from './components/User/Register/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RegisterAdmin from './components/Admin/Register/Register';
import Loader from './components/Shared/Loader/Loader';
import Nav from './components/Shared/Nav/Nav';
import Home from './components/User/Home/Home';
import UpdateUser from './components/Admin/Update/Update';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
    const [loaded, setLoaded] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        // this is calling to api
        localStorage.getItem('token') ? setLogged(true) : setLogged(false);
        setTimeout(function () {
            setLoaded(true);
        }, 1000);
    }, []);

    if (!loaded) return <Loader />;
    else if (!logged)
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        {/* <LandingPage /> */}
                    </Route>
                    <Route path="/login">
                        <Login header={'Log In..'} endpoint={'login'} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/admin/login">
                        <Login header={'Admin Login'} endpoint={'admin/login'} />
                    </Route>
                    <Redirect to="/login" />
                </Switch>
            </Router>
        );
    else
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users/edit/:id">
                        <UpdateUser />
                    </Route>
                    <Route path="/Login">
                        <Login header={'Please Sign In..'} endpoint={'auth/login'} />
                    </Route>
                    <Route path="/movies">
                        {/* <Movies /> */}
                    </Route>
                    <Route path="/series">
                        {/* <Series /> */}
                    </Route>
                    <Route path="/contact-us">
                        {/* <ContactUs /> */}
                    </Route>
                </Switch>
            </Router>
        );
}
export default App;
