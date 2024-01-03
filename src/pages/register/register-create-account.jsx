import React from "react";
import { Button, Form, Input } from "antd";

export default function registerCreateAccount() {
  //   const [form] = Form.useForm();
  return (
    <div className="grid h-screen grid-flow-col grid-cols-[auto_40%] font-normal">
      <div className="flex flex-col items-center justify-center text-left py-16 px-32">
        <div className="flex-1 w-full">
          <figure className="w-full h-6 mb-16 self-start">
            <img
              src="https://cdn.monday.com/images/logos/logo-full-big.png"
              alt=""
              className="h-full"
            />
          </figure>
        </div>
        <div className="flex-[8] w-full">
          <span className="block mb-6 heading-2_normal w-full letter-spacing-h2 text-mudBlack">
            Create your account
          </span>
          <Form
            //   form={form}
            layout="vertical"
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            className="flex flex-col gap-y-7"
            autoComplete="off">
            <Form.Item
              name="full-name"
              validateStatus=""
              help=""
              className="m-0">
              <label
                htmlFor=""
                className="block mb-1 normal-text-2_base text-mudBlack py-0.5">
                Full name
              </label>
              <Input
                type="text"
                className="h-12 normal-text-1_base border  border-linkWater hover:border-mudBlack focus:border-primary focus:shadow-none rounded-[4px] px-4 py-2"
                placeholder="Enter your full name"
              />
            </Form.Item>
            <Form.Item
              name="full-name"
              validateStatus=""
              help=""
              className="m-0">
              <label
                htmlFor=""
                className="block mb-1 normal-text-2_base text-mudBlack py-0.5">
                Password
              </label>
              <Input
                type="password"
                className="h-12 normal-text-1_base border  border-linkWater hover:border-mudBlack focus:border-primary focus:shadow-none rounded-[4px] px-4 py-2"
                placeholder="Enter at least 8 characters"
              />
            </Form.Item>
            <Form.Item
              name="full-name"
              validateStatus=""
              help=""
              className="m-0">
              <label
                htmlFor=""
                className="block mb-1 normal-text-2_base text-mudBlack py-0.5">
                Account name
              </label>
              <Input
                type="text"
                className="h-12 normal-text-1_base border border-linkWater hover:border-mudBlack focus:border-primary focus:shadow-none rounded-[4px] px-4 py-2"
                placeholder="For example, company's or department's name"
              />
            </Form.Item>
          </Form>
        </div>
        <div className="w-[calc(100%+2px)] bg-white sticky bottom-0 right-0 flex justify-end">
          <button className="bg-primary hover:bg-primaryHover font-normal h-10 text-white hover:!text-white text-base rounded-md flex flex-row justify-center items-center px-4 py-2">
            Continue
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
              aria-hidden="true"
              className="ml-2"
              data-testid="icon">
              <path
                d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <figure className="overflow-hidden bg-red-500 ">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
          alt=""
          className="object-cover w-full h-full p-0 m-0"
        />
      </figure>
    </div>
  );
}
