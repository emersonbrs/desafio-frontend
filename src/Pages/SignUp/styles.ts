import styled from 'styled-components';

export const Container = styled.main`
  background: var(--blue-grey);
  display: flex;
  height: 100%;

  align-items: center;
  place-content: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  align-items: center;

  form {
    width: 100%;
    margin: 2rem 2rem 2rem;
    text-align: center;
  }

  img {
    width: 30%;
    margin-top: 25px;
  }

  h1 {
    color: #fff;
    margin-bottom: 2rem;
  }

  // Estilizar apenas o que vem diretamente do Content
  > a {
    color: var(--yellow);
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    margin-bottom: 24px;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
