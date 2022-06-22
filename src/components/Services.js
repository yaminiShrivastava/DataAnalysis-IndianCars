import React from 'react';
import './Services.css';
import GraphBar from './GraphBar.js';
import GraphPie from './GraphPie.js';
import LineGraph from './LineGraph';


const data1 = {
  labels:['Tata', 'Datsun', 'Renault', 'Maruti Suzuki' ,'Hyundai' ,'Premier' ,'Toyota',
  'Nissan' ,'Volkswagen', 'Ford' ,'Mahindra' ,'Fiat' ,'Honda', 'Jeep', 'Isuzu',
  'Skoda', 'Audi', 'Mercedes', 'Dc' ,'Mini', 'Volvo' ,'Jaguar', 'Bmw' ,'Land Rover',
  'Porsche', 'Lexus', 'Maserati', 'Lamborghini' ,'Bentley' ,'Ferrari',
  'Aston Martin' ,'Bugatti', 'Bajaj', 'Icml' ,'Force' ,'Mg' ,'Kia',
  'Land Rover Rover' ,'Mitsubishi' ,'Maruti Suzuki R'],
  datasets: [
    {
      label: 'Total No Of Cars',
      data: [100,24,36,149,130,6,82,29,34,43,119,23,64,28,5,43,31,55,1,10,18,22,46,9,14,10,9,13,6,8,3,2,2,11,6,13,21,27,7,14],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
};

export const Companies_pieData = {
  labels: ['Maruti Suzuki', 'Hyundai', 'Mahindra', 'Tata', 'Toyota', 'Honda','Mercedes','Bmw','Ford','Skoda'],
  datasets: [
    {
      label: 'Top 10 Car Manufacturer Companies in India',
      data: [149,130,119,100,82,64,55,46,43,43],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



export const DriveTrain_pieData = {
  labels: ['4WD','AWD','FWD','RWD'],
  datasets: [
    {
      label: 'Drive Train',
      data: [4.6,12.1,69.9,13.4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ],
};



export const Fuel_pieData = {
  labels: ['Petrol','Diesel','CNG','Hybrid','Electric','CNG + Petrol'],
  datasets: [
    {
      label: 'Top 10 Car Manufacturer Companies in India',
      data: [50.4,45.6,1.3,1.2,1.1,0.5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export const Transmission_pieData = {
  labels: ['Manual','Automatic'],
  datasets: [
    {
      label: 'Cars Transmission Type',
      data: [67.8,32.2],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};





export const Class_pieData = {
  labels: ['Economy','Luxury','Mid-Range','Ultra-Luxury'],
  datasets: [
    {
      label: 'Class types according to Customer',
      data: [35.7,11.7,52.3,0.4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



export const data = {
  labels:['SUV','HatchBack','Sedan','Sports','MUV','MPV','Crossover','Coupe','Convertible','Sports, HatchBack','Sedan, Coupe','Crossover, SUV','Sedan, Crossover','Sports, Convertible','Pick-up','Coupe, Convertible'],
  datasets: [
    {
      label: 'Petrol',
      data: [144,216,171,2,15,23,5,40,19,1,2,1,0,2,0,1],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Diesel',
      data: [288,84,149,1,23,14,13,0,1,0,0,1,1,0,3,0],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Electric',
      data: [10,12,16,0,0,0,0,0,0,0,0,0,0],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};


export const data3 = {
  labels:['SUV','HatchBack','Sedan','Sports','MUV','MPV','Crossover','Coupe','Convertible','Sports, HatchBack','Sedan, Coupe','Crossover, SUV','Sedan, Crossover','Sports, Convertible','Pick-up','Coupe, Convertible'],
  datasets: [
    {
      label: 'Ex-Showroom Price',
      data: [1529000,621818.5,1099144,22142900,1592000,986689,771016,27245000,19354840,4350000,12267000,4250000,4426500,7190000,1806813,4336750],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

export default function Services() {
  return (
    <>
    <div>
    <div class="sidebar">
  <a  href="#maintop">Indian Cars Data Analysis and Visualization</a>
  <a href="#Introduction">Introduction</a>
  <a href="#CarsDispatched">Cars Dispatched</a>
  <a href="#topCompanies_pie">Top Manufacturers</a>
  <a href="#Transmission_pie">Transmission Type</a>
  <a href="#Class_pie">Customer Class type</a>
  <a href="#FuelTypes">Fuel Consumption</a>
  <a href="#bodyTypeComparison">Body Types vs Fuel Types</a>
  <a href="#PriceVaries">Avg Price </a>
  <a href="#sales">Previous Years Sales</a>
  <a href="#DriveTrain">DriveTrain Analysis</a>
  <a href="#Conclusion">Conclusion</a>
  <hr/><br/>
</div>
    <div className='content'>

    <div id='maintop' >
    <h1 className='maintop' >Indian Cars Data Analysis and Visualization</h1>
      <div className='text' id="Introduction">Everyone has a different perspective about Cars. Some go for luxury. Some go for vintage cars. Some prefer cars based on their economic condition. Based on all these factors, how many car models of different companies are available for Indians?<br/>
      Let's perform an analysis over that. In this article, I am going to do some data analysis of different car companies, which sell cars in India. Let's start with a cup of coffee.</div>
    </div>

    <div id="CarsDispatched" className='BarCard card '>
      <div className='heading bg-dark bg-gradient text-light text-center'>Cars Dispatched</div>
      <div className='Bar' >
      <GraphBar data={data1} />
      </div>
      <div className='text'>
        From the above graph we can conclude that<br/>
      Maruti Suzuki has more car variants than any other company in India.<br/>The Top 5 companies with more than car variants in India are Maruti Suzuki, Hyundai, Mahindra, Tata, and Toyota.<br/>Sports car variants are very low
      </div>
    </div>



    <div id='topCompanies_pie' className='PieCard card'>
    <div className='heading bg-dark bg-gradient text-light text-center'>Top Car Manufacturer</div>
      <div className='pie' >
      <GraphPie data={Companies_pieData} />
      </div>
      <div className='text'>
        The top 10 car manufacturer in India as clearly visible from graph are :<br/><br/>
        <b>Maruti Suzuki, Hyundai, Mahindra, Tata, Toyota, Honda, Mercedes, Bmw, Ford, Skoda</b> 
      </div>
    </div>


    <div id='Transmission_pie' className='PieCard card'>
    <div className='heading bg-dark bg-gradient text-light text-center'>Transmission Type( in % )</div>
      <div className='pie' >
      <GraphPie data={Transmission_pieData} />
      </div>
      <div className='text'>
        It shows the trend in india that nowadays manual cars are more preferred but also automatic cars are making their place in India. And customers are also getting comfortable with automatic car and cars are also evolving with modern world .
      </div>
    </div>





    <div id='Class_pie' className='PieCard card'>
    <div className='heading bg-dark bg-gradient text-light text-center'>Class Type</div>
      <div className='pie' >
      <GraphPie data={Class_pieData} />
      </div>
      <div className='text'>
        It is clearly visible from the above pie graph that mid range cars are more preferred. 
      </div>
    </div>




      <div id="FuelTypes" className='PieCard card'>
      <div className='heading bg-dark bg-gradient text-light text-center'>Fuel consumption ( in % )</div>
      <div className='pie' >
      <GraphPie data={Fuel_pieData}/>
      </div>
      <div className='text'>
      Uff! Almost 90% of Indian cars run on Petrol or Diesel. This is Scary if we see it from an Environment point of view.<br/>This data is going to change because electric vehicles have arrived in India.
      </div>
      </div>


      
      {/* <img  src = "https://infovisual.info/storage/app/media/05/img_en/006%20Types%20of%20bodies.jpg"/> */}
      {/* <div className='text'>Above image shows several car body types</div> */}


    <div  id="bodyTypeComparison" className='BarCard card '>
    <div className='heading bg-dark bg-gradient text-light text-center'>Body-Type vs Fuel-Type</div>
      <div className='Bar'>
      <GraphBar data={data}  />
      </div>
      <div className='text'>
      The graph shows the trend of electric cars is slowly developing specially in SUV, hatch backs and sedans. In heavy weight vehicles like MPV , MUV, pickups the breakthrough is yet to occur. Diesel and gas is the primary source to power these vehicles still.
      </div>
    </div>

    <div id='PriceVaries' className='BarCard card'>
    <div className='heading bg-dark bg-gradient text-light text-center'>Car Budget</div>
      <div className='Bar' >
      <GraphBar data={data3} />
      </div>
      <div className='text'>
        form the above bar graph we can take a rough idea of how price varies from SUV to Sedan and based on that we can 
      </div>
      </div>


<div className='card  sales' id='sales'>
<div className='heading bg-dark bg-gradient text-light text-center'>Past 10 years Sales( in M )</div>
        <div className='line'>
      <LineGraph/>
      </div>
      <div className='text'>
      A decrease in trend in cars available for sale from 2012 show that fewer cars were manufactured in 2012 which can be due to the 2012 financial crisis, the decrease from 2014 onwards can be attributed to temporal proximity to the date the data was collected on. As the cars are already newer users are less likely to sale them ,this is confirmed by the steep decrease from 2012 onwards. And also decrease in trend shown in year later 2019 maybe because of Covid-19 but now indian economy are recovering itself<br/>
      </div>
    </div>



    <div id="DriveTrain" className='PieCard card'>
      <div className='heading bg-dark bg-gradient text-light text-center'>Drive-train analysis</div>
      <div className='pie' >
      <GraphPie data={DriveTrain_pieData}/>
      </div>
      <div className='text'>
      Cars having forword drive train are more in trend in india than other car drive train types. and after this reverse drive train is in demand. It is clearly visible from pie chart that almost more than half cars are of type forward drive train.
      </div>
      </div>




<div className='servicesCard card' id='Conclusion'>


      
      <div className='heading bg-dark bg-gradient text-light text-center'>Conclusion</div>
      
      <div className='text'>After thorough analysis of the data set, we were successful in making reasonable conclusions regarding the sale trends in used cars and automobile industry generally. Many of our hypothesis regarding used cars and what factors affect their prices were proved right but some of them like more cars for sale mean cheaper cars were proved wrong. This highlights that there are more factors like taxes which are out of scope of our data set but play a significant part in affecting used car prices. For the final part we wanted to predict price of a car given the state it is being sold in , its type , title, drive, mileage and condition. We were somewhat successful in giving a general idea but because of limitations of time and data set we still have a long way to go. For experimental purposes we even trained a logistical model. Our logistical model was not accurate but could make an educated guess regarding any feature of a car given other features . Looking forward, we would like to acquire more data for accurate prediction of price so that if someone wants to buy a used car they have an idea of what it would cost them before hand and not end up paying more than the car's worth.</div>
      </div>
      <br/><br/><br/><br/>


      </div>
      </div>
      </>
  )
}
