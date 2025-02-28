"use client";
import React from "react";
import { Typography } from "@/components/typography";
import {
  AnalsisCardArray,
  CardRequested,
  listCardArray,
} from "@/constant/data";
import ListingCards from "@/components/Cards/listingCards";
import { Dash, Expand } from "@/assets/svg2";
import AnalysisCard from "@/components/Cards/AnalysisCard";
// import MonthlyIssuanceChart from "@/components/barchart";
// import DoughnutChart from "@/components/doughnutChart";
// import LineChart from "@/components/lineChart";
import ReqCards from "@/components/Cards/reqCards";
import { Calender } from "@/assets/svg2";
import dynamic from "next/dynamic";

const MonthlyIssuanceChart = dynamic(
  () => import("../../components/barchart"),
  { ssr: false }
);

const LineChart = dynamic(() => import("../../components/lineChart"), {
  ssr: false,
});
const DoughnutChart = dynamic(() => import("../../components/doughnutChart"), {
  ssr: false,
});

export default function Page() {
  const RCR = ["Branch", "Card Type", "Quantity", "Status", "Action"];

  return (
    <div className="bg-[#F8FBFF] h-full px-[20px] pt-[8px] pb-[20px] relative">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[6px]">
          <div className="">
            <Typography
              variant="h-m"
              color="cod-gray-950"
              font="Satoshi"
              fontWeight="bold"
              className="leading-normal"
            >
              Hi Nazeer, what would you like to do today?
            </Typography>
          </div>
          <div>
            <Typography
              variant="p-s"
              color="cod-gray-950"
              font="Satoshi"
              fontWeight="regular"
              className="leading-normal"
            >
              Last login: 26/11/2024 14:39:58
            </Typography>
          </div>
        </div>
        <div className="inline-flex py-[8px] px-[13px] justify-center items-center border border-[#D0D5DD] rounded-[4px]">
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center gap-1">
              <Calender />
              <Typography
                color="cod-gray-950"
                variant="c-m"
                fontWeight="regular"
                font="Satoshi"
              >
                Today
              </Typography>
            </div>
            <div>
              <Typography
                variant="c-m"
                color="cod-gray-950"
                font="Satoshi"
                fontWeight="regular"
              >
                11 Nov 2024
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex p-[16px_16px_14px_16px] flex-col justify-center items-start gap-[13px] rounded-[10px] border border-[#E2E2E2] bg-white w-full mt-[13px]">
        <div>
          <Typography
            variant="h-m"
            color="cod-gray-950"
            font="Satoshi"
            fontWeight="medium"
            className="leading-normal"
          >
            Your Quick Access
          </Typography>
        </div>
        <div className="flex w-full gap-[8px]">
          {listCardArray.map((items, index) => (
            <ListingCards key={index} title={items.title} CardS={items.cards} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[8px] w-full my-2">
        <div>
          <Typography
            variant="h-m"
            font="Satoshi"
            fontWeight="bold"
            className="leading-normal"
            color="black-950"
          >
            Analytics
          </Typography>
        </div>
        <div>{/* <Dash /> */}</div>
      </div>
      <div className="flex items-center gap-[8px] mt-[10px]">
        {AnalsisCardArray.map((items, index) => (
          <AnalysisCard
            key={index}
            title={items.title}
            event={items.event}
            icon={items.icon}
            isWhich={items.isWhich}
            Numbers={items.Numbers}
            rating={items.rating}
            icon2={items.icon2}
          />
        ))}
      </div>
      <div className="flex mt-[8px] w-full gap-[8px]">
        <div className="flex flex-col gap-[8px] w-1/2">
          <div className=" flex-1 h-[318px] border border-[#E2E2E2] rounded-[12px] bg-[#fff] flex flex-col gap-6">
            <Typography
              color="cod-gray-950"
              variant="h-m"
              font="Satoshi"
              fontWeight="medium"
              className="px-[10px] pt-[10px]"
            >
              Monthly Issuance
            </Typography>
            <div className="flex-1 w-full">
              <MonthlyIssuanceChart />
            </div>
          </div>

          <div className="flex-1 h-[200px] border border-[#E2E2E2] rounded-[12px] bg-[#fff] p-[1rem] flex flex-col gap-4">
            <div className="flex items-center">
              <div>
                <Typography
                  color="cod-gray-950"
                  variant="h-m"
                  font="Satoshi"
                  fontWeight="medium"
                  className="leading-[18px]"
                >
                  This Week’s Income
                </Typography>
              </div>
            </div>
            <div className="flex-1"><LineChart /></div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-1/2">
          <div className="h-[290px] border border-[#E2E2E2] rounded-[12px] bg-[#fff] px-[1rem] pt-[1rem] pb-[33px] flex flex-col gap-[1.5rem]">
            <div className="flex justify-between items-center">
              <div>
                <Typography
                  color="cod-gray-950"
                  variant="h-m"
                  font="Satoshi"
                  fontWeight="medium"
                  className="leading-[18px]"
                >
                  Recent Card Requests
                </Typography>
              </div>
              <div>
                <Expand />
              </div>
            </div>
            <div>
              <div className="border w-full h-[34px] bg-[#F1F7FF] flex">
                {RCR.map((item, index) => (
                  <div
                    key={index}
                    className="flex p-[8px_22px] justify-center items-center gap-3 flex-1 flex-shrink-0"
                  >
                    <Typography
                      color="black-950"
                      variant="p-s"
                      font="Satoshi"
                      fontWeight="medium"
                      className="leading-[18px]"
                    >
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
              <div>
                {CardRequested.map((item, index) => (
                  <ReqCards
                    key={index}
                    branch={item.branch}
                    cardType={item.cardType}
                    quantity={item.quantity}
                    status={item.status}
                    action={item.action}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[318px] border border-[#E2E2E2] rounded-[12px] bg-[#fff] p-[1rem] flex flex-col">
            <div className="flex items-center">
              <Typography
                color="cod-gray-950"
                variant="h-m"
                font="Satoshi"
                fontWeight="medium"
                className="leading-[18px]"
              >
                Card Status Distribution
              </Typography>
            </div>
            <div className="flex-1 min-h-0">
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
