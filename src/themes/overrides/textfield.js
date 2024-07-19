const TextField = (theme) => {
  return {
   MuiTextField: { 
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          fontSize:'0.85rem',
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
          "& .Mui-selected": {
            backgroundColor: theme?.palette?.common?.white,
          },
        },
        "&.Mui-selected": {
          backgroundColor: theme?.palette?.common?.white,
        },
        "&.MuiInputBase-input": {
          "&.Mui-focused": {
            backgroundColor: theme?.palette?.common?.white,
          },
        },
        "& .MuiInputLabel-root": {
          color: "#7D7C7C",
          "&.Mui-focused": {
            backgroundColor: theme?.palette?.common?.white,
          },
        },
      },
    },
  }
 }
};

export default TextField;
