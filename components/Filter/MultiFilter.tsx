import React from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

interface FilterProps {
  name: string
  options: {
    name: string
    count: number,
  }[]
  selected: any
  setSelected: any
  style?: string
}

const MultiFilter = ({ name, options, selected, setSelected, style }: FilterProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const onChangeHandler = (e: any) => {
    const { value , checked } = e.target
    if (checked) {
      setSelected(prev => [...prev, value])
    } else {
      setSelected(prev => prev.filter((item: any) => item !== value))
    }
  }
  return (
    <div className={`flex items-center justify-center p-4 relative ${style}`}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        data-dropdown-toggle="dropdown"
        className={` ${isOpen ? 'text-white bg-red-400' : 'text-black bg-white'} hover:bg-primary-800 focus:outline-none focus:shadow-focus-red font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center duration-150 `}
        type="button"
      >
        <span>Filter by {name}</span>
        <KeyboardArrowDownRoundedIcon />

      </button>

      {
        isOpen &&
        <div id="dropdown" className="absolute max-sm:left-0 top-16 z-10 w-56 p-3 bg-white rounded-md focus:shadow-focus ">
          <h6 className="mb-3 text-sm font-medium text-gray-900 ">
            {name[0].toUpperCase() + name.slice(1)}
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {options.map((option, index) => (
              <li className="flex items-center" key={index} >
                <input
                  className="h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-gray-100 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-red-500 checked:bg-red-500 checked:before:opacity-[0.06] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04]  focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12]  focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:shadow-main checked:focus:shadow-[0px_0px_0px_1px_main] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  type="checkbox"
                  value={option.name}
                  id={option.name}
                  onChange={onChangeHandler}
                  checked={selected.includes(option.name)}
                />

                <label htmlFor={option.name} className="ml-2 text-sm font-medium text-gray-900 ">
                  {option.name} ({option.count})
                </label>
              </li>
            ))
            }

          </ul>
        </div>
      }

    </div>

  )
}

export default MultiFilter