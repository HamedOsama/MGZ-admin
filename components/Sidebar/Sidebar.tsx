import React from 'react'
import ProfileImage from '../ProfileImage/ProfileImage'
import Profile from '../Profile/Profile'
import SideLink from '../SideLink/SideLink'
import axios from 'axios'
import env from '../../API/ApiUrl'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

axios.defaults.withCredentials = true
interface ISidebarProp {
  isOpen: boolean
}
const Sidebar = ({ isOpen }: ISidebarProp) => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get(`${env.API_URL}/admin/logout`)
      router.push('/login')
      toast.success('Logged out Successfully!', {
        icon: '👋',
        position: 'top-right'
      })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className={`
    bg-slate-200 w-72 h-[calc(100vh-4rem)] float-right duration-300 ease-in-out
      fixed right-0 z-10
    ${isOpen ? 'translate-x-0' : 'translate-x-72'}
    `}>
      <Profile />
      <ul className='p-3'>
        <SideLink text='Dashboard' href='/' />
        <SideLink text='Stations' href='/stations' />
        <li onClick={logoutHandler} className='w-full text-left text-slate-500 hover:text-slate-600 focus:outline-none duration-300'>
          <button type='button' className='w-full flex items-center justify-center p-2 my-2  hover:bg-gray-300 bg-gray-100 focus:outline-none duration-300'>
            <span className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </span>
            <span className='ml-2'>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar