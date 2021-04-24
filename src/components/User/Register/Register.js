import React, { Component } from "react";
import "./Register.scss";
import API from '../../../API';
import Footer from "../../Landing-Page/Footer";

class Register extends Component {
    constructor(props,id) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const newData = {
            [e.target.name]: e.target.value,
        };
        this.setState(newData);
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await API.post('register/', JSON.stringify(this.state));   
            window.localStorage.setItem("userid",response.id)
            window.location.replace('/login');
        } catch(err) {
            alert('Something went wrong');
        }
    }

    render() {
        return (
            <div id="Register" className=" flex-wrap  ">
                <div className="box d-flex justify-content-around flex-column align-items-center">
                    <div className='login-card'>
                    <div>
                        <h1 className="title text label text-center ">Sign Up</h1>
                    </div>

                    <form className="form " onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                            <label className="form-label text label">
                                    Email
                            </label>
                            <input className='input'
                                name='email'
                                onChange={this.handleChange}
                                placeholder="Email"
                                className="form-control input"
                            />
                        </div>
                        
                        <div class="mb-3">
                            <label className="form-label text label">
                                username
                            </label>
                            <input className='input'
                                name='username'
                                onChange={this.handleChange}
                                placeholder="username"
                                className="form-control input"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label text label ">Password</label>
                            <input
                                type="password"
                                placeholder="Your Password.."
                                className="form-control input"
                                name="password"
                                onChange={this.handleChange}
                            ></input>
                        </div>

                        
                        <div className="mb-3">
                            <label className="form-label text label ">Repeat Your Password</label>
                            <input
                                type="password"
                                placeholder="Repeat Your Password.."
                                className="form-control input"
                                name="password2"
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-danger mb-3 ">
                            Submit
                        </button>
                    </form>
                    </div >
                </div>
                <div className='text-center footer'>
                            <Footer/>
            </div>
            </div>
        );
    }
}

export default Register;
