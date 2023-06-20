import React from 'react'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface IModalWrapperProp {
  children: React.ReactNode
  title: string
  closeHandler: () => void
}
const ModalWrapper = ({ title, children, closeHandler }: IModalWrapperProp) => {
  return (
    <div
      className="bg-black bg-opacity-30 fixed inset-0 z-10 flex items-center justify-center"
      // onClick={closeHandler}
    >
      <div className='max-md:p-3 w-full md:w-lg md:max-w-lg xl:w-2xl xl:max-w-2xl rounded-md overflow-x-hidden z-20 max-h-[95vh]'>
        <div className="flex items-center justify-between bg-main py-4 px-3">
          <h2 className='text-white text-2xl'>{title}</h2>
          <button
            className='text-white text-2xl'
            type='button'
            onClick={closeHandler}
            aria-label='close'
          >
            <CloseRoundedIcon className='text-4xl hover:bg-black rounded-[50%] hover:bg-opacity-10 p-1 duration-200'/>
          </button>
        </div>
        <div className="bg-white p-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper