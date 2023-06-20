import React from 'react';
import Product from '../ProductCard/ProductCard';
import IProduct from '../../interfaces/IProduct';


interface ProductsProps {
  products: IProduct[]
}
const ProductCard = ({ products }: ProductsProps) => {
  return (
    <section className="py-4 sm:py-8 lg:py-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className=" mx-auto ">
          {/* <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Laptops</h2> */}
          {/* <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4 items-stretch">
          {products.map((product, index) => (
            <Product key={index} product={product}  />
          ))
          }
        </div>
      </div>
    </section>

  )
}
export default ProductCard;