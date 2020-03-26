import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Container } from './style';
import { Button } from '../../styles/global-style';

export default function Logon() {
  return (
    <Container>
      <section>
        <img src={logoImg} alt='Be The Hero' />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder='Sua ID' />
          <Button>Entrar</Button>

          <a href='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />
    </Container>
  );
}
