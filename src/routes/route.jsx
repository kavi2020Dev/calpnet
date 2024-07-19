import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import loadable from '../components/loadable'

const Login = loadable(lazy(() => import('../pages/login/login')))
const SignUp = loadable(lazy(() => import('../pages/sign up/signup')))

const RouteSetup = () => {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>   
      <Route path='/login' element={<Login/>}/>   
      <Route path='/signup' element={<SignUp/>}/>   
     </Routes>
    </BrowserRouter>
  )
}

export default RouteSetup