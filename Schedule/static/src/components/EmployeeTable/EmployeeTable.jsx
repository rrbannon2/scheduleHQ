import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import './EmployeeTable.css';
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal';
import { Link, useHref } from 'react-router-dom';
import FetchComponent from '../FetchComponent/FetchComponent';

const EmployeeTable = () => {
    const [listOfEmployees, setListOfEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchComponent(null, "GET", "/loadEmployeeListData", null);
                setListOfEmployees(data["body"]);
            } catch (error) {
                alert("Please return to the log in page");
                console.error("Error fetching data", error);
            }
        };

        fetchData();

    }, []);

    return (
        listOfEmployees &&
        <div className='tableContainer'>
            <div className='containerTitle'>
                <Row className='d-flex align-items-center pb-3 px-5 square border-bottom'>
                    <Col className='align-items-center'>
                        <h4>Employees</h4>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Button id='addNew'>
                            <Link id='linkAddNew' to="/addemptable">Add Employee</Link>
                            
                        </Button>
                    </Col>
                </Row>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                        <tbody>
                            {listOfEmployees.map((value) => {
                                return (
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.role}</td>
                                        <td>
                                            <Button variant='link'>
                                                <Link to="/editemptable" state={value.id}>
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
            {showModal &&
                <AddEmployeeModal show={showModal} handleClose={() => setShowModal(false)} />
            }
        </div>
    );
};

export default EmployeeTable;