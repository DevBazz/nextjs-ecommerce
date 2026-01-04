
import { Product } from '@/libs/data'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='border border-gray-300 rounded-lg p-4 '>
      <div className='relative aspect-video'>
        <Image 
        src={product.images[0]} 
        alt={product.title} 
        className='object-cover'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' 
      />
      </div>
      <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
      <p className='text-gray-600 mb-4'>{product.description}</p>
      <p className='text-lg font-bold'>${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard