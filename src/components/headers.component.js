import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';
import LoginModel from './login.component';

const HeaderComponent=() =>{
  const [showModel, setShowModel]=useState(false);
  return (
    <Navbar bg={"dark"} variant={"dark"}>
      <Container fluid>
        <Navbar.Brand href="#">Pre Order</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to={"/menu-items"}>
             Our Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/pre-order"}>
              Pre Order
            </Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact-us"}>
              Contact us
            </Nav.Link>
            {AuthService.isUserLoggedIn()?(   
                <NavDropdown title="My Account" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to={"/myOrders"}>
                    My Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                  }}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ):(
                <Nav.Link>
                  <button onClick={()=>{setShowModel(true)}} className="btn btn-primary btn-sm">Login</button>
                </Nav.Link>
              )
            }
         
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
      <LoginModel onCloseModel={(e)=>setShowModel(false)} showModel={showModel}></LoginModel>
          
    </Navbar>
  );
}

export default HeaderComponent;