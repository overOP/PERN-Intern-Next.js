import { iconProps } from '@/types/notification'
import Image from 'next/image'
import React from 'react'

const IconNotification = ({icon} : iconProps) => {

  return (
    <>
        <Image
            src={icon}
            alt="Icon"
            width={24}
            height={24}
        />
    </>
  )
}

export default IconNotification