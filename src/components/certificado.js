import React from 'react';


const Certificado = () => {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">

        
      {/* Fila 2: Texto centrado */}
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-6 text-center">
          <div >
            <h5>Conoce los derechos que tienes como colaborador | Donante</h5>
                <ul className="list-unstyled">
                    <li>
                    {/* Enlace con la opción de descarga */}
                    <a 
                        href="../assets/dist/docs/Concepto_unificado_ESAL_No_481_27042018.pdf" 
                        className="text-dark" 
                        download
                    >
                        mas información aquí
                    </a>
                    </li>
                </ul>
                <small>Emitimos Certificado de donación. Si eres persona particular y  realizas un donativo puntual, podrás deducirte el 20%. Si eres persona jurídica (empresa), podrás desgravarte el 20 % con los limites que dispone la ley colombiana. </small>
            <p>
              Puedes realizar tu donación en las cuentas:
              <br />
              <strong>Bancolombia 2710029050 | Davivienda 10 0200176543</strong>
            </p>
            <p>
              Fundación Red Fibras Inscrita en el Registro de Fundaciones con el NIT xxxxxx. Honda Tolima
            </p>
            <p>
              Puedes comunicarte con nosotros llamando al <strong>91 744 42 40</strong> o escribiéndonos a <strong>redfibras@gmail.com </strong>
            </p>
          </div>
        </div>
      </div>
      
        {/* Fila 1: Tarjetas y Texto en la misma fila */}
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center align-items-start">
          {/* Tarjeta 1: Sitio Web Seguro */}
          <div
            className="card shadow-sm p-3 mb-3 mx-2"
            style={{
              backgroundColor: '#5E616A',
              color: '#fff',
              border: 'none',
              width: '100%', // Tarjetas ocupan el 100% de su columna
            }}
          >
            <div className="d-flex align-items-center">
              <i
                className="fas fa-lock ms-2"
                style={{ fontSize: '2rem', color: '#fff' }}
              ></i>
              <div className="flex-grow-1">
                <h6 className="card-title mb-1">
                  <strong>Sitio Web Seguro</strong>
                </h6>
                <small>Navegación por una web segura</small>
                <br />
                <strong>HTTPS</strong>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Fundación Acreditada */}
          <div
            className="card shadow-sm p-3 mb-3 mx-2"
            style={{
              backgroundColor: '#5E616A',
              color: '#fff',
              border: 'none',
              width: '100%', // Tarjetas ocupan el 100% de su columna
            }}
          >
            <div className="d-flex align-items-center">
              <i
                className="fas fa-check-circle ms-2"
                style={{ fontSize: '2rem', color: '#fff' }}
              ></i>
              <div className="flex-grow-1">
                <h6 className="card-title mb-1">
                  <strong>Acreditación</strong>
                </h6>
                <small>Entidad vigilada</small>
                <br />
                <strong>NIT: XXXXX</strong>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Certificado;
