import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

// Interface com funções para usar na referência
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

// Importa tudo que tem no Yup como uma variável chamada Yup
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/lucree1.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // Usando o useRef para ter acesso direto ao formulário
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          // Para me retornar todos os erros
          abortEarly: false,
        });

        // Acessar informações dentro do meu contexto
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        // console.log(JSON.parse(JSON.stringify(err)));
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        // disparar Toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Preencha os campos corretamente.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logo} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login | Frontend Test</h1>
          <h5>Login: eve.holt@reqres.in | Senha: cityslicka</h5>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/signUp">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
    </Container>
  );
};

export default Login;
