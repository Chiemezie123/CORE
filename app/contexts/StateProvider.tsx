"use client";
import { ActionLoadingState } from "@/components/Cards/index.types";
import { TableDataProps } from "@/components/Table/index.types";
import { createContext, useContext, useState, ReactNode } from "react";
import { StateContextType } from "./index.types";




const StateContext = createContext<StateContextType | undefined>(undefined);


export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TableDataProps | null>(null);
const [isActionLoading, setIsActionLoading]= useState<ActionLoadingState>({
        progressLoading:false,
        dispatchLoading:false,
        downloadLoading:false,
        readyLoading:false,
        acknowledgeLoading:false
    })
    const [modalOpen, setModalOpen] = useState(false);
    const [dataIndex, setDataIndex] = useState(0)
  return (
    <StateContext.Provider value={{ data,dataIndex, setDataIndex, setData,isActionLoading, setIsActionLoading,modalOpen,setModalOpen }}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
