import { Input, Radio } from "antd";
import React, { useState } from "react";

export default function InputRadio() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
  };

  return (
    <Radio checked={() => {}}>
      <Input
        onClick={() => {
          handleClick();
        }}
        placeholder="Custom"></Input>
    </Radio>
  );
}
