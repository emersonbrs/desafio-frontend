import { useAuth } from '../../hooks/Auth';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <h1>Lucree</h1>
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </Content>
    </Container>
  );
};

export default Header;
