"use client";
import MyController from "@/components/common/MyController";
import { Button, Input, Modal, ModalProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";

type ChildrenFormType = {
  test: string;
};

const ChildrenForm = (props: ModalProps) => {
  const { control, handleSubmit } = useForm<ChildrenFormType>();

  const onSubmit: SubmitHandler<ChildrenFormType> = async (formData) => {
    console.log("formData", formData);
  };
  return (
    <Modal centered getContainer={false} forceRender {...props}>
      <div className="w-full max-w-[600px] mx-auto flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">Children Form</h1>
        <MyController
          control={control}
          name="test"
          label={{
            label: "Test",
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
