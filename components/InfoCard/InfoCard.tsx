import React from 'react';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { useRouter } from 'next/router';

interface IInfoCardProp {
  title: string
  value: string
  Icon: React.ReactNode
  bg: string
  link?: string
}
const InfoCard = ({ title, value, Icon, bg, link }: IInfoCardProp) => {
  const router = useRouter();
  const handleClick = () => {
    if (link)
      router.push(link)
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex items-center justify-between p-3'>
        <p className='text-main text-xl font-semibold'>{value}</p>
        {Icon}
      </div>
      <p className='text-gray-600 py-2 px-3'>{title}</p>
      <div className={`flex items-center justify-between px-2 py-3 cursor-pointer ${bg}`} onClick={handleClick}>
        <p className='text-white'>See Details</p>
        <ArrowRightAltRoundedIcon className='text-white' />
      </div>
    </div>
  )
}

export default InfoCard