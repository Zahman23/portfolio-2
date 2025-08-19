'use client'

import React from 'react'

interface RadialCustomProps{
  x: number,
  y: number
}

const RadialCustom = ({x,y}:RadialCustomProps) => {
  return (
    <div 
    className={`pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute`}
       style={{
        backgroundImage: `radial-gradient(circle at ${x}px ${y}px, rgba(29,78,216,0.15), transparent 600px)`
      }}
      ></div>
  )
}

export default RadialCustom