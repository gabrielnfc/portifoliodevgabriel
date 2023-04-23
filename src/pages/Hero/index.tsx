'use client';
import { Lexend } from '@next/font/google';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400']
})

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <section id="Home">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Container>
              <h1 className={lexend.className}> OLÁ, MEU NOME É  <span> GABRIEL </span> </h1>
              <Slogan>
                <p>
                  {' '}
                  Desenvolvedor Front-end apaixonado por criar interfaces incríveis{' '}
                </p>
              </Slogan>
              <Barras>
                <Barra1>
                  <img src='/images/retan1.png'></img>
                </Barra1>
                <Barra2>
                  <img src='/images/retan2.png'></img>
                </Barra2>
                <Barra3>
                  <img src='/images/retan3.png'></img>
                </Barra3>
                <Barra4>
                  <img src='/images/retan4.png'></img>
                </Barra4>
                <Barra5>
                  <img src='/images/retan5.png'></img>
                </Barra5>
                <Barra6>
                  <img src='/images/retan6.png'></img>
                </Barra6>
              </Barras>
            </Container>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;


const Container = styled.div`
    display: flex;
    position: relative;
    block-size: 100vh;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 6rem;
      position: absolute;
      padding: 3rem;
      font-weight: bold;
      text-shadow: 1px 2px 5px black;
      background-color: #4158D0;
background-image: -webkit-linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
background-image: -moz-linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
background-image: -o-linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    }     
  `;

const Slogan = styled.h2`
display: flex;
position: relative;
font-size: 1.5rem;
margin: 0.5rem;
position: relative;
inset-block-start: 32rem;
`;

const Barras = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  inline-size: 90vw;
  block-size: 90vh;
  inset-block-start: -1rem;
  z-index: -1;  
`;

const Barra1 = styled.div`
  display: flex;
  inline-size: 10px;
  -webkit-animation: slide-in-bl 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-bl 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @-webkit-keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  @keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `;

const Barra2 = styled.div`
  display: flex;
  inline-size: 10px;   
  -webkit-animation: slide-in-bl 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-bl 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          
@-webkit-keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
`;

const Barra3 = styled.div`
  display: flex;
  inline-size: 10px;
  -webkit-animation: slide-in-bl 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-bl 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @-webkit-keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  @keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `;

const Barra4 = styled.div`
  display: flex;
  inline-size: 10px;
  -webkit-animation: slide-in-bl 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-bl 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @-webkit-keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  @keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
`;

const Barra5 = styled.div`
  display: flex;
  inline-size: 10px;
  -webkit-animation: slide-in-bl 2.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-bl 2.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @-webkit-keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  @keyframes slide-in-bl {
  0% {
    -webkit-transform: translateY(1000px) translateX(-1000px);
            transform: translateY(1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `;

const Barra6 = styled.div`
display: flex;
position: relative;
inline-size: 10px;
inset-inline-start: -0.8rem;
-webkit-animation: slide-in-bl 2.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
animation: slide-in-bl 2.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@-webkit-keyframes slide-in-bl {
0% {
  -webkit-transform: translateY(1000px) translateX(-1000px);
          transform: translateY(1000px) translateX(-1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(0) translateX(0);
          transform: translateY(0) translateX(0);
  opacity: 1;
}
}
@keyframes slide-in-bl {
0% {
  -webkit-transform: translateY(1000px) translateX(-1000px);
          transform: translateY(1000px) translateX(-1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(0) translateX(0);
          transform: translateY(0) translateX(0);
  opacity: 1;
}
}
`;


