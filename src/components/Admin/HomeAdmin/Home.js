import React from 'react';
import './Home.scss';
import Income from './Income';

class Home extends React.Component{
    render(){
        return(
            <div id='Home'>
                <div className={'m-5 p-5'}>
                    <h1 className="display-1">Hello Admin!</h1>
                    <h1 className="display-2">Welcome to your dashboard</h1>
                </div>


                {/*<Income/>*/}



            </div>
        )
    }
}

export default Home;
// import React from "react";
// import ReactDOM from "react-dom";
// // import { timeDay } from "d3";

// import { Chart } from "react-charts";

// import useDemoConfig from "./useDemoConfig";
// // import useLagRadar from "./useLagRadar";
// import ResizableBox from "./ResizableBox";
// // import "./styles.css";

// export default function App() {
//   useLagRadar();

//   const { data, randomizeData } = useDemoConfig({
//     series: 10,
//   });

//   const series = React.useMemo(
//     () => ({
//       showPoints: false,
//     }),
//     []
//   );

//   const axes = React.useMemo(
//     () => [
//       {
//         primary: true,
//         type: "time",
//         position: "bottom",
//         // filterTicks: (ticks) =>
//         //   ticks.filter((date) => +timeDay.floor(date) === +date),
//       },
//       { type: "linear", position: "left" },
//     ],
//     []
//   );

//   return (
//     <>
//       <button onClick={randomizeData}>Randomize Data</button>
//       <br />
//       <br />
//       <ResizableBox>
//         <Chart data={data} series={series} axes={axes} tooltip />
//       </ResizableBox>
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);