import { CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material"
import PropTypes from 'prop-types';
import { useMemo } from "react";
import Theme from "./theme";
import ComponentOverride from './overrides'

const ThemeCustomization = ({children}) => {

 const theme = useMemo(() => Theme('light', 'default'), []);
 theme.components = ComponentOverride(theme) 

  return (
    <StyledEngineProvider injectFirst>
     <ThemeProvider theme={theme}>
      <CssBaseline/>  
       {children}  
     </ThemeProvider>
    </StyledEngineProvider>
  )
}

  ThemeCustomization.propTypes = {
    children : PropTypes.node    
  }  

export default ThemeCustomization



