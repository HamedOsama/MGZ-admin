import React from 'react'

interface IMainButtonProp {
  children: React.ReactNode
  bg : string
  style ?: string
  rest ?: any
}
const MainButton = ({children , bg , style="px-6 py-1",rest} : IMainButtonProp) => {
  return (
    <button 
    className={`flex items-center ${bg} text-white rounded-md ${style}`} 
    {...rest}
    >
      {children}
    </button>
  )
}

export default MainButton