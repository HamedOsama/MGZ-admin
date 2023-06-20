import React from 'react'

interface IPageTitleProp {
  title: string
  total?: number
}
const PageTitle = ({ title, total }: IPageTitleProp) => {
  return (
    <div className="flex items-end gap-4 ">
      <h2 className='text-main text-2xl md:text-4xl border-b-4 rounded-md border-main w-fit'>{title}</h2>
      {total &&
        <span className="px-6 py-2 text-sm text-white bg-blue-300 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {total}
        </span>
      }
    </div>
  )
}

export default PageTitle