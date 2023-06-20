import React from 'react'

interface ITableItemProp {
  children: React.ReactNode
  category: string
}
const TableItem = ({ children , category}: ITableItemProp) => {
  let style = "";
  switch (category) {
    case 'description':
      style = "max-w-[150px] truncate"
      break;
    default:
      break;
  }
  return (
    <td className={`px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center ${style}`}>
      {children}
    </td>
  )
}

export default TableItem