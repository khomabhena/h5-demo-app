import React from 'react'
import IconsNavigation from './IconsNavigation'

const BottomDrawer = () => {
  return (
    <div className=' absolute shadow-2xl shadow-teal-900 bottom-0 left-0 right-0 min-h-12 bg-white'>
        <div className=' grid grid-cols-4 justify-start gap-2 my-4'>
            <IconsNavigation name={'Home'} image={''}><span class="material-symbols-outlined">
home
</span></IconsNavigation>
            <IconsNavigation active={true} name={'Service'} image={''}>
                <span className=" material-symbols-outlined">api</span>
            </IconsNavigation>
            <IconsNavigation name={'Nearby'} image={''}>
                <span class="material-symbols-outlined">distance</span>
            </IconsNavigation>
            <IconsNavigation name={'Account'} image={''}>
            <span class="material-symbols-outlined">
person
</span>
            </IconsNavigation>
        </div>
    </div>
  )
}

export default BottomDrawer
