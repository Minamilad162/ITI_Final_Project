import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { Link, useParams } from 'react-router-dom';
import './Episodes.scss';

import API from '../../../API';
import Loader from '../../Shared/Loader/Loader';
import Footer from '../../Landing-Page/Footer';

export default function Episodes() {
    const [data, setData] = useState({ 1: [] });

    const { id } = useParams();

    useEffect(() => {
        API.get(`listepisodes/${id}`).then((response) => {
            const obj = [];
            response.forEach((item) => {
                obj.push(item);
            });
            console.log(obj);
            setData(obj);
        });
    }, []);

    function myArrow({ type, onClick, isEdge }) {
        const pointer =
            type === consts.PREV ? (
                <button className="carousel-control-prev" type="button" onClick={onClick} disabled={isEdge}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
            ) : (
                <button className="carousel-control-next" type="button" onClick={onClick} disabled={isEdge}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            );

        return pointer;
    }

    if (data[1].length === 0) return <Loader />;
    else
        return (
            <div id="Episodes">
                <div>
                    <h4 className="title">Episodes</h4>
                </div>
                <div className="SeriesContainer d-flex flex-wrap ">
                    {data.map((item, index) => (
                        <div
                            onClick={() => {
                                window.localStorage.setItem('video', item.video_url);
                                window.localStorage.setItem('poster', item.thumbnail_url);
                            }}
                        >
                            <Link to="/VideoPlayer">
                                <Card image_url={item.thumbnail_url} title={item.code} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center footer">
                    <Footer />
                </div>
            </div>
        );
}

function Card({ image_url, title }) {
    return (
        <div className="card bg-dark" style={{ width: '18rem' }} className={'m-5'}>
            <img src={image_url} class="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
}
