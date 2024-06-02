import { useState } from 'react'
import {Col, Container, Row, } from 'react-bootstrap';

import './index.css'

function App() {
  let [FormData,setFormData]=useState(
      {
          uname:"",
          uemail:"",
          uphone:"",
          umessage:"",
          index:''
          
      }
  )

  let[userData,setUserData]=useState([])
  let getvalue=(event)=>{
      let oldData = { ...FormData}
      let inputname=event.target.name;
      let inputvalue=event.target.value;
      oldData[inputname]=inputvalue;
      setFormData(oldData)

  }
  let handlesubmit=(event)=>{
      let currentUserFormdata={
          uname:FormData.uname,
          uemail:FormData.uemail,
          uphone:FormData.uphone,
          umessage:FormData.umessage
      }
      let oldUserData = [...userData,currentUserFormdata]
      console.log(oldUserData)
      setUserData(oldUserData)
      event.preventDefault();
  }
  return (
      <Container fluid >
          <Container>
              <Row>
                  <Col className='text-center py-5'>
                      <h1>Enquiry Form</h1>
                  </Col>
              </Row>
              <Row>
                  <Col lg={5}>
                      {userData.length}
                      <form onSubmit={handlesubmit}>
                          <div className='pb-3'>
                              <label className='form-label'>Name</label>
                              <input type='text' onChange={getvalue} value={FormData.uname} name='uname' className='form-control' />
                          </div>
                          <br></br>
                          <div className='pb-3'>
                              <label className='form-label'>Email</label>
                              <input type='email' onChange={getvalue} value={FormData.uemail} name='uemail' className='form-control' />
                          </div>
                          <br></br>
                          <div className='pb-3'>
                              <label className='form-label'>Mobile</label>
                              <input type='number' onChange={getvalue} value={FormData.uphone} name='uphone' className='form-control' />
                          </div>
                          <br></br>
                          <div className='mb-3'>
                              <label className='form-label'>Message</label>
                              <textarea className='form-control' onChange={getvalue} value={FormData.umessage} name="umessage" id= "" rows="3"></textarea>
                          </div>
                          <br></br>
                              <button className='btn btn-primary'>
                                  {
                                      FormData.index!=="" ? 'update' : 'submit'
                                  }
                              </button>
                          <br></br>
                      </form>
                  </Col>
                  <Col lg= {7}></Col>
              </Row>
          </Container>

      </Container>
  )
}
export default App;