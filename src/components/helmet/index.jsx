import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from "prop-types";

const CustomizeHelmet = ({title, name}) => {
  return (
    <Helmet>
     <title>{title}</title>
     <meta name={name} content="This is the home page." />    
    </Helmet>
  )
}

CustomizeHelmet.propTypes  = {
  title: PropTypes?.string?.isRequired,
  name : PropTypes?.string
}

export default memo(CustomizeHelmet)