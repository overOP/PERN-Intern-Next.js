import { textProps } from '@/types/shopnow'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const Shop = ({text} : textProps) => {
  return (
    <div className='flex group items-center'>
        <p className='text-button-xs Inter'>{text}</p>
        <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
    </div>
  )
}

export default Shop