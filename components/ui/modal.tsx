"use client";

import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment } from "react";
// import TwoToneCloseCircleIcon from '@/public/assets/svgs/close-circle-two-tone-icon.svg';
import { CancelIcon } from "@/assets/svg2";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  id?: string;
  alignEnd?: boolean;
  children?: React.ReactNode;
  showCloseIcon?: boolean;
  customPanelClassName?: string;
  customContentWrapperClassName?: string;
  customCloseIconClassName?: string;
}

const Modal = ({
  isOpen,
  closeModal,
  id,
  children,
  alignEnd,
  showCloseIcon,
  customContentWrapperClassName,
  customPanelClassName,
  customCloseIconClassName,
}: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment} unmount={true}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={closeModal}
        id={id}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-[99] bg-gray-800/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="no-scrollbar fixed inset-0 z-[100] w-full overflow-y-auto">
          <div
            className={clsx(
              "flex min-h-full items-center p-4 text-center",
              alignEnd && "justify-end",
              !alignEnd && "justify-center",
              showCloseIcon && "px-14 mxs:px-8 mxxs:px-4",
              customContentWrapperClassName
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  "flex w-fit max-w-[635px] msm:w-full relative",
                  customPanelClassName
                )}
              >
                {children}

                {showCloseIcon && (
                  <>
                    <button
                      onClick={closeModal}
                      className={cn(
                        "absolute right-[2.25rem] top-[1.75rem] cursor-pointer",
                        customCloseIconClassName
                      )}
                    >
                      <CancelIcon
                        className={clsx()
                        //   " mxs:h-[24px] mxs:w-[24px] "
                        //   "[&>path]:stroke-red-600 [&_g]:stroke-red-700"
                        }
                      />
                    </button>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>   
          </div>
        </div>
      </Dialog>  
    </Transition>
  );
};

export { Modal };
