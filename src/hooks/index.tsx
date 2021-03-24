import React from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

// Children são os elementos internos
const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
