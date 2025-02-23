"use client"
import React from 'react'
import { TableDataProps, TableProps } from './index.types'
import { useRouter } from 'next/navigation';
import { useStateContext } from '@/app/contexts/StateProvider';


const Table = ({tableData,tableHeader}:TableProps) => {
    const router = useRouter();
    const { setData } = useStateContext();
  const handleView = (data:TableDataProps,index:number ) =>{
    router.push(`/dashboard/RequestDetails`);
    setData(data);
    localStorage.setItem("dataIndex", index.toString());
    
 }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100 text-[#475467]">
          <tr>
            {
              tableHeader.map((header)=>( <th key={header.key} className="px-4 border-gray-300 font-normal border-r py-2 text-center">{header.title}</th>))
            }
           
            
          </tr>
        </thead>
        <tbody className="bg-white">
          {tableData.map((row, index) => (
            <tr key={index} className="border-t border-gray-300 text-[#475467]">
              <td className="px-4  text-sm font-extralight pl-6 border-gray-200 border-r py-2">{row.branch}</td>
              <td className="px-4 text-sm font-extralight pl-20 border-gray-200 border-r py-2">{row.initiator}</td>
              <td className="px-4 text-sm font-extralight text-center border-gray-200 border-r py-2">{row.quantity}</td>
              <td className="px-4 text-sm font-extralight pl-10 border-gray-200 border-r py-2">{row.batch}</td>
              <td className="px-4 text-sm font-extralight pl-10 border-gray-200 border-r py-2">{row.dateRequested}</td>
              <td className="px-4 text-center text-sm font-normal border-gray-200 border-r py-4">
                <span
                  className={`px-3 py-2 rounded-full  text-sm ${
                    row.status === "Ready"
                      ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
                      : row.status === "In Progress"
                      ? "text-[#B54708] bg-[#FFFAEB] border border-[#FEDF89]"
                      : row.status === "Pending"
                      ? "bg-[#F9FAFB] border border-[#EAECF0] text-[#344054]"
                      : "bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3]"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <button onClick={()=>{handleView(row,index)}} className=" text-[#014DAF] px-3 py-1 text-sm ">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
