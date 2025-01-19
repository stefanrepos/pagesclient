import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/fundacion.css'; // Importa un archivo de estilo CSS si lo necesitas

const Fundacion = () => {
  return (
    <section className="fundacion-section py-5">
      <Container>
        {/* Sección Fundacion Red Fibras */}
        <Row className="align-items-center mb-5">
          {/* Columna 1: Imagen (a la izquierda en pantallas grandes) */}
          <Col md={6} className="text-center mb-4 mb-md-0 order-1 order-md-1">
          <img
                src="../assets/dist/img/butterflies-1098535_1280.jpg"
                alt="Fundación Red Fibras"
                className="img-fluid rounded shadow"
                style={{
                  objectFit: 'cover', // Ajuste para cubrir el área sin distorsionar
                  height: '500px', // Aseguramos que la imagen tenga un tamaño adecuado
                  borderRadius: '10px 10px 0 0' // Bordes redondeados en la parte superior
                }}
              />
          </Col>

          {/* Columna 2: Descripción (a la derecha en pantallas grandes) */}
          <Col md={6} className="order-2 order-md-2">
            <h2 className="mb-4">Fundación Red Fibras: Arte y Educación</h2>
            <p className="text-justify">
              La Fundación Red Fibras tiene como misión promover el acceso al arte y la cultura en
              las zonas periféricas de la ciudad. A través del turismo cultural, buscamos descentralizar
              y democratizar el acceso al arte, llevando actividades culturales a todos los rincones,
              impactando positivamente en la comunidad y generando un cambio significativo.
            </p>
          </Col>
        </Row>

        {/* Sección ¿Qué Hacemos? */}
        <Row className="align-items-center mb-5">
        <Col md={6} className="order-2 order-md-2">
        <img
              src="../assets/dist/img/butterflies-1098535_1280.jpg"
              alt="Qué Hacemos"
              className="img-fluid rounded shadow"
              style={{
                objectFit: 'cover', // Ajuste para cubrir el área sin distorsionar
                height: '500px', // Aseguramos que la imagen tenga un tamaño adecuado
                borderRadius: '10px 10px 0 0' // Bordes redondeados en la parte superior
              }}
            />
          </Col>
          <Col md={6} className="order-1 order-md-1">
            <h2 className="mb-4">¿Qué Hacemos?</h2>
            <p className="text-justify">
              Creamos programas y proyectos culturales que conectan a las comunidades con el arte
              y la cultura. Facilitamos el acceso a eventos, talleres y exposiciones que permiten a
              las personas de todas las edades y contextos disfrutar del arte.
            </p>
          </Col>
     
        </Row>

        {/* Sección ¿Cómo Lo Hacemos? */}
        <Row className="align-items-center mb-5">
        <Col md={6} className="order-2 order-md-2">
        <h2 className="mb-4">¿Cómo Lo Hacemos?</h2>
            <p  className="text-justify">
              Implementamos estrategias de integración social a través del arte, generando espacios
              de encuentro entre la comunidad y artistas locales. Trabajamos en conjunto con
              organizaciones comunitarias y autoridades locales para garantizar el acceso equitativo
              a la cultura.
            </p>
          </Col>
          <Col md={6} className="text-center mb-4 mb-md-0 order-1 order-md-1">
          <img
              src="../assets/dist/img/butterflies-1098535_1280.jpg"
              alt="Cómo lo Hacemos"
              className="img-fluid rounded shadow"
              style={{
                objectFit: 'cover', // Ajuste para cubrir el área sin distorsionar
                height: '500px', // Aseguramos que la imagen tenga un tamaño adecuado
                borderRadius: '10px 10px 0 0' // Bordes redondeados en la parte superior
              }}
            />
          </Col>
        </Row>

        {/* Sección ¿Dónde Lo Hacemos? */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="order-1 order-md-1">
            <h2>¿Dónde Lo Hacemos?</h2>
            <p>
              Hemos recorrido más de 80 kilómetros llevando arte y cultura a las zonas más apartadas,
              acercando la comunidad rural a las experiencias culturales.
            </p>
          </Col>
          <Col md={6} className="order-2 order-md-2">
            <img
              src="../assets/dist/img/butterflies-1098535_1280.jpg"
              alt="Dónde Lo Hacemos"
              className="img-fluid rounded shadow"
              style={{
                objectFit: 'cover', // Ajuste para cubrir el área sin distorsionar
                height: '500px', // Aseguramos que la imagen tenga un tamaño adecuado
                borderRadius: '10px 10px 0 0' // Bordes redondeados en la parte superior
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Fundacion;
