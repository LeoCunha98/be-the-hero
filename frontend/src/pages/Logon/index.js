import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import { Container } from './style';
import { Button, BackLink } from '../../styles/global-style';

export default function Logon() {
  return (
    <Container>
      <section>
        <img src={logoImg} alt='Be The Hero' />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder='Sua ID' />
          <Button>Entrar</Button>

          <BackLink>
            <Link to='/register'>
              <FiLogIn size={16} color='#E02041' />
              Não tenho cadastro
            </Link>
          </BackLink>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />
    </Container>
  );
}
