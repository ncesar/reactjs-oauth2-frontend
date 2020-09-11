import React, { useState } from 'react';
import axios from 'axios';
import {
  StyledContainer,
  StyledButton,
  StyledForm,
  StyledContentWrapper,
  StyledButtonWrapper,
  StyledErrorMessage,
} from './styled';
import { TextInput } from '../../components/TextInput';
import { Logo } from '../../components/Logo';
import EmailIcon from '../../assets/img/email-icon.svg';
import LockIcon from '../../assets/img/lock-icon.svg';
import { Loading } from '../../components/Loading';
import { Title } from '../../components/Title';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    setLoading(true);
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}users/auth/sign_in`,
      data: { email: email.value, password: password.value },
      headers: { 'content-type': 'application/json' },
      /* 
      I have put application/json here to follow Postman's .json but shouldn't it follow 
      OAuth 2.0 pattern and be 
      application/x-www-form-encoded(or maybe I'm wrong and x-www-form-enconded is supposed to be used only in the server)? 
      */
    })
      .then(function (response) {
        const authData = {
          accessToken: response.headers['access-token'],
          client: response.headers.client,
          uid: response.headers.uid,
        };
        /*
        Since we are using React and there is no javascript code from outside, there is no need to worry about someone
        trying to inject something through XSS and use our localStorage to malicious techniques.
        see: https://stackoverflow.com/a/44209185/8402168
        */
        localStorage.setItem('authData', JSON.stringify(authData));
        window.location.href = '/';
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
      });
  };
  if (localStorage.getItem('authData')) {
    return <Redirect to="/" />;
  }
  const inputFields = [
    {
      autoComplete: 'email',
      autoFocus: true,
      name: 'email',
      required: true,
      fullWidth: true,
      margin: 'normal',
      id: 'email',
      placeholder: 'E-mail',
      type: 'email',
      icon: <img src={EmailIcon} className="input-icon" alt="E-mail icon" />,
      error: error,
    },
    {
      autoComplete: 'current-password',
      name: 'password',
      required: true,
      fullWidth: true,
      margin: 'normal',
      placeholder: 'Senha',
      id: 'password',
      icon: <img src={LockIcon} className="input-icon" alt="Lock icon" />,
      error: error,
      isPassword: true,
    },
  ];

  return (
    <StyledContainer component="main" maxWidth="xs">
      {loading && <Loading />}
      <StyledContentWrapper>
        <Logo />
        <Title size="1.5rem" margin="4.188rem 0 0 0">
          BEM-VINDO AO <br />
          EMPRESAS
        </Title>
        <Title size="1.125rem" weight="normal" margin="1.281rem 0 0 0">
          Lorem ipsum dolor sit amet, contetur
          <br /> adipiscing elit. Nunc accumsan.
        </Title>
        <StyledForm onSubmit={onSubmitHandler}>
          {inputFields.map((field, index) => (
            <TextInput key={`${field.name}_${index}`} {...field} />
          ))}
          {error && (
            <StyledErrorMessage>
              Credenciais informadas são inválidas, tente novamente
            </StyledErrorMessage>
          )}
          <StyledButtonWrapper>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              error={error.toString()}
            >
              Entrar
            </StyledButton>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default Login;
