import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MapaYImagen = () => {
  return (
    <Container fluid className=" bg-light pt-5">
                  <h1 className="text-center mb-4">Visitanos</h1>

    <Row className="g-4">
      {/* Columna de la izquierda con la imagen */}
        <Col md={6}>
        {/* Columna de la izquierda: Mapa de Google */}
          <div style={{ height: "400px", borderRadius: "10px", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31793.63909904906!2d-74.62190059491586!3d5.070514173993446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40bd6345c63247%3A0x6e97df1a867a7d54!2sGuaduas%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1737230345108!5m2!1ses!2sco"
              width="100%" // Se asegura de que ocupe todo el ancho del contenedor
              height="100%" // Se asegura de que ocupe todo el alto del contenedor
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps" // Agregado título para accesibilidad
            ></iframe>
          </div>
        </Col>

        {/* Columna de la derecha: Imagen */}
        <Col md={6}>
          <div
           style={{
            backgroundImage: "url('../assets/dist/img/campos.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: '10px',
            width: '100%',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra suave
          }}
          >
            <Card className="shadow-sm border-0 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
              <Card.Body className="text-center p-4">
                <h4>¡Ven a visitarnos!</h4>
                <p>Cara 1230 # 15+33</p>
                <p>Guaduas. Colombia</p>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MapaYImagen;

