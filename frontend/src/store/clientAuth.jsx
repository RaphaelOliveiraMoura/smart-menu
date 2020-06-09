import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';

import api from '~/services/api';
import history from '~/services/history';
import { useSnackbar } from '~/store/snackbar';

const ClientAuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const ClientAuthProvider = ({ children }) => {
  const { snackbarMessage } = useSnackbar();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@smart-menu/token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }

    return {};
  });

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${data.token}`;
  }, [data]);

  const signin = useCallback(
    async (idTable) => {
      try {
        const response = await api.post(
          '/sessions',
          {},
          { headers: { id_table: idTable } }
        );

        const { token } = response.data;

        localStorage.setItem('@smart-menu/token', token);

        setData((prevData) => ({ ...prevData, token }));

        history.push('/home');
      } catch (error) {
        snackbarMessage('QRCode inválido', { variant: 'error' });
      }
    },
    [snackbarMessage]
  );

  const logout = useCallback(() => {
    setData({});
    localStorage.removeItem('@smart-menu/token');
    history.push('/');
  }, []);

  return (
    <ClientAuthContext.Provider value={{ token: data.token, signin, logout }}>
      {children}
    </ClientAuthContext.Provider>
  );
};

export const useClientAuth = () => {
  const context = useContext(ClientAuthContext);

  if (!context) {
    throw new Error('You just can access this context inside a provider');
  }

  return context;
};

export default {
  ClientAuthProvider,
  useClientAuth,
};
