import Image from 'next/image'
import React from 'react'
import success from '../../assets/svg/greenCheck.svg'
import { Typography } from '../typography'
import { useStateContext } from '@/app/contexts/StateProvider'
import { StatusModalProps } from './index.types'

const StatusModal = ({statusText,status,buttonText,modalRef}:StatusModalProps) => {
    const {setModalOpen}=useStateContext()
    const handleModalClose =()=>{
        setModalOpen(false)
    }
    return (
        <div className='bg-[#000000] bg-opacity-50 w-full h-full fixed top-0 left-0 z-50'>
            <div ref={modalRef} className='bg-[#ffffff] p-4 rounded-md w-[400px] h-[232px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                <div className='rounded-md border border-[#E2E2E2] w-[40px] h-[40px] flex items-center justify-center bg-white'>
                    <Image src={success} alt='Success' width={20} height={20} />
                </div>
                <Typography variant='h-m' className='mt-4 text-[#121212]' font='Satoshi' fontWeight='medium' color="cod-gray-950">{status}</Typography>
                <Typography variant='p-m' className='mt-2 text-[#121212]' font='Satoshi' fontWeight='regular' color="cod-gray-950">{statusText}</Typography>
                <div onClick={handleModalClose} className='flex justify-start mt-12 w-max'>
                    <button className='bg-[#014DAF] text-white rounded-md px-4 py-2'>{buttonText}</button>
                    </div>
            </div>
        </div>

    )
}

export default StatusModal
