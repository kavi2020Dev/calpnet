// src/components/SnackbarComponent.js
import React from 'react';
import { Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackBar } from '../reducer/snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={0} ref={ref} variant="filled" {...props} sx={{ zIndex: 9999}} />;
});

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.snackbar);
  const snackbarStatus = snackbar?.type;
  const severity = snackbarStatus;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackBar());
  };

  return (
    <Snackbar
      open={snackbar.isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ zIndex: 999}}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography fontSize={'0.85rem'} fontWeight={400} className="text-center">
          {snackbar.message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
