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
    grey : {
      50 : Colors?.grey?.[50],
      100 : Colors?.grey?.[100],
      200 : Colors?.grey?.[200],
      400 : Colors?.grey?.[400],
      500 : Colors?.grey?.[500]
    },
    green :{
     100 : Colors.green?.[100] 
    }
  }  
});

export default Palette;
