import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' ,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Past 10 Years Revenue',
    },
  },
  scales: {
    y: {
      type: 'linear' ,
      display: true,
      position: 'left' ,
    },
    y1: {
      type: 'linear' ,
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['Mar-11','Mar-12','Mar-13','Mar-14','Mar-15','Mar-16','Mar-17','Mar-18','Mar-19','Mar-20','Mar-21','Mar-22'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Tata',
      data: [48040,54306,44765,34288,36294,42845,44363,58831,69202,43928,47031,47263],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Mahindra',
      data: [23894,32319,40990,41226,39794,41725,45398,49721,55302,47155,46262,50100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
    {
        label: 'Maruti Suzuki',
        data: [37127,36413,44400,44523,50802,58999,70334,81808,88391,79031,73278,90089],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        yAxisID: 'y1',
      },
  ],
};

export default function LineGraph() {
  return <Line options={options} data={data} />;
}
