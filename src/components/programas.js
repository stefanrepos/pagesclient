import React from "react";
import { Button } from "react-bootstrap"; 

const Programas = () => {
  const programas = [
    {
      titulo: "Campos por Cuentos",
      descripcion:
        "Este programa se enfoca en enseñar a los niños a través de cuentos y actividades interactivas que fomenten la creatividad.",
      imagen: "../assets/dist/img/campos.jpg",
      botonTexto: "Descargar Programa",
      pdf: "../assets/dist/files/campos_por_cuentos.pdf", // Ruta del archivo PDF
    },
    {
      titulo: "Semillas de Cambio",
      descripcion:
        "Con 'Semillas de Cambio', buscamos promover la educación ambiental a través de talleres y proyectos prácticos.",
        imagen: "../assets/dist/img/campos.jpg",
      botonTexto: "Descargar Programa",
      pdf: "../assets/dist/files/semillas_de_cambio.pdf", // Ruta del archivo PDF
    },
    {
      titulo: "Voluntariado Red Fibras",
      descripcion:
        "Un programa donde personas se unen para ofrecer su tiempo y habilidades a causas sociales importantes.",
        imagen: "../assets/dist/img/campos.jpg",
      botonTexto: "Descargar Programa",
      pdf: "../assets/dist/files/voluntariado_red_fibras.pdf", // Ruta del archivo PDF
    },
    {
      titulo: "Turismo Cultural",
      descripcion:
        "A través de este programa buscamos implementar prácticas sostenibles de turismo en las comunidades rurales.",
        imagen: "../assets/dist/img/campos.jpg",
      botonTexto: "Descargar Programa",
      pdf: "../assets/dist/files/sostenibilidad.pdf", // Ruta del archivo PDF
    },
  ];

  return (
<div className="container my-5">
  <h1 className="text-center mb-4">Programas de la Fundación</h1>
      <div className="row">
        {programas.map((programa, index) => (
          <div className="col-md-6 col-lg mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              {/* Imagen del programa */}
              <div style={{ position: "relative" }}>
                <img
                  src={programa.imagen}
                  className="card-img-top"
                  alt={programa.titulo}
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                {/* Título sobre la imagen */}
                <h5 className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center">
                  {programa.titulo}
                </h5>
              </div>

              <div className="card-body d-flex flex-column">
                {/* Descripción */}
                <p className="card-text">{programa.descripcion}</p>

                {/* Botón de descarga */}
                <div className="mt-auto">
                  <Button
                    href={programa.pdf}
                    download
                    variant="dark"
                    className="w-100"
                  >
                    {programa.botonTexto}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programas;
