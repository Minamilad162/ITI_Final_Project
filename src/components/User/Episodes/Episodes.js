import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import "./Episodes.scss";

import API from '../../../API';
import Loader from '../../Shared/Loader/Loader';
import Footer from "../../Landing-Page/Footer";

export default function Episodes() {
    const [data, setData] = useState({1:[]});

    useEffect(() => {
        API.get(`listepisodes/${localStorage.getItem("seasonid")}`).then((response) => {
            const obj = [];
            response.forEach(item => {
                 
                    obj.push(item);
                
            })
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
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade  " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {data.map((item, index) => {
                            return index === 0 ? (
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            ) : (
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`}></button>
                            );
                        })}
                    </div>
                    <div className="carousel-inner">
                        {data.map((item, index) => {
                             console.log(data);
                            return index === 0 ? (
                               
                                <div className="carousel-item active" key={index}>
                                   <img src={item.thumbnail_url} className="d-block w-100 carousel-img img-fluid" alt="..." /> 
                                </div>
                            ) : (
                                <div className="carousel-item" key={index}>
                                    <img src={item.thumbnail_url} className="d-block w-100 carousel-img img-fluid" alt="..." />
                                </div>
                            );
                        })}
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
                <div>
                    <h4 className="title">Seasons</h4>
                </div>
                <div className="SeriesContainer d-flex flex-wrap ">
                    {data.map((item, index) => (
                        <div onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url)}}>
                       <Link to="/VideoPlayer"><Card image_url={item.thumbnail_url}/></Link>
                       </div>
                    ))}
                </div>    
                
                   
                <div className="text-center footer">
                    <Footer />
                </div>
            </div>
        );
}

function Card({ image_url }) {
    return (
        <div style={{ width: '18rem' }}>
            <img src={image_url} class="card-img-top" alt="..." />
        </div>
    );
}
