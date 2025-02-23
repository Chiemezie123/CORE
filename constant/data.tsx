import { SideBarInnerProps } from "@/app/components/sidebar/index.types";
import { Branch,Logout,Roles,Users,Calender,CardProfile,CardRequest, Contact,CardScheme, Stock,Cards,Block,Authorization,Account,Trail ,Home,IssueInstant,ManageCard,PersonalCard,ReviewCard, TAC, TPC, TR, PR, OrangeCircle} from "@/assets/svg2";
import { AnalysisCardProps } from "@/components/Cards/index.types";
import { TableDataProps } from "@/components/Table/index.types";


export interface CardRequestProps {
  branch: string;
  cardType: string;
  quantity: string;
  status: string;
  action: string;
}

export const dashboardModuleMenus:SideBarInnerProps[]=[
     {
      path: "/dashboard",
      title: "Dashboard",
      icon: <Home/>,
    },
]

export const LogoutModuleMenus:SideBarInnerProps[]=[
  {
   path: "/dashboard/Logout",
   title: "Logout",
   icon: <Logout/>,
 },
]

export const sidebarModuleMenus: SideBarInnerProps[] = [
  {
    path: "/dashboard/RequestDetails",
    title: "Card Request Request Details",
    icon:  <CardRequest/>,
  },
   
    {
      path: "/dashboard/Branches",
      title: "Branches",
      icon: <Branch/>,
    },
    {
      path: "/dashboard/Roles",
      title: "Roles",
      icon: <Roles/>,
    },
    {
      path: "/dashboard/Users",
      title: "Users",
      icon: <Users/>,
    },
    {
      path: "/dashboard/CardScheme",
      title: "Card Scheme",
      icon: <CardScheme />,
    },
    {
      path: "/dashboard/card-profile",
      title: "Card Profile",
      icon: <CardProfile/>,
    },
    {
      path: "/dashboard/CardRequest",
      title: "Card Request",
      icon: <CardRequest/>,
    },
    {
        path: "/dashboard/Stock",
        title: "Stock",
        icon: <Stock/>,
      },
      {
        path: "/dashboard/Cards",
        title: "Cards",
        icon: <Cards/>,
      },
      {
        path: "/dashboard/Block",
        title: "Block/Unblock Card",
        icon: <Block />,
      },
      {
        path: "/dashboard/AuthorizationList",
        title: "Authorization List",
        icon: <Authorization/>,
      },
      {
        path: "/dashboard/AuthorizationQueue",
        title: "Authorization Queue",
        icon: <Authorization/>,
      },
      {
        path: "/dashboard/Trail",
        title: "Trail",
        icon: <Trail />,
      },
      {
        path: "/dashboard/Account",
        title: "Account",
        icon: <Account />,
      },
  ];

  export const listCardArray = [
    {
      title: "Manage a Card",
      cards:<ManageCard/>
    },
    {
      title:"Issue Instant Card",
      cards:<IssueInstant/>
    },
    {
      title:"Issue Personalized Card",
      cards:<PersonalCard/>
    },
    {
      title:"Review Card Requests",
      cards:<ReviewCard/>
    }
  ]


  export const AnalsisCardArray:AnalysisCardProps[] = [
    {
      title:'Total Active Cards',
      icon:<TAC/>,
      Numbers:"26,478",
      isWhich:"rate",
      rating:"+9%",
      event:"this month",
      icon2:<TAC/>
    },
    {
      title:'Total Personalized Cards',
      icon:<TPC/>,
      Numbers:"15,703",
      isWhich:"rate",
      rating:"+8.5%",
      event:"this month",
      icon2:<TAC/>
    },
    {
      title:'Today’s Revenue',
      icon:<TR/>,
      Numbers:"₦9.3M",
      isWhich:"rate",
      rating:"+9%",
      event:"vs yesterday",
      icon2:<TAC/>
    },
    {
      title:'Total Active Cards',
      icon:<PR/>,
      Numbers:"38",
      isWhich:"icon",
      rating:"+9%",
      event:"Requires attention",
      icon2:<OrangeCircle/>
    },

  ]
 export const tableHeader =[
    {
      title: "Branch",
      key: "branch",
    },
    {
      title: "Initiator",
      key: "initiator",
    },
    {
      title: "Quantity",
      key: "quantity",
    },
    {
      title: "Batch",
      key: "batch",
    },
    {
      title: "Date Requested",
      key: "dateRequested",
    },
    {
      title: "Status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
    },
 ]
  export const tableData:TableDataProps[] = [
    {
      branch: "Lagos HQ",
      initiator: "John Doe",
      quantity: 50,
      batch: "B123",
      dateRequested: "2024-02-20",
      status: "Ready",
      cardType: "Classic Debit",
      cardCharges:'1,500'
    },
    {
      branch: "Abuja Branch",
      initiator: "Jane Smith",
      quantity: 30,
      batch: "B456",
      dateRequested: "2024-02-18",
      status: "In Progress",
      cardType: "Prepaid",
      cardCharges:'2,500'
    },
    {
      branch: "Port Harcourt",
      initiator: "Michael Johnson",
      quantity: 25,
      batch: "B789",
      dateRequested: "2024-02-15",
      status: "Pending",
      cardType: "Classic Credit",
      cardCharges:'1,000'
    },
    {
      branch: "Kano Office",
      initiator: "Sarah Lee",
      quantity: 40,
      batch: "B101",
      dateRequested: "2024-02-10",
      status: "Ready",
      cardType: "Classic Debit",
      cardCharges:'1,500'
    },
    {
      branch: "Enugu Hub",
      initiator: "Daniel Okonkwo",
      quantity: 35,
      batch: "B202",
      dateRequested: "2024-02-05",
      status: "Acknowledged",
      cardType: "Prepaid",
      cardCharges:'2,500'
    },
  ];
  
  export const CardRequested:CardRequestProps[] = [
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: "10",
      status: "Ready",
      action: "View",
    },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: "10",
      status: "Ready",
      action: "View",
    },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: "10",
      status: "Pending",
      action: "View",
    },
    {
      branch: "Corporate",
      cardType: "Pending",
      quantity: "10",
      status: "Pending",
      action: "View",
    },
  ];