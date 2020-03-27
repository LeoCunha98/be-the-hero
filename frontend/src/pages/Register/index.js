import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { BackLink, Button } from '../../styles/global-style';
import { Container, Content, InputGroup } from './style';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt='Be The Hero' />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda as pessoas a
            encontrarem os casos da sua ONG.
          </p>

          <BackLink>
            <Link to='/'>
              <FiArrowLeft size={16} color='#E02041' />
              Não tenho cadastro
            </Link>
          </BackLink>
        </section>

        <form>
          <input placeholder='Nome da ONG' />
          <input type='email' placeholder='E-mail' />
          <input placeholder='WhatsApp' />
          <InputGroup>
            <input placeholder='Cidade' />
            <input placeholder='UF' style={{ width: 80 }} />
          </InputGroup>

          <Button type='submit'>Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
