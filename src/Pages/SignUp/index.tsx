import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// Interface com funções para usar na referência
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

// Importa tudo que tem no Yup como uma variável chamada Yup
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/lucree1.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  // Usando o useRef para ter acesso direto ao formulário
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        firstname: Yup.string().required('Nome obrigatório'),
        lastname: Yup.string().required('Sobrenome obrigatório'),
        job: Yup.string().required('Profissão obrigatória'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        // Para me retornar todos os erros
        abortEarly: false,
      });
    } catch (err) {
      // console.log(JSON.parse(JSON.stringify(err)));

      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="firstname" placeholder="Nome" />
          <Input name="lastname" placeholder="Sobrenome" />
          <Input name="job" placeholder="Profissão" />
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Input
            name="password"
            type="password"
            placeholder="Confirme sua Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
