import React from "react";
import ContactForm from "./correo";
import { Card, Col, Row, Container, Button } from "react-bootstrap"; // Importar componentes de React Bootstrap

const FormularioDonacion  = () => {
  return (
    <Container fluid className="my-5">
      <Row className="g-4">
        {/* Columna de la izquierda con la imagen */}
        <Col md={6} className="d-flex justify-content-center align-items-center p-4">
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
        <Card className="shadow-sm border-0 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
          <Card.Body className="text-center p-4">
            <h4>¡Ayúdanos a hacer la diferencia!</h4>
            <Button
              href="../assets/dist/docs/Formulario_Donacion_Efectivo.pdf" // Ruta del archivo PDF a descargar
              download
              variant="danger"
              size="lg"
              className="mt-3"
            ><i class="fa fa-file-pdf-o" ></i>

              Descargar el certificado de donación
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>

        {/* Columna de la derecha con el formulario */}
        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h1 className="text-center mb-4">Contactanos</h1>

            <ContactForm/> 

           
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioDonacion;
