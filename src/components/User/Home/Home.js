import React, { useEffect, useState } from "react";
import Carousel, {consts} from "react-elastic-carousel";

import API from '../../../API';
import Loader from "../../Shared/Loader/Loader";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect( () => {
        API.get('unknown')
        .then( response => {
            setData(response.data);
        })
    }, [])

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <h1>{"<"}</h1> : '👉'
        return (
          <button onClick={onClick} disabled={isEdge} className="btn blue-circle">
            {pointer}
          </button>
        )
      }

    if(data.length === 0) 
        return <Loader />
    else
        return (
        <div id="home">
            <Carousel itemsToShow={1} pagination={false} renderArrow={myArrow} enableAutoPlay={true} >
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'} />
                
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'} />
                
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'} />
            </Carousel>
            <Carousel itemsToShow={4} pagination={false} renderArrow={myArrow}>
                {
                    data.map((item, index) => (
                        <h1 key={index}>{item.name}</h1>
                    ))
                }
            </Carousel>
        </div>
        );
}
