import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/header.css'; // Importar archivo de estilo CSS

const Header = () => {
  return (
<Navbar className="navbar-salmon fixed-top" expand="lg">
  <Container>
    <img src="../assets/dist/img/logo.png" alt="Logo" className="mb-3" width="50" />
    <Navbar.Brand href="#">Fundacion Red Fibras</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="navbarNav" /> {/* Icono de hamburguesa en móvil */}
    <Navbar.Collapse id="navbarNav">
      <Nav className="ms-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#fundacion">Fundación</Nav.Link>
        <Nav.Link href="#programas">Programas</Nav.Link>
        <Nav.Link href="#donaciones">Donaciones</Nav.Link>
        <Nav.Link href="#contactanos">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default Header;
