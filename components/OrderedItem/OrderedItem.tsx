import React from 'react';

import Image from 'next/image';
import env from '../../API/ApiUrl';
import { useRouter } from 'next/router';

interface IOrderedItem {
  image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  _id: string;
}
const OrderedItem = ({ item }: { item: IOrderedItem }) => {
  const { image, name, category, price, quantity, _id } = item;
  const router = useRouter();
  return (
    <div
      className='group p-4 flex max-sm:gap-4 items-center justify-start sm:justify-between w-full border-2 rounded-md cursor-pointer'
      onClick={() => router.push(`/shop/${_id}`)}
    >
      <div className="min-w-[64px] w-16 sm:w-2/6">
        <Image
          src={env.ImageUrl + image}
          alt="product"
          width={200}
          height={200}
          className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out mix-blend-multiply'
        />
      </div>
      <div className="dataContainer flex-1">
        <p className="sm:font-bold text-base sm:text-xl">{name}</p>
        <p className='text-gray-700'>{category}</p>
        <div className="grid grid-cols-2 gap-1">
          <p className="text-sm sm:text-base font-bold">Price</p>
          <p>{price}</p>
          <p className="text-sm sm:text-base font-bold">Quantity</p>
          <p>{quantity}</p>
        </div>
      </div>
    </div>

  )
}

export default OrderedItem