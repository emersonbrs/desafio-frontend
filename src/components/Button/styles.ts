import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: var(--yellow);
  color: var(--blue-grey);

  height: 3.75rem;
  border-radius: 0.5rem;
  border: 0;

  font-weight: bold;

  margin-top: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
