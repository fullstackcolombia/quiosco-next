'use client'
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function CategoryIcon ({ category }: { category: Category }) {
  const params = useParams<{ category: string }>()
  return (
    <div
      className={`${
        params.category === category.slug ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className='relative w-16 h-16'>
        <Image src={`/icon_${category.slug}.svg`} alt={category.name} fill />
      </div>
      <Link href={`/order/${category.slug}`} className='text-xl font-bold'>
        {category.name}
      </Link>
    </div>
  )
}
