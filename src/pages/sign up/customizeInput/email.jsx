import React, { memo } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Email = ({formik}) => {
  return (
    <TextField
    id='email'
    name='email'
    size='small'
    placeholder='Email'
    focused={false}
    fullWidth
    value={formik?.values?.email}
    onChange={formik?.handleChange}
    error={Boolean(formik.errors.email && formik.touched.email)}
    helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''}     
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">             
          <MailOutlineRoundedIcon />
        </InputAdornment>
      ),
    }}
    sx={{
     marginBlock:'6px' 
    }}
    />
  );
};

Email.propTypes  = {
  formik: PropTypes.any.isRequired,
};

export default memo(Email);
