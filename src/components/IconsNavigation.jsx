import React from 'react'

const IconsNavigation = ({children, name, active}) => {
  return (
    <div className={active ? ' flex text-blue-400 flex-col items-center' : ' flex text-gray-400 flex-col items-center'}>
      {children}
      <p className=' text-[9px] text-center font-medium text-gray-500'>{name}</p>
    </div>
  )
}

export default IconsNavigation
