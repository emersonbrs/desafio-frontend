import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  a {
    color: #f4ede8;
    display: flex;
    margin-bottom: 2rem;
    text-decoration: none;
    transition: color 0.2s;

    align-items: center;

    &:hover {
      filter: brightness(0.7);
    }
  }

  svg {
    color: #fff;
    margin-right: 0.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: #fff;
  background: var(--blue);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 2.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
