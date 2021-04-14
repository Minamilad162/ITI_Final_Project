import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import './App.css';
import Home from '../../frontend/src/components/User/Home/Home';


class App2 extends React.Component{
    insertGapiScript(){
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () =>{
            this.initializeGoogleSignIn()
        }
        document.body.appendChild(script)
    }

    initializeGoogleSignIn(){
               // it gives us window to init
               window.gapi.load('auth2',()=>{
                // where we can intlize auth
                window.gapi.auth2.init({
                    // value of google api client
                    client_id:'452816980959-gjk4lis5m92tidj66t8tmbv1iivrursk.apps.googleusercontent.com' 

                })
                // once it loaded
                console.log('Api initied')
                window.gapi.load('signin2',()=>{
                    const params={
                        onSuccess:()=>{
                            console.log('finsied logging in')
                        }
                    }

                    window.gapi.signin2.render('loginButton',params)

                })

            })

    }
    componentDidMount(){
        console.log('Loading')
        this.insertGapiScript();
 
    }

    render(){
      return (
          <div>
        <div>
        <BrowserRouter>
                 <Switch>
        
                    <Route exact path="/" render={() => this.ifUserSignedIn(Home)}/>
                    <Link to="/"></Link> 
        
                 </Switch>
           </BrowserRouter>
           </div>
        <div className="GoogleAuth">
           
           <div id="loginButton">sign in with google</div>


        </div>
        </div>
    )
}
}
export default App2;



