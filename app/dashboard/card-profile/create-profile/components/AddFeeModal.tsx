"use client";

import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/modal";
import { PlusSquareIcon } from "@/assets/svg2";
import { useState } from "react";
import AngleUpDownIcon from "@/assets/svg2/AngleUpDownIcon";
import { Input, RadioInput } from "@/components/input";
import { Button } from "@/components/ui/button";
const AddFeeModal = ({
  isOpen,
  closeHandler,
}: {
  isOpen: boolean;
  closeHandler: () => void;
}) => {
  const [formInputFields, setFormInputFields] = useState([
    {
      label: "Fee Name",
      name: "Fee-name",
      type: "text",
      placeholder: "Maintenance",
      isrequired: true,
    },
    {
      label: "Value",
      name: "value",
      type: "text",
      placeholder: "0",
      isrequired: true,
      icon: <AngleUpDownIcon />,
    },
  ]);
  const [formRadioFields, setFormRadionFields] = useState({
    Currency: [
      {
        label: "NGN",
        name: "currency",
        id: "currency-ngn",
        type: "radio",
        isrequired: false,
      },
      {
        label: "USD",
        name: "currency",
        id: "currency-usd",
        type: "radio",
        isrequired: false,
      },
    ],
    "Fee Frequency": [
      {
        label: "One Off",
        name: "fee-frequency",
        id: "fee-one-off",
        type: "radio",
        isrequired: false,
      },
      {
        label: "Monthly",
        name: "fee-frequency",
        id: "fee-Monthly",
        type: "radio",
        isrequired: false,
      },
    ],
    "Fee Impact": [
      {
        label: "Issuance",
        name: "fee-impact",
        id: "",
        type: "radio",
        isrequired: false,
      },
      {
        label: "Pin Reissue",
        name: "fee-impact",
        id: "",
        type: "radio",
        isrequired: false,
      },
    ],
    "Account Pad": [
      {
        label: "None",
        name: "account-pad",
        id: "none",
        type: "radio",
        isrequired: false,
      },
      {
        label: "Branch Code Prefix",
        name: "account-pad",
        id: "branch-code-prefix-1",
        type: "radio",
        isrequired: false,
      },
      {
        label: "Branch Code Prefix",
        name: "account-pad",
        id: "branch-code-prefix",
        type: "radio",
        isrequired: false,
      },
    ],
  });
  return (
    <Modal isOpen={isOpen} closeModal={closeHandler} showCloseIcon>
      <div className="bg-white flex-col relative py-[1.75rem] rounded-md flex  max-w-[500px] sm:min-w-[28rem] md:min-w-[31rem] min-w-[95vw] ">
        <div className="flex gap-4 border-b border-gray-200 pb-6 w-full px-[2.25rem] ">
          <div className="flex justify-center items-center h-12 w-12 rounded-[10px] border border-gray-200">
            <PlusSquareIcon />
          </div>
          <div>
            <Typography
              fontWeight="bold"
              color="black-900"
              customClassName="!text-[1.1rem]"
            >
              {" "}
              Add Fee
            </Typography>
            <Typography
              fontWeight="regular"
              color="cod-gray-600"
              customClassName="!text-[0.875rem] !text-gray-600"
            >
              {" "}
              Fill in fee details.
            </Typography>
          </div>
        </div>
        <form className="mt-[1.25rem]  ">
          <div className=" px-[2.25rem] ">
            <div className="  mt-[1.45rem] flex flex-col gap-4">
              {formInputFields.map((field, index) => (
                <Input
                  name={field.name}
                  label={`${field.label}${field.isrequired ? "*" : ""}`}
                  type={field.type}
                  placeholder={field.placeholder}
                  key={index}
                  customClassName="!w-full !rounded-[8px] !h-auto"
                  inputCustomClassName="!py-3 !rounded-[inherit]"
                  icon2={field.icon}
                  labelCustomClassName="!text-gray-700"
                />
              ))}
            </div>
            <div className="flex flex-col mt-6 gap-4 ">
              {Object.keys(formRadioFields).map((key, keyIndex) => (
                <div key={keyIndex} className="w-full">
                  <Typography
                    customClassName="!text-gray-700 !text-[0.875rem] !truncate"
                    fontWeight="medium"
                  >
                    {key}{" "}
                  </Typography>
                  <div className=" mt-2 flex gap-6">
                    {formRadioFields[key as keyof typeof formRadioFields].map(
                      (field, index) => (
                        <RadioInput
                          key={index}
                          type={field.type}
                          name={field.name}
                          label={field.label}
                          customClassName=""
                          labelTextCustomClassName="!text-[0.94rem] !font-normal"  
                        />
                      )
                    )}   
                  </div>
                </div>     
              ))}  
            </div>
            <div className="mt-4 w-full mb-8">  
              <Input
                name={"account"}
                label={"Account"}
                placeholder={""}
                customClassName="!w-full !rounded-[8px] !h-auto"
                inputCustomClassName="!py-3 !rounded-[inherit]"
                labelCustomClassName="!text-gray-700"
              />
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 w-full px-[2.25rem]">
            <Button
              name="add-fee"
              variant={"default"}
              className="bg-[#014DAF] lg:min-w-[18.313rem] !w-full"
            >
              Add Fee 
            </Button>
          </div>  
        </form>   
      </div>
    </Modal>
  );
};

export { AddFeeModal };
  