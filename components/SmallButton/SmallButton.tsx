import React from 'react'

interface SmallButtonProps {
  children: React.ReactNode
  onClickHandler?: () => void
  disabled?: boolean
}
const SmallButton = ({ children, onClickHandler, disabled }: SmallButtonProps) => {
  return (
    <div
      className={`${disabled ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 p-1 hover:bg-main cursor-pointer'} p-1 duration-300  rounded-md`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  )
}

export default SmallButton