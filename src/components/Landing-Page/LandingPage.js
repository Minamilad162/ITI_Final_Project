import react from 'react';
import { Link } from 'react-router-dom';
import Accordion from './accordion';
import Footer from "./Footer";
import './cover.css';

export default function LandingPage() {
    return (
        <div>
        <div className="d-flex text-center text-white bg-black landing-page back ">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3 font margin">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p className="lead">Watch anywhere. Cancel anytime.</p>
                    <p className="lead">Ready to watch? Enter your email to create or restart your membership.</p>
                    <p className="lead ">
                        <Link to="/Register" className="btn btn-lg btn-danger fw-bold border-black button ">
                            Register
                        </Link>
                        <Link to="/Login" className="btn btn-lg btn-warning fw-bold border-black button2  m-4">
                            Login
                        </Link>
                    </p>
                </main>
                
                <Accordion/>
                <Footer/>
               
               
            </div>
        </div>
        
        </div>
    );
}
