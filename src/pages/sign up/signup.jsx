import React, { useState } from 'react'
import Helmet from '../../components/helmet'
import Background from '../../assets/gif/background.gif'
import { Box, Typography, useTheme } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Password from './customizeInput/password'
import Co_pass from './customizeInput/co_pass'
import Email from './customizeInput/email'
import UserName from './customizeInput/username'
import Button from '../../components/button/customizeButton'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
 
 const [isLoader, setIsLoader] = useState(false) 
 const navigate = useNavigate()
 const theme = useTheme()

  const validationSchema = Yup.object().shape({
    username : Yup.string().required('userName is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password min 8 characters').required('Password is required'),
    conform_pass: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });
  
    const initialValues = {
      username:'',
      email : '',
      password : '',
      conform_pass : ''
    }
  
   const formik = useFormik({
    initialValues: initialValues,
    validationSchema : validationSchema,
    onSubmit : () => OnCreateUser()
   })

   const OnCreateUser = async() => {
    setIsLoader(true) 
    try {
     await setTimeout(() => {
       setIsLoader(false)
       navigate('/registration')
     },2000)
    } catch (error) {
     setIsLoader(false)
    }
   }
  

  return (
   <>
    <Helmet title={"Sign up"}/>
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
      <Typography variant='h2'>Create an account</Typography>
      <Typography variant='h6' my={0.5}>Enter your Details</Typography>
      
      <UserName formik={formik}/>
      <Email formik={formik}/>
      <Password formik={formik}/>
      <Co_pass formik={formik}/>
      
      <Button isLoader={isLoader} 
       title="Sign up"  
       styleOne={{paddingBlock:'10.1px', marginBlockStart:'6px'}}
       btnStyle={{paddingBlock:'6px', marginBlockStart:'6px'}}
       onClick={formik?.handleSubmit}
       />

       <div className='flex items-center pt-2' onClick={()=> navigate('/login')}>
        <Typography variant='h7'>Already have an account? </Typography>
        <Typography variant='h7' fontWeight={500} sx={{paddingInlineStart:'5px', cursor:'pointer', '&:hover':{color:theme?.palette?.primary?.main}}}>Log In Here</Typography>
       </div>

     </Box>

     </div>
   </>
  )
}

export default Signup