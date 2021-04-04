import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/User/Login/Login";
import Payment from "./components/User/Payment/Payment";
import Register from "./components/User/Register/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginAdmin from "./components/Admin/Login/Login";
import RegisterAdmin from "./components/Admin/Register/Register";
import Loader from "./components/Shared/Loader/Loader";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // this is calling to api
    setTimeout(function(){
        setLoaded(true);
     }, 3000);
  }, []);

  if (!loaded)
    return <Loader />;
  else
    return (
      <div>
        <Payment />
        <Login header={"Sign In.."} />
      </div>
    );
}
export default App;
