import React from "react";
import { Typography } from "../typography";
import { ReqCardProps } from "./index.types";


const statusStyles:any = {
  Pending: {
    backgroundColor: "#FFFAEB",
    borderColor: "#FFEB3B", 
    textColor: "#B54708", 
  },
  Ready: {
    backgroundColor: "#ECFDF3",
    borderColor: "#ABEFC6", 
    textColor: "#067647",
  },
 
  Default: {
    backgroundColor: "#F1F7FF", 
    borderColor: "#E2E2E2", 
    textColor: "#B54708",
  },
};

export default function ReqCards(props: ReqCardProps) {
  const { branch, cardType, quantity, status, action } = props;

 
  const statusStyle = statusStyles[status] || statusStyles.Default;

  return (
    <div className="w-full grid grid-cols-5 gap-0 border-b">
      {/* Branch */}
      <div className="flex py-[10px] px-[24px] justify-center items-center">
        <Typography
          color="fiord-500"
          variant="c-s"
          font="Satoshi"
          fontWeight="regular"
          className="leading-[20px] truncate"
        >
          {branch}
        </Typography>
      </div>

      {/* Card Type */}
      <div className="flex py-[10px] px-[24px] justify-center items-center">
        <Typography
          color="fiord-500"
          variant="c-s"
          font="Satoshi"
          fontWeight="regular"
          className="leading-[20px] truncate"
        >
          {cardType}
        </Typography>
      </div>

      {/* Quantity */}
      <div className="flex py-[10px] px-[24px] justify-center items-center">
        <Typography
          color="fiord-500"
          variant="c-s"
          font="Satoshi"
          fontWeight="regular"
          className="leading-[20px] truncate"
        >
          {quantity}
        </Typography>
      </div>

      {/* Status */}
      <div className="flex py-[10px] px-[24px] justify-center items-center">
        <div
          className="flex py-[2px] px-[8px] items-center justify-center border rounded-full"
          style={{
            backgroundColor: statusStyle.backgroundColor,
            borderColor: statusStyle.borderColor,
          }}
        >
          <Typography
            color={statusStyle.textColor}
            variant="c-s"
            font="Satoshi"
            fontWeight="regular"
            className={`leading-[20px] truncate text-[${statusStyle.textColor}]`}
          >
            {status}
          </Typography>
        </div>
      </div>

      {/* Action */}
      <div className="flex py-[10px] px-[24px] justify-center items-center">
        <button
          style={{
            color: "#014DAF",
            fontFamily: "Satoshi, sans-serif",
            fontSize: "12px",
            fontWeight: "normal",
          }}
        >
          {action}
        </button>
      </div>
    </div>
  );
}