import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  // Passando a classe do React, para o Tooltip poder receber uma estilização de um elemento superior
  // ? para indicar que ela não é obrigatória
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
