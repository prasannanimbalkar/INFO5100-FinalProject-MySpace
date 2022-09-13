import React from 'react';
// Components
import Register from '../components/auth/Register';

// Style
import styled from 'styled-components';

const RegisterPage = () => {
  return (
    <RegisterStyle>
      <Register />
    </RegisterStyle>
  );
};

const RegisterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; 
  background-color: rgba(179,218,214,50%);
`;


export default RegisterPage;
