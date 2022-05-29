import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <>
    <div className="container ">
      <div className="row main">
        <div className="col-sm-5 card takeResponse" style={{height:"384px"}}>
          <div className="row ">
            <div className="col form-floating my-3">
              <input type="text" className="form-control" id="First name" placeholder="First name" />
              <label htmlFor="First name" style={{margin:"0 12px"}}>First Name</label>
            </div>
            <div className="col form-floating my-3">
              <input type="text" className="form-control" id="Last name" placeholder="Last name" />
              <label htmlFor="Last name" style={{margin:"0 12px"}}>Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput" style={{margin:"0 12px"}}>Email address</label>
            </div>
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
              <label htmlFor="floatingTextarea2 mx-2 my-2" style={{margin:"0 12px"}}>Comments</label>
            </div>
            <button className='btn bg-dark text-light my-3' style={{height:"45px",width:"110px",margin:"0 40%"}}>Submit</button>
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
    </>
  )
}

export default Contact
