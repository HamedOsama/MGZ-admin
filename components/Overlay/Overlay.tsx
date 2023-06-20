import React from 'react'

interface IOverlayProp {
  props ?: any
  style ?: string
}
const Overlay = ({props , style} : IOverlayProp) => {
  return (
    <div 
    className={`fixed inset-0 bg-black bg-opacity-30 blur-sm z-10 ${style}`}
    {...props}
    >
    </div>
  )
}

export default Overlay