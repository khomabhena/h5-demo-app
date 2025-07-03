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
          <Icons image={'/loan.svg'} name={'Loan Center'} />
          <Icons image={'/market.svg'} name={'Market'} />
          <Icons image={'/insurance.svg'} name={'Insurance'} />
        </Card>
          
        <Card name={'Life service'}>
          <Icons image={'/bill-payment.svg'} name={'Bill Payments'} />
          <Icons image={'/city.svg'} name={'City Service'} />
          <Icons image={'/medicine.svg'} name={'Medicine'} />
          <Icons image={'/rent.svg'} name={'Rent'} />
          <Icons image={'/donation.svg'} name={'Donation'} />
          <Icons image={'/food-delivery.svg'} name={'Food'} />
          <Icons image={'/multimedia.svg'} name={'Multimedia'} />
          <Icons image={'/h5.svg'} name={'H5'} />
        </Card>

        <Card name={'Transportation'}>
          <Icons image={'/taxi.svg'} name={'Taxi'} />
          <Icons image={'/bus.svg'} name={'Bus'} />
          <Icons image={'/hotel.svg'} name={'Hotel'} />
          <Icons image={'/air-ticket.svg'} name={'Air Ticket'} />
          <Icons image={'/train-ticket.svg'} name={'Train Ticket'} />
          <Icons image={'/subway.svg'} name={'Subway'} />
        </Card>
      </div>

      <BottomDrawer />
    </div>
    </>
  )
}

export default Container
