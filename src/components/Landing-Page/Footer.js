import './cover.css';

export default function Footer() {
    return (
        <div>
            <footer className=" text-white pt-8 my-md-8  border-top ">
                <h1 className="footer">Contact Us</h1>
                <div className="container ">
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>

                        {/* <!-- Google --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-google"></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>

                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>

                    <section className="mb-4">
                        <p>
                            CinemaFy is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You
                            can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and
                            movies are added every week!.
                        </p>
                    </section>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center p-3">
                    © 2021 Copyright:
                    <a className="text-white" href="https://www.netflix.com/browse">
                        CinemaFy
                    </a>
                </div>
            </footer>
        </div>
    );
}
