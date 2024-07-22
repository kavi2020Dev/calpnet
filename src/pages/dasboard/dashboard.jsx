import { IconButton, InputAdornment, InputBase, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import FundRaiser from './list/fundraiser';
import Request from './list/request';
import ProjectStatus from './list/projectstatus';

const Dashboard = () => {
 const theme = useTheme() 
 const [isActive, setIsActive] = useState(0)
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <Typography
            variant='h5'
            color={theme.palette.grey[500]}
            fontWeight={500}
          >
            Dashboard
          </Typography>
          <Typography
            variant='h6'
            fontWeight={400}
            color={theme.palette.grey[500]}
          >
            Last Updated: (Date: 21/June/2024 - Time: 11:38 am)
          </Typography>
        </div>
        
        <div>
        <InputBase
          sx={{
            fontSize: "0.80rem",
            backgroundColor: theme.palette?.grey[400],
            borderRadius: "4px",
            padding: "2px",
            paddingInline:'5px'
          }}
          startAdornment={
            <InputAdornment position='start'>
              <svg
                width={15}
                height={15}
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.188 13.125a5.938 5.938 0 1 0 0 -11.875 5.938 5.938 0 0 0 0 11.875'
                  stroke='#181A1B'
                  strokeWidth={1.1250000000000002}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='m13.75 13.75 -1.249 -1.249'
                  stroke='#181A1B'
                  strokeWidth={1.1250000000000002}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </InputAdornment>
          }
          placeholder='Search...'
        />

        <IconButton sx={{mx:'5px'}} size='small'><NotificationsNoneRoundedIcon/></IconButton>
        </div>
       
      </div>
      
      <div className='flex'>
       {['Fund Raiser', 'Requests', 'Project Status'].map((item,idx) => (
        <div className='py-2 rounded-md mt-2 w-36 text-center cursor-pointer' onClick={() => setIsActive(idx)}
         style={{backgroundColor:isActive == idx ? theme?.palette?.secondary?.dark : theme?.palette?.grey[400], marginInline:idx == 1 ? '10px' : 0}}>
          <Typography fontSize={'0.85rem'} fontWeight={400} color={isActive == idx ? theme?.palette?.common?.white :theme.palette.grey[200]}>{item}</Typography>
        </div>
       ))}
      </div>
      
      {isActive == 0 ? <FundRaiser/> : isActive == 1 ? <Request/> : <ProjectStatus/>}
    </>
  );
}

export default Dashboard