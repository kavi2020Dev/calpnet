import React, { lazy, useState } from 'react'
import ThemeCustomization from './themes'
import RouteSetup from './routes/route';
import { Provider } from 'react-redux';
import store from './redux/store';
import SnackBar from './redux/component/snackbarComponent'

const App = () => {
 
  return (
   <Provider store={store}>
    <ThemeCustomization>
      <RouteSetup/> 
      <SnackBar/>
    </ThemeCustomization>  
   </Provider>
  )
}
 
export default App