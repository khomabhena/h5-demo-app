import React from 'react'
import Card from './Card'
import Icons from './Icons'
import BottomDrawer from './BottomDrawer'

const Container = () => {
  return (
    <>
    <div className=' bg-gray-200 px-3 w-screen h-screen pt-8 relative'>
      <div className=' '>
        <h2 className=' font-bold text-2xl'>H5 Framework</h2>
        <Card name={'Financial service'}>
          <Icons image={'/icon-wallet.svg'} name={'Saving'} />
          <Icons image={'/icon-wallet.svg'} name={'Loan Center'} />
          <Icons image={'/icon-wallet.svg'} name={'Market'} />
          <Icons image={'/icon-wallet.svg'} name={'Insurance'} />
        </Card>
          
        <Card name={'Life service'}>
          <Icons image={'/icon-wallet.svg'} name={'Bill Payments'} />
          <Icons image={'/icon-wallet.svg'} name={'City Service'} />
          <Icons image={'/icon-wallet.svg'} name={'Medicine'} />
          <Icons image={'/icon-wallet.svg'} name={'Rent'} />
          <Icons image={'/icon-wallet.svg'} name={'Donation'} />
          <Icons image={'/icon-wallet.svg'} name={'Food Delivery'} />
          <Icons image={'/icon-wallet.svg'} name={'Zema Multimedia'} />
          <Icons image={'/icon-wallet.svg'} name={'H5 Application'} />
        </Card>

        <Card name={'Transportation'}>
          <Icons image={'/icon-wallet.svg'} name={'Taxi'} />
          <Icons image={'/icon-wallet.svg'} name={'Bus'} />
          <Icons image={'/icon-wallet.svg'} name={'Hotel'} />
          <Icons image={'/icon-wallet.svg'} name={'Air Ticket'} />
          <Icons image={'/icon-wallet.svg'} name={'Train Ticket'} />
          <Icons image={'/icon-wallet.svg'} name={'Subway'} />
        </Card>
      </div>

      <BottomDrawer />
    </div>
    </>
  )
}

export default Container
