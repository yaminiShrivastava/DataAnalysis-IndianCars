import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Footer from './Footer'
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yl0lgor', 'template_qxtiiyp', form.current, 'oEtv1WaK7A1IVL54A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>


<form ref={form} onSubmit={sendEmail}>
    <div className="container ">
      <div className="row ">

        
        <div className="col-sm-5 card takeResponse" style={{height:"384px"}}>
          <div className="row ">

            <div className="col form-floating my-3">
              <input type="text" required  className="form-control" autoComplete='off' name="Firstname" placeholder="First name" />
              <label htmlFor="First name" style={{margin:"0 12px"}}>First_Name</label>
            </div>

            <div className="col form-floating my-3">
              <input type="text" required  className="form-control" autoComplete='off' name="Lastname" placeholder="Last name" />
              <label htmlFor="Last name" style={{margin:"0 12px"}}>Last_Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" required  className="form-control" autoComplete='off' name="email" placeholder="name@example.com"/>
              <label htmlFor="floatingInput" style={{margin:"0 12px"}}>Email address</label>
            </div>

            <div className="form-floating">
              <textarea className="form-control" required autoComplete='off'  placeholder="Leave a comment here" name="comments" style={{height: "100px"}}></textarea>
              <label htmlFor="floatingTextarea2 mx-2 my-2" style={{margin:"0 12px"}}>Comments</label>
            </div>

            <button className='btn bg-dark text-light my-3' type='submit' style={{height:"45px",width:"110px",margin:"0 40%"}}>Submit</button>
          </div>
        </div>

        <div className="col-sm-5 personalInfo card " style={{height:"384px"}}>
          <div className='info-item'>Name : Yamini Shrivastava</div>
          <div className='info-item'>Email : yamini8383@gmail.com</div>
          <div className='info-item'>Linkedin : <a target="_blank" rel="noreferrer" className='linkedin text-dark' style={{textDecoration:"none"}} href="https://www.linkedin.com/in/yamini-srivastava-63084a219/">Yamini Shrivastava</a></div>
          <div className='info-item'>Currently pursuing B.tech from Delhi Technological University in Mathematics and Computing</div>
          <div className='info-item'>Feel free to connect <i className="fa-solid fa-heart"/></div>
        </div>
      </div>
    </div>
    
    </form>
    <Footer/> 
    </>
  )
}

export default Contact
