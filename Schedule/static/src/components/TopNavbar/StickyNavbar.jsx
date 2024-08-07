import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StickyNavbar.css';

const StickyNavbar = () => {
  return (
    <Navbar expand="lg" className="topNavbar">
      <Container fluid style={{ margin: '20px 80px' }}>
        <Link className = "plainLink" to="/home">
          <Navbar.Brand>Schedule HQ</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/employeetable">Employees </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/skillstable">Skills</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/shiftstable">Shifts </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">Log In</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Sign Up </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StickyNavbar;