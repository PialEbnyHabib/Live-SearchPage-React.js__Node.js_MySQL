import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarPage = () => {

    return(
      
          <Navbar className="Navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SearchPage</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
       
        
    );
}

export default NavbarPage;