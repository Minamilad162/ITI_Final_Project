import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import {  Link, } from 'react-router-dom';
import './Home.scss';
import footer from '../../Landing-Page/Footer';

import API from '../../../API';
import Loader from '../../Shared/Loader/Loader';
import Footer from '../../Landing-Page/Footer';

export default function Home() {
    const [data, setData] = useState({1:[]});

    useEffect(() => {
        API.get('listmovie').then((response) => {
            const obj = {};
            response.forEach(item => {
                if(!obj[item.categories[0]]) {
                    obj[item.categories[0]] = [item];
                } else {
                    obj[item.categories[0]].push(item);
                }
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
    
//    const addtolist = (e) =>{
//         API.post('mylist/movies/',JSON.stringify({description:e.target.description,release_date:e.target.release_date,title:
//         e.target.title,thumbnail_url:e.target.thumbnail_url,rate:e.target.rate, video:e.target.video_url,language:e.target.language,
        
//         }));

//     } 

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];

    if (data[1].length === 0) return <Loader />;
    else
        return (
            <div id="home">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade  " data-bs-ride="carousel">
                    <h4 className="title">Trending Now</h4>
                    <div className="carousel-indicators">
                        {data[16].map((item, index) => {
                            return index === 0 ? (
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            ) : (
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`}></button>
                            );
                        })}
                    </div>
                    <div className="carousel-inner" >

                        {data[16].map((item, index) => {
                             console.log(data);
                            return index === 0 ? (

                                <div className="carousel-item active" key={index}  onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url);}}>
                                   <Link to="/VideoPlayer"> <img src={item.thumbnail_url} className="d-block w-100 carousel-img img-fluid" alt="..." /></Link>
                                </div>
                            ) : (
                                <div className="carousel-item" key={index} onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url);}}>
                                    <Link to="/VideoPlayer"> <img src={item.thumbnail_url} className="d-block w-100 carousel-img img-fluid" alt="..." /></Link>                                </div>
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
                    <h4 className="title">Action</h4>
                </div>
                <Carousel breakPoints={breakPoints} itemPadding={[0, 0]} itemsToShow={5} pagination={false} renderArrow={myArrow} className=" carousel">
                    {data[5].map((item, index) => (

                        <div
                        onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url)}}>
                        <Link to="/VideoPlayer"><Card  image_url={item.thumbnail_url} Descrip={item.description} /></Link>
                         </div>
                    ))}
                </Carousel>
                <div>
                    <h4 className="title">Comedy</h4>
                </div>
                <Carousel breakPoints={breakPoints} itemPadding={[0, 0]} itemsToShow={5} pagination={false} renderArrow={myArrow} className="mt-5 carousel">
                    {data[6].map((item, index) => (

                        <div
                        onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url)}}>
                        <Link to="/VideoPlayer"><Card  image_url={item.thumbnail_url} Descrip={item.description} /></Link>
                         </div>
                    ))}
                </Carousel>
                <div>
                    <h4 className="title">Cartoon</h4>
                </div>
                <Carousel breakPoints={breakPoints} itemPadding={[0, 0]} itemsToShow={5} pagination={false} renderArrow={myArrow} className="mt-5 carousel">
                    {data[4].map((item, index) => (

                        <div
                        onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url)}}>
                        <Link to="/VideoPlayer"><Card  image_url={item.thumbnail_url} Descrip={item.description} /></Link>
                         </div>
                    ))}
                </Carousel>
                <div>
                    <h4 className="title">Documentaries</h4>
                </div>
                <Carousel breakPoints={breakPoints} itemPadding={[0, 0]} itemsToShow={5} pagination={false} renderArrow={myArrow} className="mt-5 carousel">
                    {data[1].map((item, index) => (

                        <div
                        onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url)}}>
                        <Link to="/VideoPlayer"><Card  image_url={item.thumbnail_url} Descrip={item.description} /></Link>
                         </div>
                    ))}
                </Carousel>
                <div>
                    <h4 className="title">Series</h4>
                </div>
                <Carousel breakPoints={breakPoints} itemPadding={[0, 0]} itemsToShow={5} pagination={false} renderArrow={myArrow} className="mt-5 carousel">
                    {data[12].map((item, index) => (

                        <div
                        onClick={() => {window.localStorage.setItem("video",item.video_url);window.localStorage.setItem("poster",item.thumbnail_url)}}>
                        <Link to="/VideoPlayer"><Card  image_url={item.thumbnail_url} Descrip={item.description} /></Link>
                        {/* <i onClick={addtolist} class="far fa-heart m-2"></i> */}
                         </div>
                    ))}
                </Carousel>

                <div className="text-center footer">
                    <Footer />
                </div>
            </div>
        );
}

function Card({ image_url, Descrip }) {
    return (
        <div style={{ width: '18rem' }}>
            <img src={image_url} class="card-img-top" alt="..." />
            <span className={'card-desc'}>{Descrip}</span>
           
        </div>
    );
}
