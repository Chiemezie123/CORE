import { useStateContext } from '@/app/contexts/StateProvider';
import React, { useEffect, useRef, useState } from 'react'
import { Typography } from '../typography';
import RequestActionBtns from '../RequestActionBtns';
import icon from '../../assets/svg/Icon.svg'
import acknowledge from '../../assets/svg/acknowledge.svg'
import dispatch from '../../assets/svg/dispatch.svg'
import progress from '../../assets/svg/progress.svg'
import ready from '../../assets/svg/ready.svg'
import {ActionLoadingState, ButtonAction, ModalProps, RequestModalProps} from './index.types';

import StatusModal from '../modal/StatusModal';
import { tableData } from '@/constant/data';

const RequestCard: React.FC = () => {
    const { data, setData,dataIndex,setIsActionLoading, isActionLoading, modalOpen, setModalOpen } = useStateContext();
   const [modalState,setModalState]= useState<RequestModalProps>({
         statusText:"",
         status:"",
         buttonText:""
   });

   const modalRef = useRef<HTMLDivElement>(null);

   useEffect(()=>{
    const storedIndex = localStorage.getItem("dataIndex");
    
    if (storedIndex !== null) {
      const numericIndex = parseInt(storedIndex, 10);
      setData(tableData[numericIndex])
    }
  
   },[data]);

    const handleAction = (action: ButtonAction) => {
        switch (action) {
            case "progress":
                setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, progressLoading: true }))
                setTimeout(() => {
                    setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, progressLoading: false }))
                    setModalOpen(true)
                    setModalState((prev)=>({...prev,
                        status:"Successful",
                        statusText:"Successfully Marked as In Progress.",
                        buttonText:"Continue"
                    }))
                }, 3000)
               
                break;
            case "dispatch":
                setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, dispatchLoading: true }))
                setTimeout(() => {
                    setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, dispatchLoading: false }))
                    setModalOpen(true)
                    setModalState((prev)=>({...prev,
                        status:"Successful",
                        statusText:"Card batch successfully sent to dispatch.",
                        buttonText:"Continue"
                    }))
                }, 3000)
               
                break;
            case "download":
                setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, downloadLoading: true }))
                setTimeout(() => {
                    setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, downloadLoading: false }))
                    setModalOpen(true)
                    setModalState((prev)=>({...prev,
                        status:"Successful",
                        statusText:"Production file has been downloaded.",
                        buttonText:"Continue"
                    }))
                }, 3000)
              
                break;
            case "ready":
                setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, readyLoading: true }))
                setTimeout(() => {
                    setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, readyLoading: false }))
                    setModalOpen(true)
                    setModalState((prev)=>({...prev,
                        status:"Successful",
                        statusText:"Successfully marked as Ready.",
                        buttonText:"Continue"
                    }))
                }, 3000)
               
                break;
            case "acknowledge":
                setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, acknowledgeLoading: true }))
                setTimeout(() => {
                    setIsActionLoading((prev: ActionLoadingState) => ({ ...prev, acknowledgeLoading: false }))
                    setModalOpen(true)
                    setModalState((prev)=>({...prev,
                        status:"Successful",
                        statusText:"Successfully marked as Acknowledge.",
                        buttonText:"Continue"
                    }))
                }, 3000)
                
                break;
            default:
                console.warn(`Unknown action: ${action}`);
                break;
        }


    }
    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) 
        ) {
            console.log("amaherer")
           
                setModalOpen(false)
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            {modalOpen && <StatusModal {...modalState} modalRef={modalRef}/>}
             <div className="max-w-4xl  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                {/* Left Side */}
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Branch Name</label>
                        <input
                            type="text"
                            value={data && data.branch ? data.branch : ''}
                            readOnly
                            className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Card Type</label>
                        <input
                            type="text"
                            value={data && data.cardType ? data.cardType : ''}
                            readOnly
                            className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Quantity</label>
                        <input
                            type="text"
                            value={data && data.quantity ? data.quantity : ''}
                            readOnly
                            className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-800"
                        />
                    </div>
                    <div className='space-y-0'>
                        <Typography className="text-black mt-4 mb-2" color="cod-gray-950" variant="p-s" fontWeight='medium'>
                            Date Requested:


                        </Typography>
                        <Typography variant="p-m" className="text-[#101828]" fontWeight="regular">
                            {data && data.dateRequested ? data.dateRequested : ''}
                        </Typography>

                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Initiator</label>
                        <input
                            type="text"
                            value={data && data.initiator ? data.initiator : ''}
                            readOnly
                            className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Card Charges</label>
                        <input
                            type="text"
                            value={data && data.cardCharges ? data.cardCharges : ''}
                            readOnly
                            className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Batch</label>
                        <input
                            type="text"
                            value={data && data.batch ? data.batch : ''}
                            readOnly
                            className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-800"
                        />
                    </div>
                    <div className='space-y-0'>
                        <Typography className="text-black mb-2 " color="cod-gray-950" variant="p-s" fontWeight='medium'>
                            Status: </Typography>
                        <Typography variant="p-m" color='cod-gray-950' className={`px-3   py-[2px]  rounded-full w-max ${data &&
                            data.status === "Pending" ? "bg-[#F9FAFB] border border-[#EAECF0] text-[#344054]"
                            : data?.status === "Ready" ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] "
                                : data?.status === "In Progress" ? "text-[#B54708] bg-[#FFFAEB] border border-[#FEDF89]"
                                    : "bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3]"} `} fontWeight="regular">
                            {data && data.status}
                        </Typography>
                    </div>


                </div>

            </div>
            <Typography variant="p-m" className="text-[#344054] mt-6 mb-4" font="Satoshi" fontWeight="medium" color="cod-gray-950">
                Actions
            </Typography>
            <div className='flex justify-between items-center'>
                <RequestActionBtns onClick={() => handleAction("download")} hoverColor={"hover:bg-[#344054]"} bgColor={"bg-[#344054]/30"} icon={isActionLoading.downloadLoading ? "loading" : icon} text={"Download for Production"} />
                <RequestActionBtns onClick={() => handleAction("progress")} hoverColor={"hover:bg-[#B54708]"} bgColor={"bg-[#B54708]/30"} icon={isActionLoading.progressLoading ? "loading" : progress} text={"Mark as In Progress"} />
                <RequestActionBtns onClick={() => handleAction("ready")} hoverColor={"hover:bg-[#067647]"} bgColor={"bg-[#067647]/30"} icon={isActionLoading.readyLoading ? "loading" : ready} text={"Mark as Ready"} />
                <RequestActionBtns onClick={() => handleAction("dispatch")} hoverColor={"hover:bg-[#8020E7]"} bgColor={"bg-[#8020E7]/30"} icon={isActionLoading.dispatchLoading ? "loading" : dispatch} text={"Send to Dispatch"} />
                <RequestActionBtns onClick={() => handleAction("acknowledge")} hoverColor={"hover:bg-[#014DAF]"} bgColor={"bg-[#014DAF]/30"} icon={isActionLoading.acknowledgeLoading ? "loading" : acknowledge} text={"Mark as Acknowledged"} />
            </div>

        </div>
        </div>
        
    )
}

export default RequestCard
