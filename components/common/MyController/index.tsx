"use client";
import MyLabel, { IMyLabelProps } from "@/components/common/MyLabel";
import React, { ReactNode } from "react";
import { Controller, FieldError, RegisterOptions } from "react-hook-form";
interface IMyControllerProps {
  label: IMyLabelProps;
  children: ReactNode;
  rules?: RegisterOptions;
  errors?: FieldError;
  name: string;
  control?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  classname?: string;
}
const MyController = (props: IMyControllerProps) => {
  const { label, children, name, control, ...rest } = props;
  return (
    <div className="flex flex-col gap-2">
      <MyLabel {...label} />
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            React.cloneElement(children as React.ReactElement, {
              ...field,
              ...rest,
              // errorText: errors?.message,
            })
          }
        />
      ) : (
        React.cloneElement(children as React.ReactElement, {
          ...rest,
          // errorText: errors?.message,
        })
      )}
    </div>
  );
};

export default MyController;
