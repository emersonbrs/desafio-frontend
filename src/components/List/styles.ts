import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 1rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 3.5rem;
    }

    th {
      color: var(--shape);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr {
      position: relative;
      top: 0;
      transition: 300ms ease all;
      margin: 0 2rem 2rem 0;

      &.trBody:hover {
        top: -10px;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &.name {
        color: var(--dark);
      }
    }
  }
`;
