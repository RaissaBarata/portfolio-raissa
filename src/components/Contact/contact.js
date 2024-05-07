import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_0t17y6y",
        "template_bffyqjc",
        e.target,
        "cO7hl82WGKXZ6vtZ_"
      );

      console.log("Email enviado com sucesso", response);

      // Limpar os campos após o envio bem-sucedido
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Exibir mensagem de sucesso
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Erro ao enviar email", error);
      // Exibir mensagem de erro para o usuário
    }
  };

  return (
    <div id="contact" className="contact-form">
      <h2>Entre em Contato</h2>
      <p>Entre em contato comigo e compartilhe um pouco sobre sua ideia.</p>
      {showSuccessMessage && (
        <p className="success-message">
          Obrigado por entrar em contato! Retornarei em breve.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
