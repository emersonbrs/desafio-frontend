import React, { createContext, useContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthData {
  token: string;
  // SignIn retonar uma promise por conta de sua função assíncrona
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

// Forçando que o objeto seja um Auth para poder inicializar o contexto com um objeto vazio
const Auth = createContext<AuthData>({} as AuthData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    // Vamos preencher os dados caso já esteja logado
    const token = localStorage.getItem('@LucreeTest:token');

    if (token) {
      return { token };
    }

    return {} as AuthState;
  });

  // Logando na aplicação
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    const { token } = response.data;

    // Armazenando a informação do token (usando prefixo @LucreeTest para não dar problema com outros tokens)
    localStorage.setItem('@LucreeTest:token', token);

    // Após o login ser feito, vamos preencher o nosso state
    setData({ token });
  }, []);

  // Deslogando da aplicação
  const signOut = useCallback(() => {
    localStorage.removeItem('@LucreeTest:token');

    setData({} as AuthState);
  }, []);

  return (
    <Auth.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </Auth.Provider>
  );
};

function useAuth(): AuthData {
  const context = useContext(Auth);

  // Caso o contexto ainda não for criado, retorna erro
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
