"use client"
import { navData } from '@/data/navdata'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DesktopLinks = () => {
  const pathname = usePathname()

  return (
    <div className='hidden md:flex items-center space-x-8 Space'>
      {navData.map(({ id, title, url }) => (
        <Link
          key={id}
          href={url}
          className={`text-button-xs ${
            pathname === url 
            ? "text-black dark:text-white" 
            : "text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          }`}
        >
          {title}
        </Link>
      ))}
    </div>
  )
}

export default DesktopLinks
