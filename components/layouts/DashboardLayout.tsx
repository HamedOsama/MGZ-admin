import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar';
import Overlay from '../Overlay/Overlay';

interface IDashboardLayoutProp {
  children: React.ReactNode
}
const DashboardLayout = ({ children }: IDashboardLayoutProp) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='overflow-x-hidden bg-[#ecebeb] min-h-screen'>
      <Navbar isOpen={isOpen} sidebarHandler={setIsOpen} />
      {isOpen && <Overlay
        props={{
          onClick: () => setIsOpen(false)
        }}
        style='top-16'
      />
      }
      <Sidebar isOpen={isOpen} />
      <div className="px-2 py-4 md:p-8 xl:p-10">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout