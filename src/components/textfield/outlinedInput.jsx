import { TextField, useTheme } from '@mui/material'
import React, { memo } from 'react'

const OutlinedInput = (props) => {
 
 const theme = useTheme()   

  return (   
    <TextField
     {...props}
     size='small'
     variant="outlined"     
     focused={false}
     fullWidth  
     sx={{
      "& .MuiTextField-root": {          
      },          
      "& .MuiOutlinedInput-root": {
        fontSize: 13,
        color: theme?.palette?.common?.black,
        fontWeight: 400,
        "& fieldset": {
          borderColor: "#E5E1DA",
          borderWidth: "1.4px",
        },
        "&:hover fieldset": {
          borderColor: "#7D7C7C",
          borderWidth: "1.4px",
        },
        '& .Mui-selected': {
          backgroundColor:theme?.palette?.common?.white,
        },
      },
      "&.Mui-selected": {
        backgroundColor:theme?.palette?.common?.white,
      },
      "&.MuiInputBase-input": {
        '&.Mui-focused': {
          backgroundColor:theme?.palette?.common?.white,
        },
      },
      "& .MuiInputLabel-root": {
        color: "#7D7C7C",
        '&.Mui-focused': {
          backgroundColor:theme?.palette?.common?.white,
        },
      },
     
    }} 
      /> 
  )
}

export default memo(OutlinedInput)