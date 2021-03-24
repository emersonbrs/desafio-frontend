import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '../../hooks/Toast';

import Button from '../Button';
import Input from '../Input';

import { Container, Content, FieldEdit, Text } from './styles';

import api from '../../services/api';

interface UserProps {
  item: {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
  };
}

const EditUser: React.FC<any> = ({ singleUser }) => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const [user] = useState<UserProps>(singleUser);

  function handleUpdate() {
    const updateUser = async () => {
      await api.put(`users/${user.item.id}`);

      history.push('/dashboard');

      // disparar Toast
      addToast({
        type: 'success',
        title: 'Feito!',
        description: 'Usuário atualizado com sucesso.',
      });
    };

    updateUser();
  }

  return (
    <Container>
      <Content>
        <Form
          initialData={{
            name: user.item.first_name,
            surname: user.item.last_name,
            email: user.item.email,
          }}
          ref={formRef}
          onSubmit={() => console.log('a')}
        >
          <FieldEdit>
            <Text>Nome</Text>
            <Input className="inputEdit" name="name" placeholder="Nome" />
          </FieldEdit>
          <FieldEdit>
            <Text>Sobrenome</Text>
            <Input
              className="inputEdit"
              name="surname"
              placeholder="Sobrenome"
            />
          </FieldEdit>
          <FieldEdit>
            <Text>E-mail</Text>
            <Input className="inputEdit" name="email" placeholder="E-mail" />
          </FieldEdit>
        </Form>

        <Button onClick={() => handleUpdate()}>Atualizar Perfil</Button>
      </Content>
    </Container>
  );
};

export default EditUser;
