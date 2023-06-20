import Link from 'next/link'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  sidebarHandler: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
};

const Navbar = ({ sidebarHandler,isOpen }: IProps) => {
  const handleSidebar = () => {
    sidebarHandler(prev => !prev);
  }
  return (
    <nav className='h-16 px-8 flex justify-between items-center bg-main'>
      <Link href="/">
        <span className='text-white text-xl '>MGZ For Transportation</span>
      </Link>
      <div 
      className='p-2 flex items-center rounded-[50%] active:bg-white active:bg-opacity-20 cursor-pointer' 
      onClick={handleSidebar}
      >
        {isOpen ? 
          <CloseIcon className='text-white text-3xl' />
        :<MenuIcon className='text-white text-3xl' />
        }
      </div>
    </nav>
  )
}

export default Navbar