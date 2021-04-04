import React, { Component } from 'react';
import './RegisterAdmin.css';
class RegisterAdmin extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Register" className=" flex-wrap "  >
            <div className="box"> 
            <div>
         
            </div>  
                <div>
                <h1 className="title text ">Add a New Admin</h1>    
                </div> 
            
            <form className="form ">
                <div class="mb-3">
                    <label  className="form-label text" value={this.state.email} onChange={this.changeInput} >First name</label>
                    <input type="email"  placeholder="First Name.." className="form-control input"  />
                </div>
                <div class="mb-3">
                    <label  className="form-label text" value={this.state.email} onChange={this.changeInput} >Last name</label>
                    <input type="email"  placeholder="Last Name.." className="form-control input"  ></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label text ">Password</label>
                    <input type="password" placeholder="Your Password.." className="form-control input" onChange={this.changeInput}></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label text ">Password</label>
                    <input type="password" placeholder="Repeat Your Password.." className="form-control input" onChange={this.changeInput}></input>
                </div>
            
                  <span style={{color:'red'}}> {this.state.error}</span> <br/>
                <button  type="submit" onClick={this.Register} className="btn btn-danger mb-3 ">Submit</button>
                </form>        
            </div>  
            </div>  
         );
    }
}
 
export default RegisterAdmin;