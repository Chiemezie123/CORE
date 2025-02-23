import React from "react";
import { cn } from "@/utils/helper";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputProps } from "./index.types";
import { Typography } from "../typography";

const InputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const {
    placeholder,
    errorMsg,
    label,
    name,
    icon1,
    icon2,
    customClassName,
    labelCustomClassName,
    isSearchIcon,
    hideErrorMsg,
    bgcolor,
    validationPattern,
    message,
    maindiv,
    required,
    register,
    passwordWay,
    inputHandler,
    inputValue,
    onBlur,
    inputCustomClassName,
    ...rest
  } = props;

  const inputType = passwordWay ? "password" : "text";
  const registerInput = register ? register(name) : undefined;
  return (
    <div className={cn(`relative w-full z-0 flex flex-col `, maindiv)}>
      {label && (
        <label
          className={cn(
            "mb-2 w-fit first-letter:capitalize",
            errorMsg ? "text-error" : "",
            labelCustomClassName
          )}
          htmlFor={name}
        >
          <Typography
            variant="c-m"
            font="Satoshi"
            fontWeight="medium"
            className="leading-normal"
            color="black-600"
          >
            {label}
          </Typography>
        </label>
      )}
      <div
        className={cn(
          `relative w-[214px] rounded-[97.992px] border focus-within:border-[#D0D5DD] focus-within:border-[2px] h-[2.2rem]`,
          label ? "px-0 " : "",
          customClassName,
          bgcolor
        )}
      >
        {icon1 && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            {icon1}
          </div>
        )}

        {icon2 && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {icon2}
          </div>
        )}
        <input
          className={cn(
            `peer block w-full font-satoshi appearance-none rounded-[97.992px] h-full ${
              icon1 ? "px-9" : "px-[10px]"
            } text-c-m font-light placeholder:font-regular placeholder:text-p-m placeholder:font-satoshi autofill:none focus:outline-none`,
            bgcolor,
            rest.disabled
              ? "disabled:cursor-not-allowed disabled:bg-primary-light-100 disabled:font-semibold disabled:text-gray-3"
              : "",
            inputCustomClassName
          )}
          id={name}
          placeholder={placeholder}
          type={inputType}
          {...registerInput}
          ref={ref}
          {...rest}
        />
      </div>
      {errorMsg && !hideErrorMsg && (
        <Typography
          variant="c-l"
          font="Satoshi"
          fontWeight="regular"
          className="text-error mt-1"
        >
          {typeof errorMsg === "string" ? errorMsg : errorMsg.message}
        </Typography>
      )}
    </div>
  );
};

export type InputComponentType = <FV extends FieldValues>(
  props: InputProps<FV> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement;

const RadioInputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const {
    placeholder,
    errorMsg,
    label,
    name,
    icon1,
    icon2,
    customClassName,
    labelCustomClassName,
    isSearchIcon,
    hideErrorMsg,
    bgcolor,
    validationPattern,
    message,
    maindiv,
    required,
    register,
    passwordWay,
    inputHandler,
    inputValue,
    onBlur,
    inputCustomClassName,
    labelTextCustomClassName,
    type,
    id,
    ...rest
  } = props;

  const registerInput = register ? register(name) : undefined;
  return (
    <div className={cn(`relative z-0 flex items-center gap-2`, maindiv)}>
      <input
        className={cn(
          `peer block font-satoshi h-full text-c-m font-light placeholder:font-regular placeholder:text-p-m placeholder:font-satoshi autofill:none focus:outline-none`,
          bgcolor,
          rest.disabled
            ? "disabled:cursor-not-allowed disabled:bg-primary-light-100 disabled:font-semibold disabled:text-gray-3"
            : "",
          inputCustomClassName
        )}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        {...registerInput}
        ref={ref}
        {...rest}
      />
      {label && (
        <label
          className={cn(
            " w-fit first-letter:capitalize",
            errorMsg ? "text-error" : "",
            labelCustomClassName
          )}
          htmlFor={name}
        >
          <Typography
            variant="c-m"
            font="Satoshi"
            fontWeight="medium"
            className="leading-normal"
            color="black-600"
            customClassName={cn("", labelTextCustomClassName)}
          >
            {label}
          </Typography>
        </label> 
      )}

      {errorMsg && !hideErrorMsg && (
        <Typography  
          variant="c-l"
          font="Satoshi"
          fontWeight="regular"
          className="text-error mt-1"
        >
          {typeof errorMsg === "string" ? errorMsg : errorMsg.message}
        </Typography>
      )}
    </div>
  );
};

export type RadioInputComponentType = <FV extends FieldValues>(
  props: InputProps<FV> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement;

const Input = React.forwardRef(InputComponent) as InputComponentType;
const RadioInput = React.forwardRef(RadioInputComponent) as InputComponentType;

export { Input, RadioInput };
