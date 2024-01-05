import React, { useState } from "react";
import { Checkbox, Form, Input, Radio } from "antd";
import "./style.css";

export default function RegisterQuestionNair() {
  const [page, setPage] = useState("1");
  const [chosenRadio, setChosenRadio] = useState("");
  const [role, setRole] = useState("");

  const questionNairData = {
    page1: {
      question: "Hey there, what brings you here today?",
      note: "",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png",
      visitPurposeRadios: ["Work", "Personal", "School", "Nonprofits"],
      workRoleRadios: [
        "Business owner",
        "Team leader",
        "Team member",
        "Freelancer",
        "Director",
        "C-Level",
        "VP",
      ],
      schoolRoleRadios: [
        "Undergraduate student",
        "Graduate student",
        "Faculty member",
        "Other",
      ],
      nonprofitsRoleRadios: [
        "Board member",
        "Executive",
        "Employee",
        "Volunteer",
        "IT staff",
        "Other",
      ],
    },
    page2: {
      question: "Select what you'd like to manage first",
      note: "You can always add more in the future",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-manage.png",
      radios: [
        "Marketing",
        "Nonprofits",
        "Legal",
        "HR and Recruiting",
        "Education",
        "PMO",
        "Finance",
        "Design and Creative",
        "Operations",
        "IT",
        "Software development",
        "Sales and CRM",
        "Construction",
        "Product management",
        "Other",
      ],
    },
    page3: {
      question: "Select what you'd like to focus on first",
      note: "Help us tailor the best experience for you",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-focus-on.png",
      radios: [
        "Requests adn approvals",
        "Content calendars",
        "Social media",
        "CRM",
        "Portfolio management",
        "Media production",
        "Resource management",
        "Project management",
        "Event management",
        "Marketing operations",
        "Email marketing",
        "Creative",
        "Task management",
        "Goals and strategy",
        "Campaign tracking",
        "Strategic planning",
        "Other",
      ],
    },
    page4: {
      question: "One last question, how did you hear about us?",
      note: "",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png",
      radios: [
        "Consultant",
        "Billboard / Public transit ad",
        "TV / Streaming service",
        "Software review sites",
        "Social media (Facebook,Instagram,Reddit,etc)",
        "Search engine (Google, Bing, etc.)",
        "Friend / Colleague",
        "YouTube ad",
        "Audio ad (Podcast,Spotify)",
        "LinkedIn",
        "Other",
      ],
    },
  };

  const checkingInputs = () => {
    if (page === "1" && chosenRadio !== "personal" && role.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const renderRadios = (array, state, action) => {
    if (array) {
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
    }
  };

  const renderCheckbox = (array) => {
    if (array) {
      return array.map((item, index) => {
        const label = item.charAt(0).toUpperCase() + item.slice(1);
        const value = item.toLowerCase().replace(" ", "-");
        return (
          <Checkbox
            key={index}
            name={value}
            className={`border rounded-full text-nowrap px-4 py-2 inline-flex flex-row !ml-2 !mr-0 mt-4 border-linkWater text-base font-normal text-comet !font-light `}>
            {label}
          </Checkbox>
        );
      });
    }
  };

  const renderButtonsBasedOnPage = (page) => {
    if (page === "1") {
      return (
        <button
          disabled={checkingInputs()}
          onClick={() => {
            const value = +page + 1;
            setPage(value);
            setChosenRadio("");
          }}
          className="bg-primary hover:bg-primaryHover disabled:hover:!text-disable-color disabled:bg-solitude ml-auto disabled:text-disable-color normal-text-1_base  h-10 text-white hover:!text-white  rounded-[4px] flex flex-row justify-center items-center px-4 py-2">
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
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              const value = +page - 1;
              setPage(value);
              setChosenRadio("");
            }}
            className="bg-transparent hover:bg-[#dcdfec] text-mudBlack normal-text-1_base  h-10  border border-linkWater  rounded-[4px] flex flex-row justify-left items-center px-4 py-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
              aria-hidden="true"
              className="mr-2 rotate-180"
              data-testid="icon">
              <path
                d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <button
            onClick={() => {
              const value = +page + 1;
              setPage(value);
              setChosenRadio("");
            }}
            className="bg-primary hover:bg-primaryHover disabled:hover:!text-disable-color disabled:bg-solitude disabled:text-disable-color normal-text-1_base ml-auto  h-10 text-white hover:!text-white  rounded-[4px] flex flex-row justify-center items-center px-4 py-2">
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
        </>
      );
    }
  };

  const renderRolesBasedOnRadio = (radioValue, data) => {
    if (radioValue === "personal" || radioValue.length === 0) {
      return <></>;
    } else {
      let array;

      switch (radioValue) {
        case "work":
          array = data.workRoleRadios;
          break;
        case "school":
          array = data.schoolRoleRadios;
          break;
        default:
          array = data.nonprofitsRoleRadios;
          break;
      }

      return (
        <div>
          <span className="block w-full mb-2 heading-2_normal letter-spacing-h2 text-mudBlack">
            What best describes your current role?
          </span>
          <div className="flex flex-wrap gap-2 -ml-[8px]">
            {renderRadios(array, role, (value) => {
              setRole(value);
            })}
          </div>
        </div>
      );
    }
  };

  const renderImageByPage = (data, pageNumber) => {
    const key = `page${pageNumber}`;
    return (
      <figure className="w-[40%] bg-purple-300 ">
        <img
          src={data[key]?.image}
          alt=""
          className="object-center w-full h-full p-0 m-0"
        />
      </figure>
    );
  };

  const renderQuestionByPage = (data, pageNumber) => {
    const key = `page${pageNumber}`;
    const pageData = data[key];

    switch (key) {
      case "page1":
        return (
          <>
            <div className="w-full overflow-auto">
              <span className="block w-full mb-2 heading-2_normal letter-spacing-h2 text-mudBlack">
                {pageData?.question}
              </span>
              <div className="flex flex-wrap -ml-[8px]">
                {renderRadios(
                  pageData?.visitPurposeRadios,
                  chosenRadio,
                  (value) => {
                    setChosenRadio(value);
                    setRole("");
                  }
                )}
              </div>
            </div>
            {renderRolesBasedOnRadio(chosenRadio, pageData)}
          </>
        );

      case "page4":
        return (
          <>
            <div className="w-full overflow-auto">
              <span className="block w-full mb-2 heading-2_normal letter-spacing-h2 text-mudBlack">
                {pageData?.question}
              </span>
              <div className="flex flex-wrap -ml-[8px]">
                {renderCheckbox(pageData?.radios, chosenRadio, (value) => {})}
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="w-full overflow-auto">
            <span className="block w-full mb-2 heading-2_normal letter-spacing-h2 text-mudBlack">
              {pageData?.question}
            </span>
            <div className="flex flex-wrap -ml-[8px]">
              {renderRadios(pageData?.radios, chosenRadio, (value) => {
                setChosenRadio(value);
                setRole("");
              })}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen flex-row font-normal tracking-[-0.0125rem]">
      <div className="w-[60%] flex flex-col items-center justify-center px-32 py-16 text-left">
        <div className="flex-1 w-full ">
          <figure className="self-start w-full h-6 mb-16">
            <img
              src="https://cdn.monday.com/images/logos/logo-full-big.png"
              alt=""
              className="w-auto h-full overflow-clip overflow-clip-content max-w-none"
            />
          </figure>
        </div>
        <div className="flex-[10] w-full overflow-auto">
          <div className="flex flex-col w-full gap-16">
            {renderQuestionByPage(questionNairData, page)}
          </div>
        </div>
        <div className="flex-1 mt-10 w-[calc(100%+2px)] bg-white sticky bottom-0 right-0 flex justify-start items-end">
          {renderButtonsBasedOnPage(page)}
        </div>
      </div>
      {renderImageByPage(questionNairData, page)}
    </div>
  );
}
