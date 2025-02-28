"use client";

import React from "react";
import { Typography } from "@/components/typography";
import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { EditIcon, DeleteIcon, SearchIcon } from "@/assets/svg2/";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const data = {
  "Card Name": ["Verve-1", "Verve-1", "Verve-1"],
  Currency: ["NGN", "NGN", "NGN"],
  Expiration: ["40 months", "40 months", "40 months"],
  "Bin Prefix": ["50611234", "50611234", "50611234"],
  "Date Created": [
    "11/10/2024  23:21:03",
    "11/10/2024  23:21:03",
    "11/10/2024  23:21:03",
  ],
  Action: ["", "", ""],
};

export default function Page() {

  const router = useRouter();

  return (
    <section className="bg-[#F8FBFF] h-full px-[1.25rem] ">
      <div className="mt-[0.625rem]">
        <Typography
          fontWeight="bold"
          color="black-900"
          customClassName="!text-[1.2rem]"
        >
          {" "}
          Create{" "}
        </Typography>
        <Typography
          fontWeight="regular"
          color="cod-gray-600"
          customClassName="!text-[0.875rem] !text-gray-600"
        >
          {" "}
          Create, view and edit card profiles here{" "}
        </Typography>
      </div>
      <div className="flex justify-between mt-4 border-t border-b border-[808080]  pt-[1rem] pb-[0.6rem]">
        <Input
          name="search"
          placeholder="Search by card name"
          customClassName="!w-full !rounded-[8px] !h-auto !max-w-[20rem]"
          inputCustomClassName="!py-3 !rounded-[inherit]"
          icon1={<SearchIcon />}
        />

        <Button
          name="Add profile"   
          variant={"default"}
          className="bg-[#014DAF]"
          onClick={() => router.push("/dashboard/card-profile/create-profile")}
        >
          <PlusIcon />
          Add Profile
        </Button>
      </div>
      {/* Table */}
      <div className="flex mt-6 bg-gray-200 gap-[1px] border border-gray-200 rounded-[4px]  ">
        {Object.keys(data).map((key, keyIndex) => (
          <div key={keyIndex} className="w-full">
            <div
              className={clsx(
                "bg-[rgba(249,250,251,1)] px-6 py-2 w-full flex items-center",
                keyIndex !== 0 && "justify-center"
              )}
            >
              {" "}
              <Typography
                customClassName="!text-gray-600 !text-[0.875rem] !truncate"
                fontWeight="semibold"
              >
                {key}{" "}
              </Typography>
            </div>
            <div className=" mt-[1px]">
              {data[key as keyof typeof data].map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "px-6 py-[0.73rem] bg-white w-full, flex items-center gap-4  h-[2.959rem] mt-[0.9px]",
                    keyIndex !== 0 && "justify-center"
                  )}
                >
                  {key === "Action" ? (
                    <>
                      <button type="button">
                        <DeleteIcon />
                      </button>
                      <button type="button">
                        <EditIcon />
                      </button>
                    </>
                  ) : (
                    <Typography customClassName="!text-gray-600 !truncate !text-[0.625rem]">
                      {item}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
