import { Button } from '@mui/material'
import React, { memo } from 'react'
import { BeatLoader } from 'react-spinners'
import PropTypes from "prop-types";

const CustomizeButton = ({isLoader, title, styleOne, btnStyle, onClick}) => {
  return (
   <>
   {isLoader ?  
        <Button variant='contained' sx={styleOne} fullWidth><BeatLoader color='white' size={10}/></Button>
        :<Button variant='contained' sx={btnStyle} fullWidth onClick={onClick}>{title}</Button>
       }
   </>
  )
}

CustomizeButton.propTypes  = {
 isLoader : PropTypes?.bool?.isRequired,
 title : PropTypes?.string?.isRequired,
 styleOne : PropTypes?.any,
 btnStyle : PropTypes?.any,
 onClick : PropTypes?.func?.isRequired
}

export default memo(CustomizeButton)