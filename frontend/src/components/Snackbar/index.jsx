import React from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { useSnackbar } from '~/store/snackbar';

function CustomSnackbar() {
  const { open, message, variant, setOpen } = useSnackbar();

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Snackbar
        style={{ marginTop: 10 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={variant}>{message}</Alert>
      </Snackbar>
    </ClickAwayListener>
  );
}

export default CustomSnackbar;
