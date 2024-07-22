import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { useMediaQuery, useTheme } from '@mui/material'

const SideNavBar = ({children}) => {
 const theme = useTheme()
 const [drawerWidth, setDrawerWidth] = useState('210')  
 const isResponsive = useMediaQuery(theme.breakpoints.down('768'))  

 useEffect(() => {
  if(isResponsive){
    setDrawerWidth(55)  
  }
  else{
    setDrawerWidth(210)    
  }
 },[isResponsive])

  return (
    <div className='relative p-4 px-3 flex'>
     <Navbar drawerWidth={drawerWidth}/>
     <div className='px-3' style={{width:`calc(100% - ${drawerWidth}px)`}}>{children}</div>
    </div>
  )
}

export default SideNavBar