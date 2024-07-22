const Autocomplete = (theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
            fontSize: '0.80rem', 
          },
          inputRoot: {
            '& .MuiAutocomplete-input': {
              fontSize: '0.80rem', 
            },
          },
      },
    },
  };
};

export default Autocomplete;
