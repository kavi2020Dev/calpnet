import React, { memo } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const Username = ({formik}) => {
  return (
    <TextField
      id='username'
      name='username'
      size='small'
      placeholder='User Name'
      focused={false}
      fullWidth
      value={formik?.values?.username}
      onChange={formik?.handleChange}
      error={Boolean(formik.errors.username && formik.touched.username)}
      helperText={
        formik.errors.username && formik.touched.username ? formik.errors.username : ""
      }
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <PersonOutlineRoundedIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        marginBlock: "6px",
      }}
    />
  );
};

Username.propTypes  = {
  formik: PropTypes.any.isRequired,
};

export default memo(Username);
