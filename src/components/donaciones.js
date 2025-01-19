import React, { useState } from "react";
import FormularioDonacion from "./formulario";
import Certificado from "./certificado";

const Donaciones = () => {
  const tarjetas = [
    {
      titulo: "Abordar las necesidades de la comunidad",
      imagen: "assets/dist/img/necesidad.jpg",
      donaciones: ["Instrumentos musicales", "Equipos técnicos", "Arte y Educación"],

    },
    {
      titulo: "Apoyar a las organizaciones locales sin fines de lucro",
      imagen: "assets/dist/img/transporte.jpeg",
      donaciones: ["Equipos de oficina", "Publicidad", "Transporte"],

    },
    {
      titulo: "Fortalecer la comunidad",
      imagen: "assets/dist/img/instalaciones.jpeg",
      donaciones: ["Instalaciones", "Educacion comunitaria", "Computadoras usadas"],

    },
    {
      titulo: "Canalizar recursos para iniciativas de interés común",
      imagen: "assets/dist/img/guaduas.jpg",
      donaciones: ["Fondos para proyectos", "Material escenografico", "Plantas y semillas"],

    },
  ];

    // Estado para almacenar las donaci ones
    const [donaciones, setDonaciones] = useState([]);

    const agregarDonacion = (nuevaDonacion) => {
      setDonaciones([...donaciones, nuevaDonacion]);
    };

    return (
        <div className="container mt-4">
          <h1 className="text-center mb-4">Donaciones</h1>
          <h2 className="text-center mb-4">
            ¿Qué puedo donar?  <br />
            <small>La fundación Red Fibras centra sus estrategias en</small> 
          </h2>
          <div className="row">
            {tarjetas.map((tarjeta, index) => (
              <div className="col-6 mb-4" key={index}> {/* Hacemos que ocupe toda la fila en pantallas grandes */}
                <div className="card shadow-sm position-relative">
                  <img
                    src={tarjeta.imagen}
                    className="card-img-top"
                    alt={tarjeta.titulo}
                    style={{
                      objectFit: 'cover',
                      height: '300px', // Aseguramos que la imagen tenga un tamaño adecuado
                      borderRadius: '10px 10px 0 0' // Bordes redondeados en la parte superior
                    }}
                  />
                  {/* Título sobre la imagen */}
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-white text-center"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro para la legibilidad
                      borderRadius: '10px',
                      padding: '10px',
                      width: '100%', // Aseguramos que el fondo cubra toda la imagen
                      transform: 'translateY(-50%)', // Alineación vertical correcta
                    }}
                  >
                    <h5 className="card-title">{tarjeta.titulo}</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {tarjeta.donaciones.map((donacion, i) => (
                        <li className="list-group-item d-flex align-items-center justify-content-start" key={i}>
                          <i className="fa fa-check-circle text-success me-2"></i>
                          {donacion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {/* Sección del formulario */}
            <h2 className="text-center mt-5">
              <i className="fas fa-shield-alt text-success"></i> Donación segura
            </h2>
            <FormularioDonacion agregarDonacion={agregarDonacion} />
          </div>
         
          <div className="container bg-light ">
          
                <Certificado />
         
          </div>
        </div>

          
      
        
      );
    };
    

export default Donaciones;
