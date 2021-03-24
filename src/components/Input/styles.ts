import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: var(--grey);
  display: flex;
  align-items: center;

  padding: 1rem 2rem;
  border-radius: 0.5rem;

  border: 0.15rem solid var(--grey-dark);
  color: var(--grey-dark);

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--yellow);
      border-color: var(--yellow);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--yellow);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--red);
    color: var(--shape);
    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
