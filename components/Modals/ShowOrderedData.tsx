import React from 'react'
import ModalWrapper from '@components/wrappers/ModalWrapper'
import OrderedItem from '@components/OrderedItem/OrderedItem'
import env from '../../API/ApiUrl'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ShowOrderedDataProps {
  data: any[]
  title?: string
}
const notShow = ['password', 'state', 'city', 'address', 'zipCode', '__v', '_id', '__typename', 'tokens', 'resetLink', 'image', 'street', 'floor', 'apartment', 'building']
const ShowOrderedData = ({ data, title }: ShowOrderedDataProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer"
      >
        {title || 'Show Data'}
      </div>
      {showModal &&
        (
          <ModalWrapper
            closeHandler={() => setShowModal(false)}
            title='Buyer Information'
          >
            <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
              {
                data.map((item) => {
                  return item.product ?
                    (
                      <Link
                        className='group p-4 flex gap-4 items-center justify-start sm:justify-between w-full border-2 rounded-md cursor-pointer'
                        href={`https://kit-hardware-center.com/shop/${item?.product?._id}`}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <div className="min-w-[64px] w-16 sm:w-2/6">
                          <Image
                            src={env.ImageUrl + item?.product?.images[0]}
                            alt="product"
                            width={200}
                            height={200}
                            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out mix-blend-multiply'
                          />
                        </div>
                        <div className="dataContainer flex-1">
                          <p className="sm:font-bold text-base sm:text-lg">{item?.product?.name}</p>
                          <div className="grid grid-cols-2 gap-1">
                            <p className="text-sm sm:text-base font-bold">Category</p>
                            <p className='text-gray-700'>{item?.product?.category}</p>
                            <p className="text-sm sm:text-base font-bold">Price</p>
                            <p>{item?.product?.sellPrice}</p>
                            <p className="text-sm sm:text-base font-bold">Ordered Quantity</p>
                            <p>{item?.quantity}</p>

                            <p className="text-sm sm:text-base font-bold">Available Quantity</p>
                            <p>{item?.product?.quantity}</p>

                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-8 border border-gray-500 rounded-md">
                        Product has been deleted
                      </div>
                    )
                })
              }
            </div>
          </ModalWrapper>
        )
      }
    </>

  )
}

export default ShowOrderedData;