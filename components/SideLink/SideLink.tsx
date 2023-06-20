import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface ISideLinkProp {
  href: string
  text: string
  
}

const SideLink = ({ text, href}: ISideLinkProp) => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <li className={`${path === href ? 'bg-main text-white' : 'bg-gray-100 text-main'} duration-300 hover:translate-y-1 mb-3`}>
      <Link href={href} className='text-center block p-2'>
        {text}
      </Link>
    </li>
  )
}

export default SideLink