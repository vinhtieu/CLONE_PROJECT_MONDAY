import { Button, Input } from "antd";
import React from "react";

export default function Register() {
  return (
    <div className="grid h-screen grid-flow-col grid-cols-[auto_40%] font-normal">
      <div className="flex flex-col h-full">
        <div className="flex-1 text-center  mx-auto flex items-center justify-center flex-col">
          <h1 className="block mb-2 text-[32px] leading-10 font-medium font-title">
            Welcome to monday.com
          </h1>
          <span className="block mb-12 leading-[30px] font-title">
            Get started - it's free. No credit card needed.
          </span>
          <div className="px-[.5625rem] space-y-4 w-full">
            <Button className="flex items-center justify-center w-full h-10 space-x-2">
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
                alt="google icon"
                className="inline-block w-4 p-0 m-0 text-base aspect-square"
              />
              <span className="text-base font-normal">
                Continue with Google
              </span>
            </Button>
            <div className="flex flex-row items-center gap-2">
              <div className="h-1/2 border border-t-[#d0d4e4] w-full"></div>
              Or
              <div className="h-1/2 border border-t-[#d0d4e4] w-full"></div>
            </div>
            <Input
              className="h-10 placeholder:text-[#323338] border-[#c3c6d4] text-base font-normal"
              placeholder="name@company.com"></Input>
            <Button
              type="primary"
              className="w-full bg-[#0273ea] h-10 font-normal text-base">
              Continue
            </Button>
            <div>
              <span>By proceeding, you agree to the</span>
              <div>
                <a
                  href="#!"
                  className="text-[#1f76c2] hover:underline font-medium">
                  Terms of Service
                </a>
                <span className="px-1">and</span>
                <a
                  href="#!"
                  className="text-[#1f76c2] hover:underline font-medium">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block mb-16 text-center">
          <span className="px-1">Already have an account?</span>
          <a href="#!" className="text-[#5e9cd3] hover:underline font-medium">
            Log in
          </a>
        </div>
      </div>
      <figure className="overflow-hidden bg-red-500 ">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
          alt=""
          className="object-cover w-full h-full p-0 m-0"
        />
      </figure>
    </div>
  );
}
