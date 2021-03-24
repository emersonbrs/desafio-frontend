import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';

import Button from '../Button';

export interface IRepositorieUser {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

const List: React.FC = () => {
  const history = useHistory();
  const [repositorieUsers, setRepositorieUsers] = useState<IRepositorieUser[]>(
    [],
  );

  function handleEdit({ item }: { item: IRepositorieUser }) {
    history.push({
      pathname: '/singleUser',
      state: { item },
    });
  }

  function handleDelete({ item }: { item: IRepositorieUser }) {
    const deleteUser = async () => {
      await api.delete(`users/${item.id}`);
    };

    // Colocando fora do deleteUser para ser mais rápido de visualizar(pela certeza de que a chamada da api fake funciona)
    setRepositorieUsers(
      repositorieUsers.filter(itemRepo => itemRepo.id !== item.id),
    );

    deleteUser();
  }

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get(`users`);

      const { data } = response.data;

      setRepositorieUsers(data);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
            <th>Editar Perfil</th>
            <th>Deletar Perfil</th>
          </tr>
        </thead>

        <tbody>
          <>
            {repositorieUsers ? (
              <>
                {repositorieUsers.map(item => (
                  <tr className="trBody">
                    <td className="tdAvatar">
                      <img src={item.avatar} />
                    </td>
                    <td className="name">{item.first_name}</td>
                    <td className="lastname">{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                      <Button onClick={() => handleEdit({ item })}>Edit</Button>
                    </td>
                    <td>
                      <Button onClick={() => handleDelete({ item })}>
                        Deletar
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <h1>Sem Resultados</h1>
            )}
          </>
        </tbody>
      </table>
    </Container>
  );
};

export default List;
