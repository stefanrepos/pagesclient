import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Evento = () => {

  // Array de eventos
  const events = [
    { id: 1, title: "Evento 1", date: "2025-01-20", description: "Descripción del evento 1", imagen: "assets/dist/img/evento.jpg", type:"poesia", location: "avenida 123", price: "aporte voluntario"
    },
    { id: 2, title: "Evento 2", date: "2025-01-22", description: "Descripción del evento 2", imagen: "assets/dist/img/caminata.jpg" , type:"caminata", location: "avenida 123", price: "aporte voluntario"},
    { id: 3, title: "Evento 3", date: "2025-01-25", description: "Descripción del evento 3", imagen: "assets/dist/img/titeres.jpg" , type:"talleres" , location: "avenida 123", price: "aporte voluntario"},
    { id: 4, title: "Evento 4", date: "2025-01-30", description: "Descripción del evento 4", imagen: "assets/dist/img/titeres.jpg" , type:"poesia" , location: "avenida 123", price: "aporte voluntario"  },
  ];

  return (
    <Container className=" mt-4">  
    <h1 className="banner-section">Agenda</h1> 
    <Row className="mt-2">
      {events.slice(0, 4).map((event) => (
        <Col md={6} key={event.id}>
          <Card className="mb-3 shadow mt-4">
            <div className="position-relative">
              {/* Etiqueta tipo de evento */}
              <span
                className="badge bg-dark position-absolute top-0 start-0 m-3"
                style={{ fontSize: "14px", padding: "10px 10px" }}
              >
                {event.type} {/* Tipo de evento como Concierto, Títeres, Poesía, etc. */}
              </span>

              <img
                src={event.imagen}
                className="card-img-top"
                alt={event.title}
                style={{
                  objectFit: "cover",
                  height: "300px",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </div>

            <Card.Body className="text-center">
              {/* Título centrado */}
              <Card.Title className="font-weight-bold">{event.title}</Card.Title>
              
              {/* Fila de iconos para fecha, lugar y precio */}
              <div className="d-flex justify-content-center align-items-center mt-2">
                {/* Fecha con icono */}
                <div className="d-flex align-items-center me-3">
                  <i className="fa fa-calendar-alt me-2" style={{ color: "#007bff" }}></i>
                  <Card.Subtitle className="text-muted">{event.date}</Card.Subtitle>
                </div>

                {/* Lugar con icono */}
                <div className="d-flex align-items-center me-3">
                  <i className="fa fa-map-marker-alt me-2" style={{ color: "#28a745" }}></i>
                  <Card.Subtitle className="text-muted">{event.location}</Card.Subtitle>
                </div>

                {/* Precio con icono */}
                <div className="d-flex align-items-center">
                  <i className="fa fa-money-bill-wave me-2" style={{ color: "#ffc107" }}></i>
                  <Card.Subtitle className="text-muted">{event.price}</Card.Subtitle>
                </div>
              </div>

              {/* Descripción corta */}
              <Card.Text className="mt-2">{event.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default Evento;
