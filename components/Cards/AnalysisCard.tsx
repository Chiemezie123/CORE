import React from 'react'
import { Typography } from '../typography'
import { AnalysisCardProps } from './index.types'
import { GreenArrow } from '@/assets/svg2'

export default function AnalysisCard(props:AnalysisCardProps) {
  return (
    <div className='rounded-[10px] h-[110px] border border-[#E2E2E2] bg-white pt-[12px] pr-[20.5px] pb-[17px] pl-[12px] flex flex-col flex-1'>
        <div>
        {props.icon}
        </div>
        <div className='flex mt-[4px]'>
            <Typography variant="p-m" color="black-200" font="Satoshi" fontWeight="medium">{props.title}</Typography>
        </div>
        <div className='flex justify-between w-full mt-[11px]'>
            <div>
                <Typography variant="h-l" font="Satoshi" fontWeight="bold" color="cod-gray-950" className="leading-normal">
                {props.Numbers}
                </Typography>
            </div>
            <div className='flex items-center gap-[8px]'>
               {props.isWhich === "icon" && (
                <div>
                    {props.icon2}
                </div>
               )}
              {props.isWhich === "rate" && (
                <div className='inline-flex p-[1px_7px_1px_6px] justify-center items-center gap-1 bg-[#EFFAF6] rounded-[4px]'>
                    <div>
                        <GreenArrow/>
                    </div>
                    <div>
                   <Typography color="green-haze-900" variant="p-s" font="Satoshi" fontWeight="regular" className='mxl:font-regular'>
                   {props.rating}
                   </Typography>
                    </div>
                </div>
               )}
                <div>
                  <Typography color={`${props.isWhich === "rate"?"black-200":"tahiti-gold-500"}`} variant="c-m" fontWeight="regular" className='mxl:font-regular'>
                  {props.event}
                  </Typography>
                </div>
            </div>
        </div>
    </div>
  )
}
