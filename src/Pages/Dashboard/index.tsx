import { useState } from 'react';
import Modal from 'react-modal';

import List from '../../components/List';
import Header from '../../components/Header';
import { NewUserModal } from '../../components/NewUserModal';

import { Button, Container } from './styles';

// Passando elemento root da aplicação pro Modal (assim o modal é jogando no root e não especificamente no body)
Modal.setAppElement('#root');

export function Dashboard() {
  const [isNewUserOpen, setIsNewUserOpen] = useState(false);

  function handleOpenNewUserModal() {
    setIsNewUserOpen(true);
  }

  function handleCloseNewUserModal() {
    setIsNewUserOpen(false);
  }

  return (
    <>
      <Header />
      <Container>
        <Button onClick={handleOpenNewUserModal}>Criar Novo usuário</Button>
        <List />

        <NewUserModal
          isOpen={isNewUserOpen}
          onRequestClose={handleCloseNewUserModal}
        />
      </Container>
    </>
  );
}
