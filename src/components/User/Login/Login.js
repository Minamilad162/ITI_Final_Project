import React, { useState } from 'react';
import './login.scss';
import API from '../../../API';
import Footer from '../../Landing-Page/Footer';
import { useHistory } from 'react-router';

export default function Login({ header, endpoint }) {
    const history = useHistory();
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
        console.log(JSON.stringify(data));
        const response = await API.post(endpoint, JSON.stringify(data));
        localStorage.setItem('token', response.token);
        history.push('/home');
        window.location.reload();
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
                                <label className="form-label text">Username</label>
                                <input name="username" placeholder="Username" className="form-control input" onChange={handleChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text">Password</label>
                                <input type="password" name="password" placeholder="Your Password.." className="form-control input" onChange={handleChange}></input>
                            </div>
                            <button type="submit" className="btn btn-danger mb-3">
                                Log in
                            </button>

                        
                        </form>
                    </div>
                </div>
                <div className="text-center footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}
