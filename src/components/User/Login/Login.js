import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = { 
        email:"",
        password:"",
        error:""
    }

        login = () =>{
            fetch("https://reqres.in/api/login",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(this.state)
            }).then(res=>res.json()).then(res=>{
                if(res.error){
                   this.setState({error:res.error})
                }else if(res.token){
                   localStorage.token=res.token;
                }
            }).catch(err=>{
                alert(err.error);
            })
   
        }
   
        changeInput=(e)=>{
            let statepropname = e.target.name;
            this.setState({[statepropname]:e.target.value})
        }
         
    render() { 
        return (
            <div id="Login" className="container flex-wrap " style={{backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e82ecf0-5873-4e02-8619-2307b8ed65a1/EG-en-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg")' ,backgroundRepeat: 'no-repeat',width:'100%',height:'100%', backgroundSize:'cover', backgroundPosition: 'Absolute' }} >
<div>   
    <div>
    <h1 className="title text">Sign In</h1>    
    </div> 

<form className="form ">
    <div class="mb-3">
        <label  className="form-label text" value={this.state.email} onChange={this.changeInput} >Email address</label>
        <input type="email"  placeholder="Email.." className="form-control input"  ></input>
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
 
export default Login;