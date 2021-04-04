import React, { Component } from "react";
import "./Register.css";
import API from '../../../API';

class Register extends Component {
    constructor(props) {
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
        const response = await API.post('register', this.state);
    }

    render() {
        return (
            <div id="Register" className=" flex-wrap ">
                <div className="box">
                    <div>
                        <h1 className="title text ">Sign Up</h1>
                    </div>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label className="form-label text">
                                First name
                            </label>
                            <input
                                name={"first_name"}
                                onChange={this.handleChange}
                                placeholder="First Name.."
                                className="form-control input"
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                className="form-label text"
                                value={this.state.email}
                                onChange={this.changeInput}
                            >
                                Last name
                            </label>
                            <input
                                placeholder="Last Name.."
                                className="form-control input"
                                name={"last_name"}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text ">Password</label>
                            <input
                                type="password"
                                placeholder="Your Password.."
                                className="form-control input"
                                name={"password"}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text ">Password</label>
                            <input
                                type="password"
                                placeholder="Repeat Your Password.."
                                className="form-control input"
                                name={"confirm_password"}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-danger mb-3 ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
