import React from 'react'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import MiddleArea from './components/MiddleArea'

export default function App() {
  return (
   <div className='grid grid-cols-3'>
    <LeftSide/>
    <MiddleArea/>
    <RightSide/>
    
   </div>

  )
} 
