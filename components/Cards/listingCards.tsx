import React from 'react'
import { Typography } from '../typography'
import ArrowRight from '@/assets/svg2/ArrowRight'
import { ListingCardsProps } from './index.types';

export default function ListingCards(props:ListingCardsProps) {
  return (
    <div className='flex h-[45px] pt-[9px]  pb-[8px] pl-[16px] items-center gap-4 rounded-[4px] bg-[#F1F7FF] flex-1'>
        <div className='bg-[#014DAF] w-[28px] h-[28px]  flex items-center justify-center rounded-full'>
            {props.CardS}
        </div>
        <div className='flex items-center gap-[5px]'>
            <Typography variant="p-m" font="Satoshi" fontWeight="medium" className="leading-normal" color="cod-gray-950">
            {props.title}
            </Typography>
            <ArrowRight/>
        </div>
    </div>
  )
}
