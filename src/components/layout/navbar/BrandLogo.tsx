import Link from 'next/link'
import React from 'react'

const BrandLogo = () => {
  return (
    <Link href="/" className='flex text-h6 Poppins tracking-wider mr-[10rem] md:mr-5 dark:text-white'>
      3legant <span className='text-gray-500 dark:text-gray-400'>.</span>
    </Link>
  )
}

export default BrandLogo