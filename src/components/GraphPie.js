import React from 'react';
// import Props from 'prop-types'
import './Services.css';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' ,
    },
    title: {
      display: true,
      text: 'Top 10 Companies',
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
  }
    
  },
};
export default function GraphPie(Props) {
  return <Pie data={Props.data}  options={options} />;
}
