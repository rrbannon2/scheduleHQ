import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Table, Button, Row, Col } from 'react-bootstrap';
import "../EmployeeTable/EmployeeTable.css"
import { Link, useHref } from 'react-router-dom';

const ShiftsTable = () => {
    const [fetchedInfo, setFetchedInfo] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:3000/loadShifts").then((response) => {
            setFetchedInfo(response.data);
        });
    }, []);
    console.log(fetchedInfo);

    return (
        fetchedInfo &&
        <div className='tableContainer'>
            <div className='containerTitle'>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'>
                    <Col className='align-items-center'>
                        <h4>Important Shifts</h4>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Button id='addNew'>
                            <Link id='linkAddNew' to="/addshift">Add Shift</Link>
                            
                        </Button>
                    </Col>
                </Row>
                <Table striped hover>
                    <thead>
                        <tr>
                            
                            <th>Shift Name</th>
                            <th>Shift Importance</th>
                            <th>Maximum Hours Allocated to Shift</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                        <tbody>
                            {fetchedInfo.map((value) => {
                                return (
                                    <tr key={value.name}>
                                        <td>{value.name}</td>
                                        <td>{value.importance}</td>
                                        <td>{value.maxhours}</td>
                                        <td>
                                            <Button variant='link'>
                                                <Link to="/editshift" state={value.name}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                                </svg>
                                                </Link>
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ShiftsTable;