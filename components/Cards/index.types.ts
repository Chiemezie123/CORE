export interface ListingCardsProps {
    title: String;
    CardS: React.ReactNode
}

export interface AnalysisCardProps {
    icon: React.ReactNode;
    title: String;
    Numbers: String
    isWhich: "icon" | "rate";
    rating: String;
    event: String;
    icon2: React.ReactNode;
}
export interface RequestActionBtnsProps {
    icon: string;
    text: string;
    bgColor: string;
    hoverColor: string;
    onClick: () => void
}
export interface ActionLoadingState {
    progressLoading: boolean;
    dispatchLoading: boolean;
    downloadLoading: boolean;
    readyLoading: boolean;
    acknowledgeLoading: boolean;
};
export type ButtonAction = "progress" | "dispatch" | "download" | "ready" | "acknowledge";


export type RequestModalProps = {
    statusText: string;
    status: string;
    buttonText: string;
}
export type ModalProps = {
   
    icon : React.ReactNode;
    title:String;
    Numbers:String
    isWhich : "icon" | "rate";
    rating:String;
    event:String;
    icon2:React.ReactNode;
}


export interface ReqCardProps {
    branch:String;
    cardType:string;
    quantity:string;
    status:string;
    action:string;
    isStatus?:"Pending" | "Ready" | "In progress"
}