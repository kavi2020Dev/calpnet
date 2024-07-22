import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import loadable from '../components/loadable'
import SideNavBar from '../components/sidenavbar/sidenavbar'

const Login = loadable(lazy(() => import('../pages/login/login')))
const SignUp = loadable(lazy(() => import('../pages/sign up/signup')))
const Dashboard = loadable(lazy(() => import('../pages/dasboard/dashboard')))
const ChooseOne = loadable(lazy(() => import('../pages/registration/chooseOne')))
const Registration = loadable(lazy(() => import('../pages/registration/registration')))
const SuperAdmin = loadable(lazy(() => import('../pages/layout/super admin/superadmin')))
const PublicUser = loadable(lazy(() => import('../pages/layout/public user/publicuser')))
const Request = loadable(lazy(() => import('../pages/layout/request/request')))
const ProjectCount = loadable(lazy(() => import('../pages/layout/project counts/projectcount')))
const Project = loadable(lazy(() => import('../pages/layout/project/project')))

const RouteSetup = () => {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>   
      <Route path='/login' element={<Login/>}/>   
      <Route path='/signup' element={<SignUp/>}/>   
      <Route path='/dashboard' element={<SideNavBar><Dashboard/></SideNavBar>}/>   
      <Route path='/chooseone' element={<ChooseOne/>}/>   
      <Route path='/registration' element={<Registration/>}/>   
      <Route path='/superadmin' element={<SideNavBar><SuperAdmin/></SideNavBar>}/>   
      <Route path='/publicuser' element={<SideNavBar><PublicUser/></SideNavBar>}/>   
      <Route path='/request' element={<SideNavBar><Request/></SideNavBar>}/>   
      <Route path='/projectcount' element={<SideNavBar><ProjectCount/></SideNavBar>}/>   
      <Route path='/project' element={<SideNavBar><Project/></SideNavBar>}/>   
     </Routes>
    </BrowserRouter>
  )
}

export default RouteSetup