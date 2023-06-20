import React from 'react'

interface IProps {
  children: React.ReactNode
}
const LoginLayout = ({children} : IProps) => {
  return (
    <div className="  bg-blue-400">
    <div className="flex justify-center h-screen max-md:py-16 md:p-16 xl:px-32">
      <div className="hidden bg-cover lg:block lg:w-1/2 xl:w-7/12 rounded-l-md overflow-hidden"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}
      >
        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">MGZ For Transportation</h2>
          </div>
        </div>
      </div>
      {children}
    </div>
  </div>
  )
}

export default LoginLayout