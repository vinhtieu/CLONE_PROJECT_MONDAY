import React, { useState } from "react";
import { APP_LOGO, INVITATION_PAGE_IMG } from "../../constant";
import { Button, Checkbox, Form, Input, Radio, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./style.scss";
import { useSelector } from "react-redux";

export default function Invitation() {
  const { Option } = Select;
  const [selectedValue, setSelectedValue] = useState("");
  const [isDisabled, setIsDisabled] = useState("true");
  const [inputNumber, setInputNumber] = useState("2");
  const addInput = () => {
    const amount = +inputNumber + 1;
    setInputNumber(amount);
  };

  const renderInputs = (inputNumber) => {
    return inputNumber.map((item, index) => {
      <Input
        // addonBefore={selectBefore}
        key={index}
        addonAfter={selectAfter}
        defaultValue="mysite"
        placeholder="Add email here"
      />;
    });
  };

  // const showValue = (value) => {
  //   setSelectedValue(value);
  //   console.log(value);
  // };

  // const showLabel = (value) => {
  //   switch (value) {
  //     case "admin":
  //       return "Admin";
  //     case "member":
  //     default:
  //       return "";
  //       break;
  //   }
  // };

  // console.log(selectedValue);

  const selectAfter = (
    <Select
      className="w-full"
      defaultValue="Admin"
      // value={selectedValue}
      // onChange={showValue}
    >
      <Option value="Admin">
        <span>Admin</span>
      </Option>
      <Option value="Member">
        <span>Member</span>
      </Option>
    </Select>
  );

  return (
    <div className="flex h-screen font-normal ">
      <div className="flex flex-col h-full p-24 w-[60%]">
        <div className="absolute top-[10px] right-[10px]">
          <button className="flex items-center justify-center w-10 h-10 hover:bg-moonlightBay text-comet rounded-[4px]">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden="true"
              class=""
              data-testid="icon">
              <path
                d="M3.53033 2.46967C3.23744 2.17678 2.76256 2.17678 2.46967 2.46967C2.17678 2.76256 2.17678 3.23744 2.46967 3.53033L8.97639 10.037L2.47093 16.5425C2.17804 16.8354 2.17804 17.3103 2.47093 17.6032C2.76382 17.8961 3.2387 17.8961 3.53159 17.6032L10.037 11.0977L16.5425 17.6032C16.8354 17.8961 17.3103 17.8961 17.6032 17.6032C17.8961 17.3103 17.8961 16.8354 17.6032 16.5425L11.0977 10.037L17.6044 3.53033C17.8973 3.23744 17.8973 2.76256 17.6044 2.46967C17.3115 2.17678 16.8367 2.17678 16.5438 2.46967L10.037 8.97639L3.53033 2.46967Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"></path>
            </svg>
            {/* <img src="src\assets\cross.svg" alt="" className="w-6 h-6" /> */}
          </button>
        </div>
        <div className="flex-1 mb-8">
          <img src={APP_LOGO} alt="" className="h-6 mb-40" />
          <h2 className="heading-2_normal letter-spacing-h2">
            Who else is on your team?
          </h2>
        </div>
        <div className="flex-[10] w-[75%] invitation-page__inputs">
          <div className="mb-[3px]">
            <span className="block mb-2 text-sm normal-text-1_base leading-2">
              Invite with link (anyone with a @ email)
            </span>
            <Form>
              <Form.Item className="mb-2">
                <Input
                  // className="mb-2"
                  addonAfter={selectAfter}
                  placeholder="Add email here"
                />
              </Form.Item>
              <Form.Item className="mb-2">
                <Input addonAfter={selectAfter} placeholder="Add email here" />
              </Form.Item>
            </Form>
          </div>
          <Form>
            <Form.List className={"mb-2"} name="emails">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "block",
                        width: "100%",
                      }}
                      className="mb-2"
                      align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        className="mb-2">
                        <Input
                          className=""
                          addonAfter={selectAfter}
                          placeholder="Add email here"
                        />
                      </Form.Item>

                      {/* <MinusCircleOutlined onClick={() => remove(name)} /> */}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      className="border-none shadow-none hover:bg-moonlightBay text-mudBlack hover:!text-comet rounded-[4px] w-fit  h-10 p-[3px_10px_1px] text-sm border-[4px] normal-text-1_base py-2 px-4"
                      icon={<PlusOutlined />}>
                      Add another
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
        <div className="flex items-end flex-1 w-full mt-2 ">
          <div className="flex flex-row justify-between w-full">
            <button className="border-none whitespace-nowrap shadow-none hover:bg-moonlightBay text-mudBlack hover:!text-comet rounded-[4px] w-fit  h-10 p-[3px_10px_1px] text-sm border-[4px] normal-text-1_base py-2 px-4">
              Remind me later
            </button>
            <button
              disabled={isDisabled}
              className="border-none shadow-none  whitespace-nowrap disabled:bg-solitude disabled:text-disable-color disabled:hover:!text-disable-color hover:bg-moonlightBay text-mudBlack hover:!text-comet rounded-[4px] w-fit  h-10 p-[3px_10px_1px] text-sm border-[4px] normal-text-1_base py-2 px-4">
              Invite your team
            </button>
          </div>
        </div>
      </div>
      <figure className="overflow-hidden bg-[#00ca72] w-[40%]">
        <img
          src={INVITATION_PAGE_IMG}
          alt=""
          className="object-cover w-full h-full p-0 m-0"
        />
      </figure>
    </div>
  );
}
