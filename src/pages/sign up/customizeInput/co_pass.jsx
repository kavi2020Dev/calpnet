import React, { memo } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ConformPassword = ({formik}) => {
  return (
    <TextField
    id='conform_pass'
    size='small'
    placeholder='Re enter password'
    focused={false}
    fullWidth
    value={formik?.values?.conform_pass}
    onChange={formik?.handleChange}
    type='password'
    error={Boolean(formik.errors.conform_pass && formik.touched.conform_pass)}
    helperText={formik.errors.conform_pass && formik.touched.conform_pass ? formik.errors.conform_pass : ''}      
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">             
          <LockOutlinedIcon />
        </InputAdornment>
      ),
    }}
    sx={{
      marginBlock:'6px',
    }}
   />
  );
};

ConformPassword.propTypes  = {
  formik: PropTypes.any.isRequired,
};

export default memo(ConformPassword);
