import SmallLoader from '@components/loaders/SmallLoader';
import React from 'react'
import { RotatingLines } from 'react-loader-spinner';

interface IButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: string;
}
const Button = ({ type, ariaLabel, children, onClick, style }: IButton) => {
  const [loading, setLoading] = React.useState(false)

  const handleClick = () => {
    setLoading(true)
    onClick && onClick()
  }
  return (
    <button className={`rounded-md ease-in duration-100 flex flex-row items-center justify-center text-[14px] ${style}`}
      type={type}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {loading ?
        <RotatingLines
          strokeColor="grey"
          strokeWidth="4"
          animationDuration="0.75"
          width="25"
          visible={true}
        />
        : children}
    </button>
  )
}

export default Button