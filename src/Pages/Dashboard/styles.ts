import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
