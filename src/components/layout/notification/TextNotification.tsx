import { textProps } from '@/types/notification'
import React from 'react'

const TextNotification = ({text} : textProps) => {
  return (
    <div>
        <p className='text-text6 Inter'>{text}</p>
    </div>
  )
}

export default TextNotification