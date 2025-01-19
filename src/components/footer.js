import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css'; // Importar archivo de estilo CSS

const Footer = () => {
  return (
    <div className="container-fluid"> {/* Contenedor para Flexbox */}

    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="text-center text-md-start"> {/* Alineación centrada en móvil y a la izquierda en pantallas grandes */}
          {/* Columna 1: Logo y Nombre */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
            <div className="logo">
              <img src="../assets/dist/img/logo.png" alt="Logo" className="mb-3" width="120" />
            </div>
            <div>
              <p>Red Fibras</p>
              <p>NIT 8900000-1</p>
              <p>Colombia</p>
            </div>
          </Col>

          {/* Columna 2: Información de contacto */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
            <h5>Información de Contacto</h5>
            <p>Teléfono: (+57) 123 456 789</p>
            <p>Email: contacto@redfibras.com</p>
            <p>Dirección: Calle 123 #45-67, Bogotá, Colombia</p>
          </Col>

          {/* Columna 3: Enlaces y redes sociales */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center align-items-md-start">
            <h5>Enlaces de Interes</h5>
            <ul className="list-unstyled">
            <li><a href="../assets/dist/docs/Informe-de-labores-y-balance_social.pdf" className="text-white" download>Informe de labores y-balance social</a></li>
            <li><a href="../assets/dist/docs/codigo-gobierno.pdf" className="text-white" download>Gobierno</a></li>
            <li><a href="../assets/dist/docs/aviso-privacidad.pdf" className="text-white" download>Aviso de Privacidad</a></li>
            <li><a href="../assets/dist/docs/politicas-proteccion-datos.pdf" className="text-white" download>Política de Tratamiento de Datos</a></li>
            <li><a href="../assets/dist/docs/trabaje-con-nosotros.pdf" className="text-white" download>Trabaje con Nosotros</a></li>
            </ul>

            {/* Iconos de redes sociales */}
            <div className="social-icons">
              <a href="https://www.instagram.com" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;
