
'use client'
import Table from '@/components/Table';
import { Typography } from '@/components/typography'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { tableData, tableHeader } from '@/constant/data'
import { TableDataProps } from '@/components/Table/index.types';
export default function Page() {

  return (
    <div className='bg-[#F8FBFF] h-full p-3'>
      <Typography variant='p-l' className='mb-2' font='Satoshi' fontWeight='bold' color="cod-gray-950">Card Request</Typography>
      <Typography variant='c-s' font='Satoshi' fontWeight='light' color="cod-gray-50">View and attend to card requests here.</Typography>
      <div className=' mt-2 border-b-[.2px] border-gray-400'></div>
      <div className="flex items-center border border-gray-300 rounded-md bg-white px-2 py-[6px] w-full mt-2 max-w-xs">
        <FiSearch className="text-gray-500 mr-2" size={18} />
        
        <input
          type="text"
          placeholder="Search by branch"
          className="w-full placeholder:text-[12px] placeholder:text-[#808080] bg-transparent outline-none placeholder:font-satoshi placeholder:font-light text-gray-700"
        />
      
        
      </div>
      <div className=' mt-2 border-b-[.2px] border-gray-400'></div>
      <div className='mt-2'>
      <Table tableData={tableData} tableHeader={tableHeader}/>
      </div>
    
    </div>
  )
}