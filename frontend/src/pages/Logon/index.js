import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';
import { StyledButton, BackLink } from '../../styles/globalStyle';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <section>
        <img src={logoImg} alt='Be The Hero' />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder='Sua ID'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <StyledButton>Entrar</StyledButton>

          <BackLink to='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </BackLink>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />
    </Container>
  );
}
