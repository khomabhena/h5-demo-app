import React from 'react'
import { Link } from 'react-router-dom'

const IconsNavigation = ({image, name, active}) => {
  return (
    <div className={active ? ' flex text-blue-400 flex-col items-center' : ' flex text-gray-400 flex-col items-center'}>
      <img className=' w-8' src={image} alt="" />
      <p className=' text-sm text-center font-medium text-gray-500'>{name}</p>
    </div>
  )
}

export default IconsNavigation
