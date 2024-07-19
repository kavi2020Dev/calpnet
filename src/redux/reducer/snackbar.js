import { createSlice } from "@reduxjs/toolkit";

const SnackBarSlice = createSlice({
 name : 'snackbar',
 initialState : {
  isOpen : false,
  message : '',
  type : 'success'  
 },
 reducers : {
  showSnackBar : (state, action) => {
   state.isOpen = true;
   state.message = action?.payload?.message;
   state.type = action?.payload?.type 
  },
  closeSnackBar : (state) => {
    state.isOpen = false;
   }    
 }, 
})

export const {showSnackBar , closeSnackBar} = SnackBarSlice.actions;
export default SnackBarSlice?.reducer;