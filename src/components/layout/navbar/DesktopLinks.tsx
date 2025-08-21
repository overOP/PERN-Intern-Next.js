import { Button } from '@/components/ui/button'
import { desktopProps } from '@/types/navbar'
import React from 'react'

const DesktopLinks = ({text} : desktopProps) => {
  return (
    <div className='hidden md:block lg:flex items-center Space'>
        <ul className='flex items-center gap-8'>
            <Button className='text-text1 hover:text-text2 transition-colors duration-300'>{text}</Button>
        </ul>
    </div>
  )
}

export default DesktopLinks