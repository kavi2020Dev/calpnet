import { Button, Divider, Step, StepButton, StepConnector, StepLabel, Stepper, styled, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Information from './information/information'
import Locationandtime from './locationandtime'
import Documatation from './documentations'

const Registration = () => {
 const theme = useTheme()   
 const [active, setActive] = useState(0)

 const stepperData = [
  {name :'Basic Information'},  
  {name :'Location and Timeline'},  
  {name :'Financials and Documentation'}  
 ]
 
 const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: theme.palette.green[100],
    borderWidth : '1.1px',
    borderRadius:'3px'
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    fontSize: '0.85rem',
  },
  '& .MuiStepIcon-root': {
    color: theme?.palette?.grey[300],
    '&.Mui-active': {
      color: theme?.palette?.primary?.main,
    },
    '&.Mui-completed': {
      color:theme?.palette?.green[100],
    },
  },
}));

console.log(active)

  return (
    <div className='relative w-screen h-screen'>
     <div className='flex justify-center m-auto sm:w-full p-2 md:w-3/4 p-5 lg:w-1/2 p-10' style={{height:'420px'}}>
      <div className='w-full p-3 rounded-md' style={{backgroundColor:theme?.palette?.grey[50], overflowY:'scroll',scrollbarWidth: 'none', msOverflowStyle: 'none'
       }}>
       {active == 0 ? <Information setActive={setActive}/> : active == 1 ? <Locationandtime setActive={setActive}/> :  active == 2 ? <Documatation setActive={setActive}/> : null}
      </div>  
     
     </div>  
       
     
     <div className='absolute bottom-0 z-10 w-screen p-2'>
      <Stepper activeStep={active} alternativeLabel connector={<CustomConnector/>} >
        {stepperData.map((item, idx) => (
         <Step key={idx} onClick={()=>setActive(idx)} className='cursor-pointer'>
          <CustomStepLabel>{item?.name}</CustomStepLabel> 
         </Step> ))}       
      </Stepper>
     </div>

    </div>
  )
}

export default Registration