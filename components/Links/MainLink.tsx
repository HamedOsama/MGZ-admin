import Link from 'next/link'
import React from 'react'

interface IMainLinkProp {
  children: React.ReactNode
  href : string
  bg : string
  style ?: string
  rest ?: any
}
const MainLink = ({children, href, bg , style="px-6 py-1",rest} : IMainLinkProp) => {
  return (
    <Link 
    href={href}
    className={`flex items-center ${bg} text-white rounded-md ${style}`} 
    {...rest}
    >
      {children}
    </Link>
  )
}

export default MainLink