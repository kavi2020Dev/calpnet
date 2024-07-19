import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import loadable from '../components/loadable'

const Login = loadable(lazy(() => import('../pages/login/login')))
const SignUp = loadable(lazy(() => import('../pages/sign up/signup')))
const Dashboard = loadable(lazy(() => import('../pages/dasboard/dashboard')))
const ChooseOne = loadable(lazy(() => import('../pages/registration/chooseOne')))
const Registration = loadable(lazy(() => import('../pages/registration/registration')))

const RouteSetup = () => {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>   
      <Route path='/login' element={<Login/>}/>   
      <Route path='/signup' element={<SignUp/>}/>   
      <Route path='/dashboard' element={<Dashboard/>}/>   
      <Route path='/chooseone' element={<ChooseOne/>}/>   
      <Route path='/registration' element={<Registration/>}/>   
     </Routes>
    </BrowserRouter>
  )
}

export default RouteSetup