import { Film, Home, Search, SquarePlus } from 'lucide-react'
import React from 'react'

export default function MobileMenu() {
  return (
    <div className='fixed bottom-0 bg-gray-100 w-full border-t border-gray-300 p-4 block md:hidden'>
      <div className='flex items-center justify-between '>
        <Home/>
        <Search/>
        <SquarePlus/>
        <Film/>
        <Home/>

      </div>
    </div>
  )
}
