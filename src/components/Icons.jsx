import React from 'react'

const Icons = ({name, image, link}) => {
  return (
    <a href={link == null ? '' : link}>
    <div className=' flex flex-col items-center'>
      <img className=' w-8' src={image} alt="" />
      <p className=' text-sm text-center font-medium text-gray-700'>{name}</p>
    </div>
    </a>
  )
}

export default Icons
