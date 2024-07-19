import React from 'react'
import { MoonLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
     <MoonLoader size={40} color='red'/>   
    </div>
  )
}

export default Loader