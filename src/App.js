import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form, Table } from 'react-bootstrap';
import { useState } from 'react';
// import {AiTwotoneDelete } from "react-icons/ai";
function App() {
  const [inputval, setinputval] = useState([]);

  let rollno, sname, sub1, sub2, sub3, sub4, sub5;

  function formhandler(e) {
    let sum = 0;
    let pr = 0, min, max, grade, result, pr1, symbol1, sign = ' % ';

    e.preventDefault();

    rollno = e.target.rno.value;
    sname = e.target.sname.value;
    sub1 = e.target.sub1.value;
    sub2 = e.target.sub2.value;
    sub3 = e.target.sub3.value;
    sub4 = e.target.sub4.value;
    sub5 = e.target.sub5.value;

    symbol1 = 'X';

    sum = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);
    pr = parseFloat(sum / 500 * 100);
    pr1 = pr.toFixed(2) + sign;
    min = Math.min(sub1, sub2, sub3, sub4, sub5)
    max = Math.max(sub1, sub2, sub3, sub4, sub5)

    if (pr > 70) {
      grade = 'FIRST';
    }
    else if (pr > 50) {
      grade = 'SECOND';
    }
    else if (pr > 35) {
      grade = 'THIRD'
    }
    else {
      grade = 'FAIL'
    }

    if (grade === 'FAIL') {
      result = 'FAIL';
    }
    else {
      result = 'PASS'
    }

    setinputval([...inputval, { rollno, sname, sub1, sub2, sub3, sub4, sub5, sum, pr1, min, max, grade, result, symbol1 }]);

    e.target.rno.value = '';
    e.target.sname.value = '';
    e.target.sub1.value = '';
    e.target.sub2.value = '';
    e.target.sub3.value = '';
    e.target.sub4.value = '';
    e.target.sub5.value = '';


  }

 const handleRemoveValue = (item) =>  {
    // const newArray = inputval.filter((value) => value !== item)
    const arrdel = inputval.splice(item,1);
    const newArray = inputval.filter((value) => value !== arrdel)
    setinputval(newArray);

  }
 
  return (
    <div className="container">
      <div className="title">
        <h1>Student result</h1>
      </div>
      <div className="formarea">

        <Form action="" onSubmit={formhandler}>
          <Row>
            <Col lg={2} sm={12} >
              <label>Seat No :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0' >
              <input type="number" placeholder='00' id='rno' />
            </Col>

          </Row>
          <Row>
            <Col lg={2} sm={12}>
              <label>Name :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0'>
              <input type="text" placeholder='Enter Name' id='sname' />
            </Col>
          </Row>

          <Row>
            <Col lg={2} sm={12}>
              <label>Gujrati :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0'>
              <input type="number" placeholder='Marks Obtained' id='sub1' />
            </Col>
          </Row>
          <Row>
            <Col lg={2} sm={12}>
              <label>English :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0'>
              <input type="number" placeholder='Marks Obtained' id='sub2' />
            </Col>
          </Row>
          <Row>
            <Col lg={2} sm={12}>
              <label>Maths :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0'>
              <input type="number" placeholder='Marks Obtained' id='sub3' />
            </Col>
          </Row>
          <Row>
            <Col lg={2} sm={12}>
              <label>Pysics :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0'>
              <input type="number" placeholder='Marks Obtained' id='sub4' />
            </Col>
          </Row>
          <Row>
            <Col lg={2} sm={12}>
              <label>Chemistry :</label>
            </Col>
            <Col lg={10} sm={12} className='ps-sm-5 ps-lg-0'>
              <input type="number" placeholder='Marks Obtained' id='sub5' />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <Button type='submit' variant="outline-primary" className='btn'>Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <br />
      <div className='tablearea'>
        <Table striped bordered hover variant="dark text-center">
          <thead>
            <tr>
              <th style={{ width: '60px' }}>Seat No</th>
              <th style={{ width: '60px' }}>Name</th>
              <th style={{ width: '50px' }}>Gujarati</th>
              <th style={{ width: '60px' }}>English</th>
              <th style={{ width: '50px' }}>Maths</th>
              <th style={{ width: '50px' }}>Pysics</th>
              <th style={{ width: '50px' }}>Chemistry</th>
              <th style={{ width: '70px' }}>Total</th>
              <th style={{ width: '70px' }}>Percentage</th>
              <th style={{ width: '70px' }}>Min</th>
              <th style={{ width: '70px' }}>Max</th>
              <th style={{ width: '70px' }}>Grade</th>
              <th style={{ width: '70px' }}>Result</th>
              <th style={{ width: '70px' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {inputval.map((value, index) => (
              <tr key={index}>
                <td>{value.rollno}</td>
                <td>{value.sname}</td>
                <td>{value.sub1}</td>
                <td>{value.sub2}</td>
                <td>{value.sub3}</td>
                <td>{value.sub4}</td>
                <td>{value.sub5}</td>
                <td>{value.sum}</td>
                <td>{value.pr1}</td>
                <td>{value.min}</td>
                <td>{value.max}</td>
                <td>{value.grade}</td>
                <td>{value.result}</td>
                <td className='del' onClick={() => handleRemoveValue(index)}>{value.symbol1}</td>
                {/* onClick={() => handleRemoveItem(item)} */}
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
