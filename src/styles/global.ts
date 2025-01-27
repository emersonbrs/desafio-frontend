import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #160b30;
    --grey: #e5e5e5;
    --grey-dark: #232129;
    --red: #c53030;
    --yellow: #fca311;
    --brown: #6d351a;
    --blue: #191979;

    --blue-grey: #14213d;
    --text-body: #14217a;
    --shape: #FFFFFF;
    --dark: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 728px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top:0;
    bottom:0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width:576px;

    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
`;
