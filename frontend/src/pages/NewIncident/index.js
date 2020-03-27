import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { BackLink, StyledButton } from './../../styles/globalStyle';
import { Container, Content } from './styles';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt='Be The Hero' />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <BackLink>
            <Link to='/profile'>
              <FiArrowLeft size={16} color='#E02041' />
              Voltar para home
            </Link>
          </BackLink>
        </section>

        <form>
          <input placeholder='Título do caso' />
          <textarea placeholder='Descrição' />
          <input placeholder='Valor em reais' />

          <StyledButton type='submit'>Cadastrar</StyledButton>
        </form>
      </Content>
    </Container>
  );
}
