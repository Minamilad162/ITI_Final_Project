import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/User/Login/Login";
import Payment from "./components/User/Payment/Payment";
import Register from "./components/User/Register/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginAdmin from "./components/Admin/Login/Login";
import RegisterAdmin from "./components/Admin/Register/Register";
import Loader from "./components/Shared/Loader/Loader";
import Nav from "./components/Shared/Nav/Nav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [loaded, setLoaded] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        // this is calling to api
        localStorage.getItem("token") ? setLogged(true) : setLogged(false);
        setTimeout(function () {
            setLoaded(true);
        }, 3000);
    }, []);

    if (!loaded) return <Loader />;
    else if (!logged)
        return (
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login header={"Log In.."} path={"login"} />
                    </Route>
                    <Route path="/dashboard">
                        <Login header={"Admin Login"} path={"admin/login"} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        );
    else
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route path="/dashboard">
                        <Login header="Admin Login" />
                    </Route>
                </Switch>
            </Router>
        );
}
export default App;
