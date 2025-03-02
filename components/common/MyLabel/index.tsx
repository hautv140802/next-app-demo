"use client";
export interface IMyLabelProps {
  label: string;
}
const MyLabel = (props: IMyLabelProps) => {
  const { label } = props;
  return <label className="text-base font-semibold">{label}</label>;
};

export default MyLabel;
