import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/logros.css'; // Asegúrate de crear este archivo para estilos personalizados

const Logros = () => {
  const logros = [
    {
      id: 1,
      imagen: '../assets/dist/img/solucion.png',
      texto: ' mas de participacion comunitaria', cifra: '85%'
    },
    {
      id: 2,
      imagen: '../assets/dist/img/economia-circular.png',
      texto: 'artistas voluntarios activos',
       cifra: '+80'
    },
    {
      id: 3,
      imagen: '../assets/dist/img/bloque-abc.png',
      texto: ' niños participando en el programa',
      cifra: '+120'
    },
    {
      id: 4,
      imagen: '../assets/dist/img/bloque-abc.png',
      texto: 'Fortalecimiento del sector turistico',
      cifra: '+85%'
    }
  ];

  return (
    <Container className="logros-container my-5">
      <h1 className="text-center mb-4">Nuestros Logros</h1>
      <Row className="justify-content-center">
        {logros.map((logro) => (
          <Col key={logro.id} xs={12} sm={6} md={4} lg={3} className="d-flex flex-column align-items-center mb-4">
            <img src={logro.imagen} alt={`Logro ${logro.id}`} className="logro-imagen mb-3" />
            <p className="logro-texto text-center"> <strong className='logro-cifra'> {logro.cifra} </strong></p>
            <p>{logro.texto}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Logros;
