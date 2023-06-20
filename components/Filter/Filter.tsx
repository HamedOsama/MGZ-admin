import React from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
interface FilterProps {
  name: string
  options: any[]
  selected : any
  setSelected : any
  style?: string
}

const Filter = ({ name, options, style ,selected ,setSelected}: FilterProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <div
      // onClick={(e)=> {
      //   console.log(e.target)
      // }}
      // onBlur={() => setIsOpen(_ => false)}
      className='flex gap-2 items-center'
    >
      <p className='text-black py-2'>{name}</p>
      <div
        onFocus={() => setIsOpen(_ => true)}
        onBlur={
          () => {
            setTimeout(() => {
              setIsOpen(_ => false)
            }, 125)
          }
        }
        className="relative"
      >
        <button
          type='button'
          className={`${style} flex items-center justify-between gap-6 bg-white rounded-md px-2 py-1 duration-150 focus:shadow-focus-red`}>
          <span>{selected.value}</span>
          <KeyboardArrowDownRoundedIcon />
        </button>
        {isOpen &&
          <ul className={`absolute top-9 mt-[2px] bg-white ${style}`}>
            {
              options.map((option, index) => (
                <li onClick={() => setSelected(_ => option)}  key={option.value} className='flex justify-between items-center bg-white px-4 py-2 cursor-pointer duration-150 hover:bg-red-500 hover:bg-opacity-20 hover:text-red-600  '>
                  <span>{option.value}</span>
                  {selected.value === option.value &&
                    <div className='w-5 h-5 bg-red-500 rounded-[50%] flex items-center justify-center'>
                      <CheckRoundedIcon className='text-white text-xs' />
                    </div>
                  }
                </li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default Filter