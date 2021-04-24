import react from 'react';
import './cover.css';

export default function Accordion() {
    return (
        <div className="accord justify-content">
            <h1 className="Info">Frequently Asked Questions</h1>
            <div className="accordion accordion-flush bg-dark " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header " id="flush-headingOne">
                        <button
                            className="accordion-button collapsed bb"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            <span className="span">What Is CinemaFy ?</span>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bb">
                            Cinemafy is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You
                            can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and
                            movies are added every week!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed bb"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            <span className="span">How much Cinemafy Coast ?</span>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bb">
                            Watch Cinemafy on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs,
                            no contracts
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed bb"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree "
                        >
                            <span className="span">Where Can I watch ?</span>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bb">
                            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Cinemafy account to watch instantly on the web at Cinemafy.com from your personal computer or
                            on any internet-connected device that offers the Cinemafy app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download
                            your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Cinemafy with you
                            anywhere.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button
                            className="accordion-button collapsed bb"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour "
                        >
                            <span className="span">How do I cancel ?</span>
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bb">
                            Cinemafy is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or
                            stop your account anytime..
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button
                            className="accordion-button collapsed bb"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive "
                        >
                            <span className="span">What Can I watch on Cinemafy</span>
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bb">
                            Cinemafy has an extensive library of feature films, documentaries, TV shows, anime, award-winning Cinemafy originals, and more. Watch as much as you want, anytime you want
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
