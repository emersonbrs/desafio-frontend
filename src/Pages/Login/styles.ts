import styled from 'styled-components';

export const Container = styled.main`
  background: var(--blue-grey);
  display: flex;
  height: 100vh;

  align-items: center;
  place-content: center;
`;
export const Content = styled.div`
  /* max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem; */

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
    color: var(--shape);
  }

  h5 {
    color: var(--grey);
    margin-bottom: 2rem;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  // Estilizar apenas o que vem diretamente do Content
  > a {
    color: var(--yellow);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
