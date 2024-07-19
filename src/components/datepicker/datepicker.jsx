// src/components/CusDatePicker.jsx

import React, { memo } from 'react';
import { Grid, TextField, Typography, useTheme } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CusDatePicker = ({ name, value, onChange, error, errorMessage }) => {
  const theme = useTheme();

  return (
    <Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          name={name}
          value={value}
          onChange={onChange}
          
          format="DD/MM/YYYY"          
          views={['day', 'month', 'year']}
          sx={{
            "&.MuiTextField-root": {
              width: '100%',
            },
            "& .MuiOutlinedInput-root": {
              fontSize: 13,
              color: theme?.palette?.common?.black,
              fontWeight: 400,
              "& fieldset": {
                borderColor: (error) 
                  ? theme.palette.error.main
                  : "#E5E1DA",
                borderWidth: "1.4px",
              },
              "&:hover fieldset": {
                borderColor: error 
                  ?  theme.palette.error.main
                  : "#7D7C7C",
                borderWidth: "1.4px",
              },

              '&.Mui-selected': {
                backgroundColor: 'white',
                borderColor:"red"
              },
            },
            '&.Mui-selected': {
              backgroundColor: 'white',
              borderColor:"red"
            },
            "& .MuiInputBase-input": {
              paddingBlock: '8.5px',
              paddingInline: '8.5px',

              '&.Mui-focused': {
                backgroundColor: 'white',
                borderColor:'red'
              },
            },
            "& .MuiInputLabel-root": {
              color: "#7D7C7C",
              '&. Mui-focused': {
                backgroundColor: 'white',
                color: "#7D7C7C",
              },
            },
          }}
        />
      </LocalizationProvider>
      {error ? (
        <div style={{ marginLeft: '12px', marginTop: '6px' }}>
          <Typography fontSize={12} color={theme.palette.error.main}>
            {errorMessage}
          </Typography>
        </div>
      ) : null}
    </Grid>
  );
};

export default memo(CusDatePicker);
