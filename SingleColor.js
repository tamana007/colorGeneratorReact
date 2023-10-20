import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const [alert,setAler]=useState(false);
  const bcg=rgb.join(',');

  useEffect(()=>{
    const timing=setTimeout(()=>{setAler(false)},3000)
  
  return()=>clearTimeout(timing)}
  ,[alert]
  )

  return <>
  <article className={'color'} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
    setAler(true)
    navigator.clipboard.writeText(bcg);
  }}>colors
  <p className='percent-value'>{weight}%</p>
  {alert && <p className='alert'>Coppied to clipboard</p>}
  {/* <p></p> */}
  </article>
  {/* <p className='percent-value'>{weight}</p> */}
  
  
  </>
}

export default SingleColor
