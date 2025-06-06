import { formatCurrency, getImagePath } from '@/src/utils'
import { Product } from '@prisma/client'
import Image from 'next/image'
import AddProductButton from './AddProductButton'

export default function ProductCard ({ product }: { product: Product }) {
  return (
    <div className='border bg-white'>
      <Image
        src={getImagePath(product.image)}
        alt={product.name}
        width={400}
        height={500}
        quality={50}
      />
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{product.name}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatCurrency(product.price)}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  )
}
