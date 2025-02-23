import React from 'react'
import { Typography } from '../typography'
import RequestCard from './RequestCard'

const CardRequestDetails = () => {
    
  return (
    <div className='bg-[#FFFFFF] mt-2 h-max rounded-lg p-[12px] w-full border border-[#E2E2E2]' >
      <Typography variant='p-m' className='mb-2 text-[#121212]' font='Satoshi' fontWeight='regular' color="cod-gray-950">Card Request Details</Typography>
      <RequestCard/>
    </div>
  )
}

export default CardRequestDetails
