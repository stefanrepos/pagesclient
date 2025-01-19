import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import '../styles/correo.css'; // Importar archivo de estilo CSS


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar el formulario con los datos del estado
    emailjs
      .send(
        "service_y4qhggm", // Sustituye con tu Service ID de EmailJS
        "template_qin3ieo", // Sustituye con tu Template ID
        formData, // Pasa los datos del estado en lugar de e.target
        "YNJNf2XBCBRuzuz7q" // Sustituye con tu User ID de EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado exitosamente!");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
