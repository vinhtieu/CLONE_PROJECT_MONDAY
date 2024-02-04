import React from "react";
import { Input } from "antd";
import { XMark } from "./Icon";

function CustomInput({
  id,
  name,
  className,
  placeHolder,
  onChangeEvent = () => {},
  value,
}) {
  return (
    <Input
      id={id}
      name={name}
      allowClear={{
        clearIcon: <XMark />,
      }}
      value={value}
      onChange={(e) => {
        // console.log(onChangeEvent);
        onChangeEvent(e);
      }}
      placeholder={placeHolder}
      className={`py-2 px-4 rounded normal-text-1_base h-10 focus:shadow-none outline-none focus:outline-none focus:border-primary border-linkWater hover:border-mudBlack placeholder:text-mudBlack text-mudBlack transition-[border-color] duration-300 ease-in ${className}`}
    />
  );
}

export default CustomInput;
