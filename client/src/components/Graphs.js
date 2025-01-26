import React from 'react'
import {Chart, ArcElement} from  "chart.js"
import {Doughnut} from "react-chartjs-2"
import Labels from './Labels'
import { chart_Data, getTotal } from '../helper/helper'
import { default as api } from "../store/apiSlice";



// steps to use chart.js
// 1-npm i chart.js
// 2-npm i react-chart.js-2
// 3-import {Chart, ArcElement} from  "chart.js"
// import {Doughnut} from "react-chartjs-2"
// 4-Chart.register(ArcElement)
// 5-data object create karna
// 6-inside donut componbet using data object


Chart.register(ArcElement)
// const config ={
//   data:{
//       labels: [
//         'Red',
//         'Blue',
//         'Yellow'
//       ],
//       datasets: [{
//         label: 'My First Dataset',
//         data: [300, 50, 100],
//         backgroundColor: [
//           'rgb(255, 99, 132)',
//           'rgb(54, 162, 235)',
//           'rgb(255, 205, 86)'
//         ],
//         hoverOffset: 4,
//         borderRadius:30,
//         spacing:10

//       }]
//     },
//     options: {
//       cutout:115
//     }

// }

function Graphs() {
   const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();
   
  
    let graphData;
  
    if (isFetching) {
      graphData = <div>FETCHING</div>;
    } else if (isSuccess) {
      // chart_Data(data)
      graphData =  <Doughnut {...chart_Data(data)}></Doughnut>

   
    } else if (isError) {
      graphData = <div>Error</div>;
    }

  return (
    <div>
         <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart relative">
               {/* <Doughnut data={config}</Doughnut> */}
               {/* <Doughnut {...config}></Doughnut> */}
               {graphData}
                <h3 className='mb-4 font-bold title'> TOTAL
                    <span className='block text-3xl text-green-400'>$ {getTotal(data) ?? 0}</span>
                </h3> 
            </div>   

            <div className="flex flex-col py-10 gap-4">
              <Labels></Labels>
            </div> 
        </div>
    </div>
    </div>
  )
}

export default Graphs
