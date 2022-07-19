import {Chart,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend,} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'

export const Grafic = ()=>{

    const [data,setData] = useState([3.43,3.4,3.3,3.8,3.6,3.8,4])

    Chart.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Ultimos cambios de Criptomonedas a Soles',
          },
        },
      }
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const _data = {
        labels,
        datasets: [{
            fill: true,
            label: 'Precio de la transaccion',
            data,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }]
        }
    return <Line options={options} data={_data} />
}