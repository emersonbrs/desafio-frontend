import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import EditUser from '../../components/EditUser';
import Header from '../../components/Header';

import { Container, Content } from './styles';

export function SingleUser() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Link className="back" to="/dashboard">
            <FiArrowLeft />
            <>Voltar</>
          </Link>
        </Content>
        <EditUser singleUser={location.state} />
      </Container>
    </>
  );
}
