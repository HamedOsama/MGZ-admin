import React from 'react'

interface IProps {
  label: string
  name: string
  type: string
  placeholder: string
  onChange?: any
  onBlur?: any
  value?: any
  error?: any
}
const Input = ({ label, name, placeholder, type, onChange, onBlur, value, error }: IProps) => {
  return (
    <div className={`${error ? 'mb-1' : 'mb-4'}`}>
      <label htmlFor={name} className="block mb-2 text-sm text-gray-600 ">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${error ? 'border-red-200 focus:border-red-400  focus:ring-red-400' : 'border-gray-200 focus:border-blue-400  focus:ring-blue-400' }  rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  )
}

export default Input