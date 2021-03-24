import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

// Exportando pra aproveitar a tipagem em ToastContainer
export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastData {
  // Usando o Omit (do Typescript), para pegar todas as propriedades do ToastMessage menos a especificada (id)
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const Toast = createContext<ToastData>({} as ToastData);

const ToastProvider: React.FC = ({ children }) => {
  // Estado que armazena um Array de ToastMessages
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  // Adicionando o Toast
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      // Função da biblioteca uuidv4 para criar um Id único
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      // Pegando o estado atual e usando imutabilidade para copiar tudo que já está dentro do Array de messages
      setMessages(state => [...state, toast]);
    },
    [],
  );

  // Removendo o Toast
  const removeToast = useCallback((id: string) => {
    // Retorna todas as Toasts menos a que está sendo removida
    setMessages(state => state.filter(message => message.id !== id));
    console.log('removeToast');
  }, []);

  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </Toast.Provider>
  );
};

function useToast(): ToastData {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
