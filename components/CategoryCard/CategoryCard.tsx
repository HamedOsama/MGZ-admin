import Image from 'next/image'
import {useState} from 'react'
import MainButton from '../MainButton/MainButton'
import { useRouter } from 'next/router'

interface CategoryCardProps {
  title: string
  image: string
  color?: string
}
const CategoryCard = ({ title, image, color = "black" }: CategoryCardProps) => {
  const [hover , setHover] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop?category=${title}`)
  }
  return (
    <div className='w-full h-full max-h-64 sm flex justify-center items-center relative rounded-md overflow-hidden cursor-pointer'
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={handleClick}
    >
      <Image
        src={image}
        alt={title}
        width={375}
        height={425}
        objectFit='cover'
        layout='cover'
        className={`w-full h-full object-cover ${hover ? 'scale-110 rotate-2' : 'scale-100 rotate-0'} transition-all duration-300 ease-in-out transform}`}
      />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-4 bg-white bg-opacity-40">
      <p className={`text-${color} text-2xl text-center sm:text-3xl font-bold`}>{title}</p>
      <MainButton bg={`bg-${color}`}>Shop</MainButton>
      </div>
    </div>
  )
}

export default CategoryCard