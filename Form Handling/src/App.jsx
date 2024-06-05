import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "./index.css"

function App() {
  const [FormData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: ''
  });

  const [userData, setUserData] = useState([]);

  const getvalue = (event) => {
    const oldData = { ...FormData };
    const inputname = event.target.name;
    const inputvalue = event.target.value;
    oldData[inputname] = inputvalue;
    setFormData(oldData);
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (!FormData.uname || !FormData.uemail || !FormData.uphone || !FormData.umessage) {
      alert("All fields are required!");
      return;
    }

    let currentUserFormdata = {
      uname: FormData.uname,
      uemail: FormData.uemail,
      uphone: FormData.uphone,
      umessage: FormData.umessage
    };

    if (FormData.index !== '') {

      const updatedData = userData.map((item, idx) =>
        idx === parseInt(FormData.index) ? currentUserFormdata : item
      );
      setUserData(updatedData);
    } else {

      const oldUserData = [...userData, currentUserFormdata];
      setUserData(oldUserData);
    }

    setFormData({
      uname: "",
      uemail: "",
      uphone: "",
      umessage: "",
      index: ''
    });
  };

  const handleEdit = (index) => {
    const dataToEdit = userData[index];
    setFormData({
      ...dataToEdit,
      index: index.toString()
    });
  };

  const handleDelete = (index) => {
    const updatedData = userData.filter((_, idx) => idx !== index);
    setUserData(updatedData);
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className='text-center py-5'>
            <h1>Enquiry Form</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form onSubmit={handlesubmit}>
              <div className='pb-3'>
                <label className='form-label'>Name</label>
                <input type='text' onChange={getvalue} value={FormData.uname} name='uname' className='form-control' />
              </div>
              <br />
              <div className='pb-3'>
                <label className='form-label'>Email</label>
                <input type='email' onChange={getvalue} value={FormData.uemail} name='uemail' className='form-control' />
              </div>
              <br />
              <div className='pb-3'>
                <label className='form-label'>Mobile</label>
                <input type="number" onChange={getvalue} value={FormData.uphone} name='uphone' className='form-control' />
              </div>
              <br />
              <div className='mb-3'>
                <label className='form-label'>Message</label>
                <textarea className='form-control' onChange={getvalue} value={FormData.umessage} name="umessage" id="" rows="3"></textarea>
              </div>
              <br />
              <button className='btn btn-primary'>
                {FormData.index !== "" ? 'Update' : 'Submit'}
              </button>
              <br />
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ?
                  userData.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button>
                          <button className='btn btn-primary' onClick={() => handleEdit(i)}>Edit</button>
                        </td>
                      </tr>
                    )
                  })
                  :
                  <tr>
                    <td colSpan={6}>No Data Found</td>
                  </tr>
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
