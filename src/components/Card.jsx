import React from 'react'
import Icons from './Icons'

const Card = ({children, name}) => {
  return (
    <div className=' bg-white rounded-xl px-3 py-3 mt-4'>
      <p className=' text-lx font-bold'>{name}</p>
      <div className=' grid grid-cols-4 justify-start gap-2 my-4'>
        {children}
      </div>
    </div>
  )
}

export default Card
