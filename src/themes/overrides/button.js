const Button = (theme) => {
  const disabledStyle = {
    "&.Mui-disabled": {
      backgroundColor: theme.palette.grey[300],
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'capitalize',
          '&.MuiButton-contained': {
            ...disabledStyle,
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            fontSize:'0.80rem',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              opacity:'0.8'
            },
          },
          '&.MuiButton-outlined': {
            ...disabledStyle,
          },
          '&.MuiButton-text': {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
         
        },
      },
    },
  };
};

export default Button;
