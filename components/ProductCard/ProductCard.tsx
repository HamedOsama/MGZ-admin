import React from 'react'
import Image from 'next/image'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import env from '../../API/ApiUrl';
import IProduct from '../../interfaces/IProduct';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-hot-toast';


interface IProductCardProps {
  product: IProduct
}
const ProductCard = ({ product }: IProductCardProps) => {
  const { _id, name, images, sellPrice, category, description, brand, quantity, rate, properties } = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({
      _id,
      name,
      images,
      sellPrice,
      category,
      availableQuantity: quantity,
      quantity: 1
    }))
    toast.success('Added to cart Successfully!',{
      position : 'top-center',
    })
  }
  return (
    // <Link href={`/product/${_id}`}>
    <div className="w-full h-full relative group  rounded-md overflow-hidden  duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
      <Link href={`/shop/${_id}`} className="relative group inline-block w-full h-full">
        <div className="overflow-hidden aspect-w-5 aspect-h-4 bg-[#f6f6f6]">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              className="object-cover w-3/4 h-3/4 transition-all duration-300 group-hover:scale-110"
              src={`${env.ImageUrl}${images[0]}`}
              alt={name}
              width={515}
              height={515}

            />
          </div>
        </div>
        <div className="absolute left-3 top-3">
          <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
        </div>
        <div className="h-full w-full flex items-start justify-between space-x-4 bg-white">
          <div className='px-4 py-5'>
            <p className='text-xs sm:text-sm font-bold text-gray-400'>{category}</p>
            <p className="text-xs font-bold my-3 text-gray-900 sm:text-sm md:text-base">
              {/* <a href="#" title=""> */}
              {name}
              <span className="absolute inset-0" aria-hidden="true"></span>
              {/* </a> */}
            </p>
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">{sellPrice} EGP</p>

          </div>

          {/* <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$99.00</p>
                    </div> */}
        </div>

      </Link>
      <div className="absolute -bottom-16 group-hover:bottom-0 duration-300 w-full left-0" onClick={addToCartHandler}>
        <button type='button' className="bg-black text-white w-full p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 flex items-center justify-center gap-2">
          <LocalMallOutlinedIcon className='text-white' />
          <span>Add to cart</span>
        </button>
      </div>
    </div>

    // </Link>
  )
}

export default ProductCard