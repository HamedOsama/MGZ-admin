import React from 'react'

interface EliteStatusBoxProps {
  status: string
  type: string
}

const EliteStatusBox = ({ status, type }: EliteStatusBoxProps) => {
  const getBackgroundColor = () => {
    //users 
    if (status === '0' && type === 'user') return 'bg-red-500';
    if (status === '1' && type === 'user') return 'bg-emerald-100';
    // orders
    if (status === '-1' && type === 'order') return 'bg-red-100';
    if (status === '0' && type === 'order') return 'bg-gray-100';
    if (status === '1' && type === 'order') return 'bg-blue-100';
    if (status === '2' && type === 'order') return 'bg-emerald-100';
    //maintenances
    if (status === '-1' && type === 'maintenance') return 'bg-red-100';
    if (status === '0' && type === 'maintenance') return 'bg-gray-100';
    if (status === '1' && type === 'maintenance') return 'bg-blue-100';
    if (status === '2' && type === 'maintenance') return 'bg-yellow-100';
    if (status === '3' && type === 'maintenance') return 'bg-emerald-100';
    //products
    if (status === '0' && type === 'product') return 'bg-red-100';
    if (status === '1' && type === 'product') return 'bg-emerald-100';
  }
  const getTextColor = () => {
    //users 
    if (status === '0' && type === 'user') return 'red-500';
    if (status === '1' && type === 'user') return 'emerald-500';
    // orders
    if (status === '-1' && type === 'order') return 'red-500';
    if (status === '0' && type === 'order') return 'gray-600';
    if (status === '1' && type === 'order') return 'blue-500';
    if (status === '2' && type === 'order') return 'emerald-500';
    //maintenances
    if (status === '-1' && type === 'maintenance') return 'red-500';
    if (status === '0' && type === 'maintenance') return 'gray-600';
    if (status === '1' && type === 'maintenance') return 'blue-500';
    if (status === '2' && type === 'maintenance') return 'yellow-500';
    if (status === '3' && type === 'maintenance') return 'emerald-500';
    //products
    if (status === '0' && type === 'product') return 'red-500';
    if (status === '1' && type === 'product') return 'emerald-500';
  }
  const getStatusText = () => {
    //users 
    if (status === '0' && type === 'user') return 'Not Active';
    if (status === '1' && type === 'user') return 'Active';
    // orders
    if (status === '-1' && type === 'order') return 'Canceled';
    if (status === '0' && type === 'order') return 'Processing';
    if (status === '1' && type === 'order') return 'In Shipping';
    if (status === '2' && type === 'order') return 'Delivered';
    //maintenances
    if (status === '-1' && type === 'maintenance') return 'Canceled By Customer';
    if (status === '0' && type === 'maintenance') return 'Under Maintenance';
    if (status === '1' && type === 'maintenance') return 'Repaired';
    if (status === '2' && type === 'maintenance') return 'In Shipping';
    if (status === '3' && type === 'maintenance') return 'Delivered';
    //products
    if (status === '0' && type === 'product') return 'Not Active';
    if (status === '1' && type === 'product') return 'Active';
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${getBackgroundColor()} bg-opacity-60`}>
      <span className={`h-1.5 w-1.5 rounded-full bg-${getTextColor()}`}></span>
      <h2 className={`text-sm font-normal text-${getTextColor()}`}>{getStatusText()}</h2>
    </div>
  )
}

export default EliteStatusBox;