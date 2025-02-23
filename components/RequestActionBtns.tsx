import React from 'react'
import { Typography } from './typography'
import Image from 'next/image';
import { ClipLoader } from "react-spinners";
import { RequestActionBtnsProps } from './Cards/index.types';
import { useStateContext } from '@/app/contexts/StateProvider';

const RequestActionBtns = ({icon,text,bgColor,hoverColor,onClick}:RequestActionBtnsProps) => {
 
  return (
    <div onClick={onClick} className={`cursor-pointer flex w-max rounded-sm px-3 py-2 items-center space-x-2 ${bgColor} ${hoverColor} `}>
       
     { icon === "loading" ?<ClipLoader size={20} color="white" /> : <Image src={icon} alt="Icon" width={15} height={15} />}
      <Typography variant='p-m' className='text-[#ffffff]' font='Satoshi' fontWeight='regular' color="cod-gray-950">{text}</Typography>
    </div>
  )
}

export default RequestActionBtns
