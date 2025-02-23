"use client";

import { Typography } from "@/components/typography";
import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/assets/svg2";
import { useState } from "react";
import clsx from "clsx";
import AngleDownIcon from "@/assets/svg2/AngleDownIcon";
import AngleUpDownIcon from "@/assets/svg2/AngleUpDownIcon";
import { AddFeeModal } from "./components/AddFeeModal";

const Page = () => {
  const [showAddFeesModal, setShowAddFeesModal] = useState(false);
  const [formFields, setFormFields] = useState([
    {
      label: "Card Name",
      name: "cardName",
      type: "text",
      placeholder: "Enter card name",
      isrequired: true,
    },
    {
      label: "Bin Prefix",
      name: "binPrefix",
      type: "text",
      placeholder: "00000",
      isrequired: true,
    },

    {
      label: "Card Scheme",
      name: "cardScheme",
      type: "text",
      placeholder: "Verve",
      isrequired: true,
      icon: <AngleDownIcon />,
    },

    {
      label: "Expiration",
      name: "expiration",
      type: "text",
      placeholder: "0",
      isrequired: true,
      icon: <AngleUpDownIcon />,
    },

    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "",
    },
    {
      label: "Currency",
      name: "currency",
      type: "text",
      placeholder: "NGN",
      isrequired: true,
    },
    {
      label: "Branch Blacklist",
      name: "branch-blacklist",
      type: "text",
      placeholder: "Head Office",
      icon: <AngleDownIcon />,
    },
  ]);
  const [fees, setFees] = useState({
    Name: [""],
    Value: [""],
    Frequency: [""],
    Currency: [""],
    Time: [""],
    "Account Pad": [""],
    Account: [""],
  });   
  
  return (
    <section className="bg-[#F8FBFF] h-full px-[1.25rem] ">
      <div className="mt-[0.625rem]">
        <Typography
          fontWeight="bold"
          color="black-900"
          customClassName="!text-[1.2rem]"
        >
          {" "}
          Create Profile
        </Typography>
        <Typography
          fontWeight="regular"
          color="cod-gray-600"
          customClassName="!text-[0.875rem] !text-gray-600"
        >
          {" "}
          Fill in profile details and add card free
        </Typography>
      </div>
      <form className="bg-white p-4 border border-[rgba(226,226,226,1)] mt-[1.28rem] rounded-[10px] lg:pr-[8.313rem] sm:pr-12 pr-4">
        <Typography
          fontWeight="bold"
          color="black-900"
          customClassName="!text-[1.2rem]"
        >
          {" "}
          Profile Details
        </Typography>

        <div className="grid grid-cols-2 auto-rows-auto  mt-[1.45rem] gap-x-[7.113rem] gap-y-[1.25rem]">
          {formFields.map((field, index) => (
            <Input
              name={field.name}
              label={`${field.label}${field.isrequired ? "*" : ""}`}
              type={field.type}
              placeholder={field.placeholder}
              key={index}
              customClassName="!w-full !rounded-[8px] !h-auto"
              inputCustomClassName="!py-3 !rounded-[inherit]"
              icon2={field.icon}
            />
          ))}
        </div>
      </form>
      {/* Fees section */}
      <section className="mt-4 bg-white p-4 border border-[rgba(226,226,226,1)] rounded-[10px] pb-[3.063rem]">
        <Typography
          fontWeight="bold"
          color="black-900"
          customClassName="!text-[1.2rem]"
        >
          {" "}
          Fees
        </Typography>
        <div className="mt-6">
          <Button
            name="Add profile"
            variant={"default"}
            className="bg-[#014DAF]"
            onClick={() => {   
              /*
              setFees((prev) => {
                const newFees = { ...prev };
                Object.keys(newFees).map((key, index) => {
                  //We need to copy each Array again so that state is not mutated directly
                  const currProperty = [
                    ...newFees[key as keyof typeof newFees],
                  ];
                  currProperty.push("");
                  newFees[key as keyof typeof newFees] = currProperty;
                });
                return newFees;  
              });
              */
              setShowAddFeesModal(true);
            }}
          >
            <PlusIcon />
            Add Fee
          </Button>
        </div>

        <div className="flex mt-6 bg-gray-200 gap-[1px] border border-gray-200">
          {Object.keys(fees).map((key, keyIndex) => (
            <div key={keyIndex} className="w-full">
              <div
                className={clsx(
                  "bg-[rgba(249,250,251,1)] px-6 py-2 w-full flex items-center min-h-[2.625rem]"
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
                {fees[key as keyof typeof fees].map((item, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "px-6 py-[0.73rem] bg-white w-full, flex items-center gap-4 h-[2.959rem] mt-[0.9px] min-h-[  2.625rem]"
                    )}
                  >
                    <Typography customClassName="!text-gray-600 !truncate !text-[0.625rem]">
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-8 mb-12">
        <Button
          name="create-profile"
          variant={"default"}
          className="bg-[#014DAF] lg:min-w-[18.313rem]"
        >
          Create Profile
        </Button>
      </div>
      <AddFeeModal
        isOpen={showAddFeesModal}
        closeHandler={() => setShowAddFeesModal(false)}
      />
    </section>
  );
};

export default Page;
