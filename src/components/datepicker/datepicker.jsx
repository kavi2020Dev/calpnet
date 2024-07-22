import React, { memo } from 'react';
import { Grid, useTheme } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { color } from 'framer-motion';

const CusDatePicker = ({ name, value, onChange, error, errorMessage }) => {
  const theme = useTheme();

  return (
    <Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          name={name}
          value={value}
          disablePast
          onChange={onChange}
          
          slotProps={{
            textField: {
              helperText: errorMessage,
              color: 'error',             
            },         
          }}
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
                borderColor: error ? theme.palette.error.main : "#E5E1DA",
                borderWidth: "1.4px",
              },
              "&:hover fieldset": {
                borderColor: error ? theme.palette.error.main : "#7D7C7C",
                borderWidth: "1.4px",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7D7C7C", 
                borderWidth: "1.4px",
              },
              '&.Mui-selected': {
                backgroundColor: 'white',
              },
            },
            "& .MuiInputBase-input": {
              paddingBlock: '8.5px',
              paddingInline: '8.5px',              
            },
            "& .MuiInputLabel-root": {
              color: "#7D7C7C",
              '&.Mui-focused': {
                backgroundColor: 'white',
              },
            },
          }}
        />
      </LocalizationProvider>
    </Grid>
  );
};

export default memo(CusDatePicker);
