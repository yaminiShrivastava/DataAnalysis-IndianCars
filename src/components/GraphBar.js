import React from 'react';
// import Props from 'prop-types'
import './Services.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Companies',
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

export default function GraphBar(Props) {
  return <Bar data={Props.data} title={Props.title}/>;
}
