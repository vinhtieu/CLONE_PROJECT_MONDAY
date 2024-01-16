import { Button, Input } from "antd";
import React, { useState } from "react";
import "./style.scss";

export default function CreateYourBoard() {
  const [boardName, setBoardName] = useState("");
  const renderColumnAndRow = (numCol, numRow, color) => {
    let tableCells = [];
    let tableCell;

    const generateContent = (col, row, colLength, rowLength) => {
      if (col === 0) return "w-[70%]";

      if (col === colLength || row === rowLength) return "";

      return "w-[30%]";
    };

    const generateIcon = (col, row, colLength) => {
      if (col === colLength && row === 0) {
        return (
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width={16}
            height={16}
            aria-hidden="true"
            className="mx-3"
            data-testid="icon"
            style={{ color: "var(--color-asphalt_grey)" }}>
            <path
              d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        );
      }
      return <></>;
    };

    const generateCss = (col, color) => {
      if (col === 0) {
        return { gridColumn: `${+col + 1}`, borderLeft: `6px solid ${color}` };
      }

      return { gridColumn: `${+col + 1}` };
    };

    const generateCellStyle = (col, row, rowLength) => {
      if (col === 0) {
        if (row === 0) {
          return `rounded-tl-[8px] px-6 !justify-start border-wolfGray border-t-solid border-t-[1px]`;
        }
        if (row === rowLength) {
          return `rounded-bl-[8px] px-6 !justify-start border-wolfGray border-solid border-t-[1px]  border-b-[1px] opacity-50`;
        }

        return "px-6 !justify-start border-wolfGray border-solid border-t-[1px]";
      } else {
        if (row === rowLength) {
          return `border-wolfGray border-solid  !border-b-[1px] !border-t-[1px] !border-r-0 opacity-50`;
        } else {
          return "order-wolfGray border-solid !border-t-[1px] border-b-0 border-l-[1px]";
        }
      }
    };

    for (let row = 0, rowLength = numRow; row <= rowLength; row++) {
      for (let col = 0, colLength = numCol; col <= colLength; col++) {
        const content = generateContent(col, row, colLength, rowLength);
        const icon = generateIcon(col, row, colLength);
        const inlineCss = generateCss(col, color);
        const twClass = generateCellStyle(col, row, rowLength);
        tableCell = (
          <div
            key={`${row},${col}`}
            style={inlineCss}
            className={`h-9 flex justify-center items-center w-full ${twClass}`}>
            <div className={`rounded-lg h-1 bg-linkWater  ${content}`}></div>
            {icon}
          </div>
        );

        tableCells.push(tableCell);
      }
    }
    return tableCells;
  };

  const renderDummyTable = () => {
    return (
      <>
        <div className=" h-[551px] w-[90%] [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] bg-white flex flex-col  drop-shadow transition-transform ease-in-out  duration-200 pt-8 pl-8 absolute top-1/2 right-0 -translate-y-1/2 shadow-[0px_4px_6px_-4px_rgba(0, 0, 0, 0.1)]">
          <div>
            <div className="flex items-center w-full h-9">
              {boardName.length > 0 ? (
                <h1 className="heading-1_normal letter-spacing-h1 text-comet">
                  {boardName}
                </h1>
              ) : (
                <div className="w-[30%] h-2 rounded-lg bg-linkWater"></div>
              )}
            </div>
            <div className="h-[42px] mt-2 mr-8 mb-4"></div>
          </div>
          <div className="grid [grid-template-columns:170px_minmax(auto,200px)_minmax(auto,200px)_minmax(auto,200px)_auto] ">
            <div
              style={{ gridColumn: "1" }}
              className="flex items-center mb-2 h-9">
              <div className=" bg-[rgb(87,155,252)] w-[70%] h-[6px] rounded-lg col-span-full"></div>
            </div>

            {renderColumnAndRow(4, 4, "#579bfc")}
            <div
              style={{ gridColumn: "1" }}
              className="flex items-center mt-6 mb-2 h-9">
              <div className=" bg-[rgb(0,200,117)] w-[70%] h-[6px] rounded-lg"></div>
            </div>
            {renderColumnAndRow(4, 1, "rgb(0,200,117)")}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-row h-screen p-[2px] create-your-board-page">
      <div className="w-[50%] h-full flex">
        <div className=" h-[510px] w-[440px] flex flex-col justify-between m-auto">
          <figure className="pb-16">
            <img
              className="h-6"
              src="https://cdn.monday.com/images/logos/logo-full-big.png"
              alt=""
            />
          </figure>
          <div className="flex flex-col justify-between h-full">
            <div className="w-full">
              <span className="block pb-6 heading-2_normal letter-spacing-h2 text-mudBlack">
                Let's start working together
              </span>
              <span className="normal-text-2_base text-mudBlack block pb-[6px]">
                Give your board a name, e.g. marketing plan, sales pipeline,
                quarterly roadmap...
              </span>
              <Input
                onChange={(e) => {
                  const name = e.target.value;
                  setBoardName(name);
                }}
                placeholder="My first board"
                className="py-2 px-4 rounded normal-text-1_base h-10 focus:shadow-none outline-none focus:outline-none focus:border-primary border-linkWater hover:border-mudBlack placeholder:text-mudBlack text-mudBlack transition-[border-color] duration-300 ease-in"
              />
            </div>
            <div className="mb-auto">
              <span className="block mt-12 mb-8 p-6 bg-hawkesBlue rounded-lg text-[15px] leading-[22.5px]">
                In monday.com, "boards" are the place where all your content
                lives.
              </span>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Button
              disabled={true}
              className="flex flex-row items-center h-10 px-4 py-2 border-none rounded normal-text-1_base disabled:bg-solitude disabled:text-disable-color">
              Next
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20px"
                height="20px"
                role="button"
                tabIndex="-1"
                aria-hidden="false"
                className="ml-2 -rotate-90"
                data-testid="icon">
                <path
                  d="M10.5303 12.5303L10 12L9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303ZM10 10.9393L6.53033 7.46967C6.23744 7.17678 5.76256 7.17678 5.46967 7.46967C5.17678 7.76256 5.17678 8.23744 5.46967 8.53033L9.46967 12.5303L10 12L10.5303 12.5303L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L10 10.9393Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full relative p-[2px]">
        <div className="p-1 bg-hawkesBlue rounded-[10px] h-full overflow-hidden">
          <Button
            // groupBorderColor="red"
            className="flex items-center justify-center float-right w-10 h-10 p-0 bg-transparent border-0 hover:bg-moonlightBay">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
              aria-hidden="true"
              className
              data-testid="icon">
              <path
                d="M3.53033 2.46967C3.23744 2.17678 2.76256 2.17678 2.46967 2.46967C2.17678 2.76256 2.17678 3.23744 2.46967 3.53033L8.97639 10.037L2.47093 16.5425C2.17804 16.8354 2.17804 17.3103 2.47093 17.6032C2.76382 17.8961 3.2387 17.8961 3.53159 17.6032L10.037 11.0977L16.5425 17.6032C16.8354 17.8961 17.3103 17.8961 17.6032 17.6032C17.8961 17.3103 17.8961 16.8354 17.6032 16.5425L11.0977 10.037L17.6044 3.53033C17.8973 3.23744 17.8973 2.76256 17.6044 2.46967C17.3115 2.17678 16.8367 2.17678 16.5438 2.46967L10.037 8.97639L3.53033 2.46967Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          {renderDummyTable()}
        </div>
      </div>
    </div>
  );
}
