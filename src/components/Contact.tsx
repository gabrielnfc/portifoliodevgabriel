'use client';
import emailjs from '@emailjs/browser';
import { Lexend } from '@next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400'],
});

const ContactContainer = styled.div`
  display: flex;
  block-size: 96vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  p {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    position: relative;
  }
`;

const Title = styled.h1`
  display: flex;
  position: relative;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin: 4rem;
  inset-block-start: 3.8rem;
  span {
    color: #e8314f;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('https://i.imgur.com/1Td9VOt.png');
  inset-block-start: 1rem;
  padding: 2rem;
  margin: 0rem;
  border-radius: 5px;
  box-shadow: 1.8px 0.9px 6.7px -3px rgba(0, 0, 0, 0.07),
    3.2px 1.6px 12.3px -3px rgba(0, 0, 0, 0.065),
    4px 2.1px 17.6px -3px rgba(0, 0, 0, 0.06),
    4.5px 2.3px 22.8px -3px rgba(0, 0, 0, 0.054),
    4.8px 2.4px 27.9px -3px rgba(0, 0, 0, 0.049),
    5px 2.5px 33.1px -3px rgba(0, 0, 0, 0.043),
    5.5px 2.8px 38.4px -3px rgba(0, 0, 0, 0.036),
    7.3px 3.7px 43.9px -3px rgba(0, 0, 0, 0.029),
    12.7px 6.5px 49.9px -3px rgba(0, 0, 0, 0.022),
    43px 22px 58px -3px rgba(0, 0, 0, 0.013);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: larger;
  inline-size: 40rem;
  block-size: 35rem;
  max-inline-size: 100%;
  max-block-size: 100%;
`;

const Label = styled.label`
  margin-block-end: 0.2rem;
  color: ${({ theme }) => theme.bodyTextColor};
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  margin-block-end: 0.4rem;
`;

const TextArea = styled.textarea`
  inline-size: 38rem;
  block-size: 35rem;
  font-size: large;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin-block-end: 0.8rem;
  max-inline-size: 38rem;
  max-block-size: 100%;
  ::placeholder {
    text-align: center;
    position: relative;
    inset-block-start: 6rem;
  }
`;

const Button = styled.button`
  inline-size: 120px;
  block-size: 6rem;
  border: none;
  border-radius: 5px;
  background-color: #e8314f;
  color: #fff;
  font-size: 21px;
  cursor: pointer;
`;

const Lastmessage = styled.div`
  display: flex;
  position: relative;
  inset-block-start: 1.3rem;
  p {
    font-size: 20px;
  }
`;

function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e: { preventDefault: () => void }) {
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
      <section id="Contact" className={lexend.className}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <ContactContainer>
            <Title>
              Deixe aqui a sua <span>mensagem</span>
            </Title>
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
                  required
                />

                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  placeholder="Seu email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

                <Label htmlFor="phone">Telefone</Label>
                <Input
                  type="tel"
                  placeholder="Seu telefone"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />

                <Label htmlFor="message">Digite sua mensagem aqui</Label>
                <TextArea
                  id="message"
                  placeholder="deixe aqui a sua mensagem"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                />
                <Button type="submit">Enviar</Button>
              </Form>
            </Box>
            <Lastmessage>
              <p>
                {' '}
                Se você tem uma pergunta ou apenas quer dizer "Oi", <br />
                farei o possível para entrar em contato com você!{' '}
              </p>
            </Lastmessage>
          </ContactContainer>
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
