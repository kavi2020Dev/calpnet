import React, { memo } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Password = ({formik}) => {
  return (
    <TextField
    id='password'
    size='small'
    placeholder='Password'
    focused={false}
    fullWidth
    value={formik?.values?.password}
    onChange={formik?.handleChange}
    type='password'
    error={Boolean(formik.errors.password && formik.touched.password)}
    helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ''}      
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">             
          <LockOutlinedIcon />
        </InputAdornment>
      ),
    }}
    sx={{
      marginBlock:'6px',
      zIndex:99 
    }}
   />
  );
};

Password.propTypes  = {
  formik: PropTypes.any.isRequired,
};

export default memo(Password);
