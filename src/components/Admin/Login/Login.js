import React, { Component } from 'react';
import './LoginAdmin.css';
class LoginAdmin extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div id="Register" className="container flex-wrap "   >
            <div>   
                <div>
                    <h4 className="title text">Hello Admin!</h4>
                </div>
                <div>    
                <h1 className="title text">Sign In</h1>    
                </div> 
            
            <form className="form ">
                <div class="mb-3">
                    <label  className="form-label text" value={this.state.email} onChange={this.changeInput} >Username</label>
                    <input type="Text"  placeholder="Username.." className="form-control input"  ></input>
                </div>
            
                <div className="mb-3">
                    <label  className="form-label text">Password</label>
                    <input type="password" placeholder="Your Password.." className="form-control input" onChange={this.changeInput}></input>
                </div>
            
                  <span style={{color:'red'}}> {this.state.error}</span> <br/>
                <button  type="submit" onClick={this.login} className="btn btn-danger mb-3">Log in</button>
                </form>        
            </div>  
            
            </div> 
         );
    }
}
 
export default LoginAdmin;