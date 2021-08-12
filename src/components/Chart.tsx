import {Line} from 'react-chartjs-2'
import stat from '../assets/data/stat.json'
import { CovData } from '../utils'

const Stats:CovData=stat
export function Chart (){
  const chartData ={
    labels:Stats.data.map(e=>e.date),
    datasets:[
              {
                  label:'In treatement',
                  data:Stats.data.map(e=>e.c-e.d),
                  backgroundColor:[
                  ],
                  fill:'none',
                  pointRadius:2,
                  borderColor:'blue',
                  borderWidth:1,
                  lineTension:0,
                  pointHoverBackgroundColor:'blue'
              },
              {
                label:'Recovery',
                data:Stats.data.map(e=>e.r),
                backgroundColor:[
                ],
                fill:'none',
                pointRadius:2,
                borderColor:'green',
                borderWidth:1,
                lineTension:0,
                pointHoverBackgroundColor:'green'
            },
            {
                label:'Death',
                data:Stats.data.map(e=>e.d),
                backgroundColor:[
                ],
                fill:'none',
                pointRadius:2,
                borderColor:'red',
                borderWidth:1,
                lineTension:0,
                pointHoverBackgroundColor:'red'
            },
            {
                label:'Cases',
                data:Stats.data.map(e=>e.c),
                backgroundColor:[
                ],
                fill:'none',
                pointRadius:2,
                borderColor:'yellow',
                borderWidth:1,
                lineTension:0,
                pointHoverBackgroundColor:'yellow'
            }
          ]
  }
      return(
          <div className="chart" id="chart">
              <Line
              data={chartData}
              />             
          </div>
      )
}