import React, { JSX } from "react";

export interface SideBarInnerProps{
    icon:React.JSX.Element;
    title: string;
    isActive?: boolean;
    path:string;
}