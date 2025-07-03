import React from 'react'

const Icons = ({name, image}) => {
  return (
    <a href={'https://appletree-mdu.vercel.app'}>
    <div className=' flex flex-col items-center'>
      <img className=' w-8' src={image} alt="" />
      <p className=' text-sm text-center font-medium text-gray-700'>K{name}</p>
    </div>
    </a>
  )
}

export default Icons
