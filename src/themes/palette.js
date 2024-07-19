import Colors from "../utils/colors"

const Palette = ( mode ) => ({
  palette: {
    mode: mode,
    
    primary: {
      main:Colors.primary.main, // Root color
      light:Colors.primary.light,
      dark:Colors.primary.dark,
      contrastText: Colors.primary.contrastText,
    },
    secondary: {
      main:Colors.secondary.main,
      light:Colors.secondary.light,
      dark:Colors.secondary.dark,
      contrastText: Colors.secondary.contrastText,
    },
  }  
});

export default Palette;
