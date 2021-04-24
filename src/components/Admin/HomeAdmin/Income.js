import React from 'react';
import './Income.scss';


export default function Income() {

    return (
        <div id='Income'>

            <div className="d-flex justify-content-between">
                
                    <div className="">
                        <div className='In Text1'>
                            <h1 >Total Income</h1>
                            <h2 >59,000$</h2>
                            <h5>saved 25%</h5>
                        </div>
                    </div>
                    <div className='out Text2'>
                        <h1>
                            Total Expences
                        </h1>
                        <h2>
                            79,000$
                        </h2>
                        <h5>saved 25%</h5>
                    </div>
                    {/* <div className=' Text2'>
                        <h1>
                            Total Expences
                        </h1>
                        <h2>
                            79,000$
                        </h2>
                        <h5>saved 25%</h5>
                    </div> */}
                        

                </div>    
        </div>
    )

}