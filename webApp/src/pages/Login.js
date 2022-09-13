import React from 'react';
// Components
import Login from '../components/auth/Login';

// Style
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginStyle>
      <Login />
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; 
  background-color: rgba(179,218,214,50%);
`;

export default LoginPage;
