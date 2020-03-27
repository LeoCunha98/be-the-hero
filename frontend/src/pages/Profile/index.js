import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, PowerButton, StyledLink } from './styles';
import { StyledButton } from '../../styles/globalStyle';

export default function Profile() {
  return (
    <Container>
      <header>
        <img src={logoImg} alt='Be the Hero' />
        <span>Bem vinda, APAD</span>
        <StyledButton as={StyledLink} to='/incidents/new'>
          Cadastrar novo caso
        </StyledButton>
        <PowerButton>
          <FiPower size={18} color='#E02041' />
        </PowerButton>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição Teste</p>

          <strong>Valor</strong>
          <p>R$ 120</p>

          <button type='submit'>
            <FiTrash2 size={20} color='a8a8b3' />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição Teste</p>

          <strong>Valor</strong>
          <p>R$ 120</p>

          <button type='submit'>
            <FiTrash2 size={20} color='a8a8b3' />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição Teste</p>

          <strong>Valor</strong>
          <p>R$ 120</p>

          <button type='submit'>
            <FiTrash2 size={20} color='a8a8b3' />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição Teste</p>

          <strong>Valor</strong>
          <p>R$ 120</p>

          <button type='submit'>
            <FiTrash2 size={20} color='a8a8b3' />
          </button>
        </li>
      </ul>
    </Container>
  );
}
