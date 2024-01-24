import React from "react";
import { Input } from "antd";
import { XMark } from "./Icon";

function CustomInput({ classNameValue, placeHolderValue, onChangeEvent }) {
  return (
    <Input
      allowClear={{
        clearIcon: <XMark />,
      }}
      onChange={(e) => {
        onChangeEvent(e);
      }}
      placeholder={placeHolderValue}
      className={`py-2 px-4 rounded normal-text-1_base h-10 focus:shadow-none outline-none focus:outline-none focus:border-primary border-linkWater hover:border-mudBlack placeholder:text-mudBlack text-mudBlack transition-[border-color] duration-300 ease-in ${classNameValue}`}
    />
  );
}

export default CustomInput;
