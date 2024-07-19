import { Box, Checkbox, FormControl, FormGroup, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Background from '../../assets/gif/background.gif'
import Helmet from '../../components/helmet'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/customizeButton'
import { useDispatch } from 'react-redux';
import { showSnackBar } from '../../redux/reducer/snackbar';

const Login = () => {
 const theme = useTheme()
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const [isEdit, setIsEdit] = useState(false)
 const [isLoader, setIsLoader] = useState(false)

 const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password min 8 characters').required('Password is required'),
  });

  const initialValues = {
    email : '',
    password : ''
  }

 const formik = useFormik({
  initialValues: initialValues,
  validationSchema : validationSchema,
  onSubmit : () => OnAuthLogin()
 })

 
const OnAuthLogin = async() => {
 setIsLoader(true) 
 try {
  if(formik?.values?.email == 'admin@gmail.com' && formik?.values?.password == 'admin@123'){
    dispatch(showSnackBar({message :'Login successfully', type:'success'}))
    await setTimeout(() => {
      setIsLoader(false)
      navigate('/chooseone')
    },2000)
  } 
  else{
    dispatch(showSnackBar({message :'Invalid credintial', type:'error'}))
    setIsLoader(false)   
  }
 } catch (error) {
  setIsLoader(false)
  dispatch(showSnackBar({message :'Please try again', type:'error'}))
 }
}

 
  return (
    <>
     <Helmet title={"login"}/>
     <div 
      style={{
      backgroundImage:`url(${Background})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      width:'100vw',
      height:'100vh',
      alignItems:'center',
      display:'flex',
      justifyContent:'center'
     }}>
      <Box className="bg-white min-w-[300px] max-w-[520px] p-5 w-full items-center z-9 rounded-md md:mx-[10px] md:w-full m-3" boxShadow={1}>
        <Typography variant='h2'>Log In to your account</Typography>
        <Typography variant='h6' my={0.5}>Enter your Details</Typography>
       
       <TextField
        id='email'
        name='email'
        size='small'
        placeholder='Email'
        focused={false}
        fullWidth
        value={formik?.values?.email}
        onChange={formik?.handleChange}
        error={Boolean(formik.errors.email && formik.touched.email)}
        helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''}     
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">             
              <MailOutlineRoundedIcon />
            </InputAdornment>
          ),
        }}
        sx={{
         marginBlock:'10px' 
        }}
       />

       <TextField
        id='password'
        size='small'
        placeholder='Password'
        focused={false}
        fullWidth
        value={formik?.values?.password}
        onChange={formik?.handleChange}
        type='password'
        error={Boolean(formik.errors.password && formik.touched.password)}
        helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ''}      
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">             
              <LockOutlinedIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginBlockStart:'10px',
        }}
       />

       <div>
        <Checkbox size='small' />
        <Typography variant='h7'>Remember Me</Typography>
       </div>

       <FormGroup>
        <FormControl control={<Checkbox size='small' defaultChecked />} label="Remember me"/>
       </FormGroup>

       <Button 
        isLoader={isLoader} 
        title="Login"
        styleOne={{paddingBlock:'10.1px'}}
        btnStyle={{paddingBlock:'6px'}}
        onClick={formik?.handleSubmit}
        />

       
       <div className='flex items-center pt-2' onClick={()=> navigate('/signup')}>
       <Typography variant='h7'>Don’t have an account?</Typography>
       <Typography variant='h7' fontWeight={500} sx={{paddingInlineStart:'5px', cursor:'pointer', '&:hover':{color:theme?.palette?.primary?.main}}}>Sign Up Here</Typography>
       </div>

      </Box> 
     </div>
    </>
  )
}

export default Login