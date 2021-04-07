import React, { useState, useEffect } from "react";
import "./login.scss";
import API from "../../../API";
import Nav from '../../Shared/Nav/Nav';
import { useHistory } from "react-router";
import Footer from "../../Landing-Page/Footer";

// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false
//         }
//     }
// }

export default function Login({ header, endpoint }) {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const newData = {
            [e.target.name]: e.target.value,
        };
        console.log({ ...data, ...newData });
        setData({ ...data, ...newData });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await API.post(endpoint, data);
        localStorage.setItem("token", response.token);
        window.location.replace('/');
    };

    return (
        <>
            <div id="login">
                <div className="d-flex justify-content-around flex-column align-items-center">
                    <div className="login-card">
                        <div>
                            <h1 className="title text">{header}</h1>
                        </div>

                        <form className="form p-3" onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label className="form-label text">
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    placeholder="Email.."
                                    className="form-control input"
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    placeholder="Your Password.."
                                    className="form-control input"
                                    onChange={handleChange}
                                ></input>
                            </div>
                            {/* <span style={{ color: "red" }}> {this.state.error}</span> <br /> */}
                            <button
                                type="submit"
                                className="btn btn-danger mb-3"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
                <div className='text-center footer'>
                            <Footer/>
                        </div>
            </div>
        </>
    );
}
