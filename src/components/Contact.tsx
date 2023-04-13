import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const { Title, ContactContainer, Box, Form, Label, Input, TextArea, Button } = StyledContact();

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e: { preventDefault: () => void; }) {
    e.preventDefault();

    const templateParanms = {
      from_name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        'service_rswegfp',
        'template_ctqjsmh',
        templateParanms,
        'FDgQZMmzpH23fYCiW'
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.log('ERRO', error.status);
        }
      );

    // Display a success message to the user
    alert('Sua mensagem foi enviada!');
  }

  return (
    <>
      <Title> Deixe aqui a sua mensagem </Title>
      <ContactContainer>
        <Box>
          <Form onSubmit={sendEmail}>
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              placeholder="Seu nome"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required />

            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              placeholder="Seu email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required />

            <Label htmlFor="phone">Telefone</Label>
            <Input
              type="tel"
              placeholder="Seu telefone"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required />

            <Label htmlFor="message">Digite sua mensagem aqui</Label>
            <TextArea
              id="message"
              placeholder="deixe aqui a sua mensagem"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required />

            <Button type="submit">Enviar</Button>
          </Form>
        </Box>
        <p>
          {' '}
          Se você tem uma pergunta ou apenas quer dizer "Oi", <br></br>farei o
          possível para entrar em contato com você!{' '}
        </p>
      </ContactContainer>
    </>
  );
}

export default Contact;
function StyledContact() {
  const Title = styled.h1`
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 45px;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  inset-block-start: 1rem;
  color: black;
`;

  const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  block-size: 74vh;
  p {
    text-align: center;
    font-size: 20px;
    font-family: 'Centra', sans-serif !important;
    font-weight: bold;
    text-align: center;
    color: var(--color-white);
  }
`;

  const Box = styled.div`
  display: flex;
  position: relative;
  background-color: #f1f1f1;
  inset-block-start: -4rem;
  padding: 3rem;
  margin: 1rem;
  border-radius: 5px;
  label {
    font-family: 'Centra', sans-serif !important;
  }
`;

  const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;
  inline-size: 600px;
  max-inline-size: 100%;
  max-block-size: 100%;
`;

  const Label = styled.label`
  margin-block-end: 5px;
  font-weight: bold;
`;

  const Input = styled.input`
  font-family: 'Centra', sans-serif !important;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-block-end: 10px;
`;

  const TextArea = styled.textarea`
  padding: 35px;
  border-radius: 5px;
  border: none;
  margin-block-end: 15px;
  max-inline-size: 100%;
  max-block-size: 350px;
`;

  const Button = styled.button`
  inline-size: 120px;
  block-size: 40px;
  border: none;
  border-radius: 5px;
  background-color: #1e90ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;
  return { Title, ContactContainer, Box, Form, Label, Input, TextArea, Button };
}
