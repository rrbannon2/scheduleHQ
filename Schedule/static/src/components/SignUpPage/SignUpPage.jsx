import React,{useState, useEffect} from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import '../BaseEmployeeDataTable/BaseEmployeeDataTable.css';
import FetchComponent from '../FetchComponent/FetchComponent';

const SignUpPage = () => {

    
    return (
        <div className='tableContainer'>
            <div className='containerTitle'>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'>
                    <Col className='align-items-center'>
                        <h4>Sign Up!</h4>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'>
                    <th>Email Address</th>
                    <th><input id="userEmail"></input></th>
                </Row>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'> 
                    <th>Organization Name</th> 
                    <th><input id="orgName"></input></th>
                </Row>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'> 
                    <th>Password</th> 
                    <th><input id="password" type = "password"></input></th>
                </Row>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'>
                    <th>Confirm Password</th>
                    <th><input id="password2" type = "password"></input></th>
                </Row>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'>
                    <Col>
                        <Button onClick={() => PrepData() }>Sign Up</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default SignUpPage;

const PrepData = () => {
    var infoCells = ['userEmail', 'password', 'orgName'];
    let passWord = document.getElementById("password").value;
    if (passWord !== document.getElementById("password2").value) {
        alert("Passwords must match, Please try again")
        return ("Passwords must match, Please try again");
    };

    if (passWord.length < 10) {
        alert("Password must be at least 10 characters long.");
        return ("Password must be at least 10 characters long.");  
    };
    if (document.getElementById("orgName").value.length == 0) {
        alert("Organization Name cannot be empty");
        return ("Organization Name cannot be empty");
    };


    var basicJsonDict = {};
   
    for (let basicCell of infoCells) {
        var cell = document.getElementById(basicCell).value;
        if (cell !== '') {
            basicJsonDict[basicCell] = cell;
        };
    };
    
    FetchComponent(basicJsonDict, "POST", "/addUser", null);
};