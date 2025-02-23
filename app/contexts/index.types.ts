import { ActionLoadingState } from "@/components/Cards/index.types";
import { TableDataProps } from "@/components/Table/index.types";


export interface StateContextType {
  data: TableDataProps | null;
  setData: (data: TableDataProps) => void;
  isActionLoading:ActionLoadingState;
  setIsActionLoading:React.Dispatch<React.SetStateAction<ActionLoadingState>>
  modalOpen:boolean;
  setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,
  dataIndex:number, 
  setDataIndex:React.Dispatch<React.SetStateAction<number>>
}