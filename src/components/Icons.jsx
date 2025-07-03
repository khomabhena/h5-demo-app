import React from 'react'

const Icons = ({name, image}) => {
  return (
    <div className=' flex flex-col items-center'>
      <img className=' w-12' src={image} alt="" />
      <p className=' text-lg text-center font-medium text-gray-700'>{name}</p>
    </div>
  )
}

export default Icons
