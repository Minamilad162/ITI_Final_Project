import React, { useEffect, useState } from 'react';
import {useHistory } from 'react-router-dom';
import "./Series.scss";

import API from '../../../API';
import Loader from '../../Shared/Loader/Loader';
import Footer from "../../Landing-Page/Footer";

export default function Series() {

    const history = useHistory()

    const [data, setData] = useState({1:[]});

    useEffect(() => {
        API.get('listseries').then((response) => {
            const obj = [];
            response.forEach(item => {

                obj.push(item);

            })
            setData(obj);
        });
    }, []);



    

    if (data[1].length === 0) return <Loader />;
    else
        return (
            <div id="Series">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade  " data-bs-ride="carousel">
                    <h4 className="title">Trending Now</h4>
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
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div>
                    <h4 className="title">Series</h4>
                </div>
                <div className="SeriesContainer d-flex flex-wrap ">
                    {data.map((item, index) => (
                        
                            <div onClick={ () => history.push(`/series/${item.id}`)}>
                            <Card image_url={item.thumbnail_url} desc={item.description}/>
                            </div>

                        
                    ))}
                </div>


                <div className="text-center footer">
                    <Footer />
                </div>
            </div>
        );
}

function Card({ image_url, desc }) {
    return (
        <div style={{ width: '18rem' }} className={'m-4 mb-5'}>

            <div className="card bg-dark" style={{width: '18rem'}}>
                <img src={image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{desc}</p>
                    </div>
            </div>

        </div>
    );
}
