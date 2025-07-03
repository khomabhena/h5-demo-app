import React from 'react'
import IconsNavigation from './IconsNavigation'

const BottomDrawer = () => {
  return (
    <div className=' absolute shadow-2xl shadow-teal-900 bottom-0 left-0 right-0 min-h-12 bg-white'>
        <div className=' grid grid-cols-4 justify-start gap-2 my-4'>
            <IconsNavigation active={true} name={'Home'} image={'./home.svg'}>
            
            </IconsNavigation>
            <IconsNavigation name={'Service'} image={'./service.svg'}>
            </IconsNavigation>
            <IconsNavigation name={'Nearby'} image={'./nearby.svg'}>
                
            </IconsNavigation>
            <IconsNavigation name={'Account'} image={'./person.svg'}>
              
            </IconsNavigation>
        </div>
    </div>
  )
}

export default BottomDrawer
