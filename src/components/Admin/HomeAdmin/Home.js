import React from 'react';
import './Home.scss';
import Income from './Income';

class Home extends React.Component{
    render(){
        return(
          <div id='Home'>
      <h1 className='ftitle m-4 d-flex justify-content-around flex-column align-items-center'>Welcome Admin</h1>

      
            <Income/>



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