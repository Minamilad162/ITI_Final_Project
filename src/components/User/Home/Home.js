import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import './Home.scss';

import API from '../../../API';
import Loader from '../../Shared/Loader/Loader';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.get('unknown').then((response) => {
            setData(response.data);
        });
    }, []);

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <h1>{'<'}</h1> : '👉';
        return (
            <button onClick={onClick} disabled={isEdge} classNameName="btn blue-circle">
                {pointer}
            </button>
        );
    }

    if (data.length === 0) return <Loader />;
    else
        return (
            <div id="home">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C561BAQGEbvT3SFyR9Q/company-background_10000/0/1582050035728?e=2159024400&v=beta&t=xwPLRsVBBNXQQS3HN3q7hsYXmt6JxJsH6lpnbh9Y1ko"
                                className="d-block w-100 carousel-img img-fluid"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.ctfassets.net/u0haasspfa6q/2sMNoIuT9uGQjKd7UQ2SMQ/1bb98e383745b240920678ea2daa32e5/sell_landscape_photography_online"
                                className="d-block w-100 carousel-img img-fluid"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C511BAQHKVJfYvoDBHQ/company-background_10000/0/1519809258043?e=2159024400&v=beta&t=YKoskyj_LQ8xRFU5PoPUU2-UritcDq8h_aHlg0jtd90"
                                className="d-block w-100 carousel-img img-fluid"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Carousel itemsToShow={4} pagination={false} renderArrow={myArrow}>
                    {data.map((item, index) => (
                        <h1 key={index}>{item.name}</h1>
                    ))}
                </Carousel>
            </div>
        );
}
