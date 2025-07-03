import React from 'react'

const Icons = ({name, image}) => {
  return (
    <div className=' flex flex-col items-center'>
      <img className=' w-6' src={image} alt="" />
      <p className=' text-[9px] text-center font-medium text-gray-700'>{name}</p>
    </div>
  )
}

export default Icons
