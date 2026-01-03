
import { Product } from '@/libs/data'
import React from 'react'

const ProductCard = (product: {product: Product}) => {
  return (
    <div className='border border-gray-300 rounded-lg p-4'>
      <img 
        src={product.product.images[0]} 
        alt={product.product.title} 
        className='w-full h-48 object-cover object-center mb-4 rounded-md' 
      />
      <h2 className='text-xl font-semibold mb-2'>{product.product.title}</h2>
      <p className='text-gray-600 mb-4'>{product.product.description}</p>
      <p className='text-lg font-bold'>${product.product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard