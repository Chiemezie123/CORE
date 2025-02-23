export interface TableDataProps{
    branch: string,
    initiator: string,
    quantity: number,
    batch: string,
    dateRequested: string,
    cardType:string,
    cardCharges:string,
    status: "Pending" | "Acknowledged" | "Ready" | "In Progress"
}

export interface TableHeaderProps{
    title:string,
    key:string
}

export interface TableProps{
    tableData:TableDataProps[];
    tableHeader:TableHeaderProps[]
    onclick?:(data:any)=>void
}