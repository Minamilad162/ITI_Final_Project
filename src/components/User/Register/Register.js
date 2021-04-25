import React, { useState } from 'react';
import './Register.scss';
import API from '../../../API';
import Footer from '../../Landing-Page/Footer';
import {useHistory} from 'react-router-dom';

export default function Register() {
    const [data, setData] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const newData = {
            [e.target.name]: e.target.value,
        };
       setData(newData);
    }

     const handleSubmit = async (e) =>   {
        e.preventDefault();
        try {
            const response = await API.post('register/', JSON.stringify(data));
            window.localStorage.setItem('userid', response.id);
            history.push('/login');
        } catch (err) {
            alert('Something went wrong');
        }
    }

        return (
            <div id="Register" className=" flex-wrap  ">
                <div className="box d-flex justify-content-around flex-column align-items-center">
                    <div className="login-card">
                        <div>
                            <h1 className="title text label text-center ">Sign Up</h1>
                        </div>

                        <form className="form " onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label className="form-label text label">Email</label>
                                <input className="input form-control input" name="email" onChange={handleChange} placeholder="Email"  />
                            </div>

                            <div class="mb-3">
                                <label className="form-label text label">username</label>
                                <input className="input form-control input" name="username" onChange={handleChange} placeholder="username" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text label ">Password</label>
                                <input type="password" placeholder="Your Password.." className="form-control input" name="password" onChange={handleChange}></input>
                            </div>

                            <div className="mb-3">
                                <label className="form-label text label ">Repeat Your Password</label>
                                <input type="password" placeholder="Repeat Your Password.." className="form-control input" name="password2" onChange={handleChange}></input>
                            </div>
                            <button type="submit" className="btn btn-danger mb-3 ">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center footer">
                    <Footer />
                </div>
            </div>
        );
}
