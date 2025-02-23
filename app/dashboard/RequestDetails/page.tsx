"use client"
import { useStateContext } from '@/app/contexts/StateProvider';
import CardRequestDetails from '@/components/Cards/CardRequestDetails';
import { Typography } from '@/components/typography'
import React from 'react'

const RequestDetails = () => {
    
  return (
    <div className='bg-[#F8FBFF] h-full p-3'>
       <Typography variant='p-l' className='mb-2' font='Satoshi' fontWeight='bold' color="cod-gray-950">Request Details</Typography>
       <Typography variant='c-s' font='Satoshi' fontWeight='light' color="cod-gray-50">Perform predetermined actions on card requests here.</Typography>
       <CardRequestDetails/>
    </div>
  )
}

export default RequestDetails
