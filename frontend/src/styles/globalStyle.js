import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background-color: #f0f0f5;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

form {
  input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  textarea {
    width: 100%;
    resize: vertical;
    min-height: 140px;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }
}`;

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  :hover {
    opacity: 0.8;
  }
`;
