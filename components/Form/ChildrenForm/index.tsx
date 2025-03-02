"use client";
import MyController from "@/components/common/MyController";
import { Button, Input, Modal, ModalProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";

type ChildrenFormType = {
  number: number;
};

const ChildrenForm = (props: ModalProps) => {
  const { control, handleSubmit } = useForm<ChildrenFormType>();

  const onSubmit: SubmitHandler<ChildrenFormType> = async (formData) => {
    console.log("formData", formData);
  };
  return (
    <Modal centered getContainer={false} forceRender {...props}>
      <div
        className="w-full max-w-[600px] mx-auto flex flex-col gap-6"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <MyController
          control={control}
          name="number"
          label={{
            label: "Number",
          }}
        >
          <Input />
        </MyController>

        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default ChildrenForm;
