import React, { useState } from "react";
import { Form, Input, Radio } from "antd";
import "./style.css";

export default function RegisterQuestion1() {
  const [chosenRadio, setChosenRadio] = useState("");
  const [role, setRole] = useState("");

  const visitPurposes = ["Work", "Personal", "School", "Nonprofits"];

  const workRoles = [
    "Business owner",
    "Team leader",
    "Team member",
    "Freelancer",
    "Director",
    "C-Level",
    "VP",
  ];

  const schoolRoles = [
    "Undergraduate student",
    "Graduate student",
    "Faculty member",
    "Other",
  ];

  const nonprofitsRoles = [
    "Board member",
    "Executive",
    "Employee",
    "Volunteer",
    "IT staff",
    "Other",
  ];

  const renderRadios = (array, state, action) => {
    return array.map((item, index) => {
      const label = item.charAt(0).toUpperCase() + item.slice(1);
      const value = item.toLowerCase().replace(" ", "-");
      return (
        <Radio
          key={index}
          onClick={(e) => {
            action(e.target.name);
          }}
          name={value}
          checked={state === value ? true : false}
          className={`border rounded-full px-4 py-2 inline-flex flex-row ml-2 mr-0 mt-4 border-linkWater normal-text-2_base !font-light text-comet`}>
          {label}
        </Radio>
      );
    });
  };

  const renderRolesBasedOnRadio = (radioValue) => {
    if (radioValue === "personal" || radioValue.length === 0) {
      return <></>;
    } else {
      let data;

      switch (radioValue) {
        case "work":
          data = workRoles;
          break;
        case "school":
          data = schoolRoles;
          break;
        default:
          data = nonprofitsRoles;
          break;
      }

      return (
        <div>
          <span className="block mb-2 heading-2_normal w-full letter-spacing-h2 text-mudBlack">
            What best describes your current role?
          </span>
          <div className="flex flex-wrap gap-2 -ml-[8px]">
            {renderRadios(data, role, (value) => {
              setRole(value);
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="grid h-screen grid-flow-col grid-cols-[auto_40%] font-normal tracking-[-0.0125rem]">
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
        <div className="flex-[10] w-full">
          <div className="flex flex-col gap-16">
            <div>
              <span className="block mb-2 heading-2_normal w-full letter-spacing-h2 text-mudBlack">
                Hey there, what brings you here today?
              </span>
              <div className="flex flex-wrap -ml-[8px]">
                {renderRadios(visitPurposes, chosenRadio, (value) => {
                  setChosenRadio(value);
                  setRole("");
                })}
              </div>
            </div>
            {renderRolesBasedOnRadio(chosenRadio)}
          </div>
        </div>
        <div className="flex-1 mt-10 w-[calc(100%+2px)] mt- bg-white sticky bottom-0 right-0 flex justify-end items-end">
          <button
            disabled={chosenRadio !== "personal" && role.length === 0}
            className="bg-primary hover:bg-primaryHover disabled:hover:!text-disable-color disabled:bg-solitude disabled:text-disable-color normal-text-1_base  h-10 text-white hover:!text-white  rounded-[4px] flex flex-row justify-center items-center px-4 py-2">
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
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
          alt=""
          className="object-center w-full h-full p-0 m-0"
        />
      </figure>
    </div>
  );
}
