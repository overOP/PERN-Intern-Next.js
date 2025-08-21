import { Input } from '@/components/ui/input'
import { searchProps } from '@/types/navbar'
import React from 'react'

const SearchInput = ({onChange} : searchProps) => {
  return (
    <div className="w-full hidden lg:flex justify-center lg:justify-end lg:pr-20 2xl:pr-[35rem] p-2">
        <Input
            type="text"
            placeholder="Search products..."
            onChange={(e) => onChange(e.target.value)}
            className="px-3 py-1.5 border rounded-md focus:outline-none
            focus:ring-1 w-full max-w-xs transition-all duration-300"
        />
    </div>
  )
}

export default SearchInput