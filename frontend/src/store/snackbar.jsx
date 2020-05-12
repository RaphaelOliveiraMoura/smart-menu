import React, { useState, createContext, useContext } from 'react';

function useCreateSnackbarContext() {
  const initialData = {
    open: false,
    variant: 'success',
    message: '',
  };

  const SnackbarContext = createContext(initialData);

  // eslint-disable-next-line react/prop-types
  const SnackbarProvider = ({ children }) => {
    const [open, setOpen] = useState(initialData.open);
    const [variant, setVariant] = useState(initialData.variant);
    const [message, setMessage] = useState(initialData.message);

    function snackbarMessage(inputMessage, { variant: inputVariant } = {}) {
      setMessage(inputMessage);
      setVariant(inputVariant || 'success');
      setOpen(true);
    }

    return (
      <SnackbarContext.Provider
        value={{
          open,
          variant,
          message,
          snackbarMessage,
          setOpen,
        }}
      >
        {children}
      </SnackbarContext.Provider>
    );
  };

  return { SnackbarContext, SnackbarProvider };
}

const SnackbarStore = useCreateSnackbarContext();

export const { SnackbarContext } = SnackbarStore;
export const { SnackbarProvider } = SnackbarStore;

export const useSnackbar = () => useContext(SnackbarContext);
