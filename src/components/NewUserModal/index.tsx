import Modal from 'react-modal';
import { Container } from './styles';
import api from '../../services/api';

interface NewUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: NewUserModalProps) {
  function handleCreate() {
    const createUser = async () => {
      const data = {
        name: 'morpheus',
        job: 'leader',
      };
      await api.post(`/users`, data);
    };

    createUser();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Novo Usuário</h2>

        <input placeholder="Nome" />
        <input placeholder="Profissão" />

        <button type="submit" onClick={handleCreate}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
