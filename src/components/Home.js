import React from 'react'
import './Home.css'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Home() {
  return (
      <>
        <div className='section-1 box'>
          <h1 className='text-light d-flex  justify-content-center txt '>Clear Your Doubts Here<hr/></h1>
        </div>
        <div className='section-2 box'>
          <div className='feature'>
          <h2  className='mx-3 my-3'><hr/>Features<hr/></h2>
        </div>
        <div className="row my-3 mx-3 features">
          <div className="col-sm-4">
            <div className="card feature-card
            ">
              <div className="card-body">
                <img src="https://media.istockphoto.com/photos/vehicles-collection-picture-id186750532?k=20&m=186750532&s=612x612&w=0&h=twXAqewQ9LNHufnAX17DqK88I2VwcC-EXPebwHWbWZ0=" className=" my-3  card-img-top" alt="..."/>
                <h5 className="card-title text-center my-3">Full Comparision</h5>
                <p className="card-text text-justify">This website is easy to use and everything is just a click away.It have a beautiful interface. and here you can compare everything according to your interest </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card feature-card
            ">
              <div className="card-body">
                <img src="https://www.kindpng.com/picc/m/74-743103_listening-to-customers-png-happy-customer-png-transparent.png" className=" my-3  card-img-top" alt="..."/>
                <h5 className="card-title text-center my-3">Full Analysis</h5>
                <p className="card-text text-justify">In this i did full analysis of automotive industry on the basis of their body types, fuel types, transmission type and so on.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card feature-card
            ">
              <div className="card-body">
                <img src="https://www.wisebread.com/files/fruganomics/imagecache/605x340/blog-images/man_car_money_89954227.jpg" className=" my-3  card-img-top" alt="..."/>
                <h5 className="card-title text-center my-3">ChatBot: For Doubts</h5>
                <p className="card-text text-justify">Here i also add chatbot for assistance and customer can also interact with me and clear their doubts. here chatbot will answer all your queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-3 box'>
      <h1 className='text-light d-flex text-justify justify-content-center txt'>Services !!<hr/></h1>
      </div>
      <div className='section-4 box'>
        <div className='bodyText card'>
        <div className='container'>
        <div className=" d-flex justify-content-center headingCard">

            Have Doubts ?
            </div>
            <div className='innerBodyTxt d-flex justify-content-center'>
                See full analysis of cars on the basis of their body types, fuel types and displacement
            </div>
            <Link className="bg-dark text-light bg-gradient btn signin" to="/Services">Analysis</Link>
        </div>
            <img className="bodyImg justify-content-center" src='body1.webp' alt='net Isuue'></img>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Home
