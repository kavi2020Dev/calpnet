import { configureStore } from "@reduxjs/toolkit";
import snackbar from "./reducer/snackbar";


const store = configureStore({
 reducer : {
  snackbar : snackbar  
 }
})

export default store