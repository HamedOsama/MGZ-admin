import React from 'react'

interface IModalContainerProp {
  children: React.ReactNode
  closeHandler : () => void
}
const ModalContainer = ({ children, closeHandler }: IModalContainerProp) => {
  return (
    <div className='fixed inset-0 z-50 h-screen outline-2 outline-transparent outline-offset-2'>
      <div className="absolute inset-0 overflow-hidden">
        <div className='absolute inset-0 bg-black bg-opacity-25 duration-100 backdrop-blur-[1px]' onClick={closeHandler}></div>
        {children}
      </div>
    </div>
  )
  
}

export default ModalContainer