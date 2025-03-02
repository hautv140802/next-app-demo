"use client";
import MyController from "@/components/common/MyController";
import ChildrenForm from "@/components/Form/ChildrenForm";
import { Button, Input } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormParentType = {
  first_name: string;
  last_name: string;
};

const ParentForm = () => {
  const { control, handleSubmit } = useForm<FormParentType>();
  const [openChild, setOpenChild] = useState(false);

  const onSubmit: SubmitHandler<FormParentType> = async (formData) => {
    console.log("formData", formData);
  };

  const handelCancelChild = () => setOpenChild(false);

  return (
    <form
      className="w-full max-w-[600px] mx-auto flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <MyController
        name="last_name"
        control={control}
        label={{
          label: "Last name",
        }}
      >
        <Input />
      </MyController>
      <MyController
        name="first_name"
        control={control}
        label={{
          label: "First name",
        }}
      >
        <Input />
      </MyController>

      <div className="flex justify-end items-center gap-5">
        <Button onClick={() => setOpenChild(true)}>Open child form</Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>

      <ChildrenForm
        open={openChild}
        onCancel={handelCancelChild}
        footer={null}
      />
    </form>
  );
};

export default ParentForm;
