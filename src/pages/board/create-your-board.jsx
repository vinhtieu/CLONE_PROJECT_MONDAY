import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { addColumns, deleteColumns } from "../../redux/slices/customTableSlice";

export default function CreateYourBoard() {
  const [boardName, setBoardName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [pageNum, setPageNum] = useState("1");
  const inquiries = useSelector((state) => state.customTable.designInquiries);
  const table = useSelector((state) => state.customTable.customData);
  const dispatch = useDispatch();

  const handleSelectColumn = (column) => {
    const value = column.toLowerCase();
    const index = table.columns.indexOf(value);
    if (index >= 0) {
      dispatch(deleteColumns(index));
    } else {
      dispatch(addColumns(value));
    }
  };

  const toPrevPage = () => {
    const value = +pageNum - 1;
    if (value <= 1) {
      setPageNum("1");
    } else {
      setPageNum(`${value}`);
    }
  };

  const toNextPage = () => {
    const value = +pageNum + 1;
    if (value >= 6) {
      setPageNum("6");
    } else {
      setPageNum(`${value}`);
    }
  };

  const renderButtons = (page) => {
    switch (page) {
      case "1":
        return (
          <div className="flex flex-row-reverse">
            <Button
              onClick={toNextPage}
              disabled={isDisabled}
              className="flex flex-row items-center h-10 px-4 py-2 text-white border-none rounded nextBtn normal-text-1_base bg-primary disabled:bg-solitude disabled:text-disable-color">
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
        );
      case "6":
        return (
          <div className="flex flex-row-reverse">
            <Button className="flex flex-row items-center h-10 px-4 py-2 text-white border-none rounded nextBtn normal-text-1_base bg-primary disabled:bg-solitude disabled:text-disable-color">
              Get started
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
        );
      default:
        return (
          <div className="flex justify-between">
            <Button
              onClick={toPrevPage}
              disabled={isDisabled}
              className="flex flex-row items-center h-10 px-4 py-2 border rounded border-linkWater hover:!border-linkWater normal-text-1_base hover:bg-moonlightBay text-mudBlack hover:!text-mudBlack disabled:bg-solitude disabled:text-disable-color">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20px"
                height="20px"
                role="button"
                tabIndex="-1"
                aria-hidden="false"
                className="mr-2 rotate-90"
                data-testid="icon">
                <path
                  d="M10.5303 12.5303L10 12L9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303ZM10 10.9393L6.53033 7.46967C6.23744 7.17678 5.76256 7.17678 5.46967 7.46967C5.17678 7.76256 5.17678 8.23744 5.46967 8.53033L9.46967 12.5303L10 12L10.5303 12.5303L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L10 10.9393Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"></path>
              </svg>
              Back
            </Button>
            <Button
              onClick={toNextPage}
              disabled={isDisabled}
              className="flex flex-row items-center h-10 px-4 py-2 text-white border-none rounded nextBtn normal-text-1_base bg-primary disabled:bg-solitude disabled:text-disable-color">
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
        );
    }
  };

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

  const renderDummyTable = (page) => {
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

  const renderSettingLayout = (page, data) => {
    let index = +page - 1 > 0 ? `${+page - 1}` : "0";

    const generateOptions = (page, data, index) => {
      switch (page) {
        case "1":
          return (
            <>
              <Input
                allowClear={{
                  clearIcon: (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="18px"
                      height="18px"
                      aria-hidden="true"
                      aria-label
                      className="icon_f5f5ef7fbd icon_23181f7796 noFocusStyle_a362fcbc9b"
                      data-testid="icon">
                      <path
                        d="M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L8.62562 9.68628L5.47045 12.8415C5.17756 13.1343 5.17756 13.6092 5.47045 13.9021C5.76334 14.195 6.23822 14.195 6.53111 13.9021L9.68628 10.7469L12.8415 13.9021C13.1343 14.195 13.6092 14.195 13.9021 13.9021C14.195 13.6092 14.195 13.1343 13.9021 12.8415L10.7469 9.68628L13.9029 6.53033C14.1958 6.23744 14.1958 5.76256 13.9029 5.46967C13.61 5.17678 13.1351 5.17678 12.8422 5.46967L9.68628 8.62562L6.53033 5.46967Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                }}
                onChange={(e) => {
                  const name = e.target.value;
                  setBoardName(name);
                  setIsDisabled(true);

                  if (name) {
                    console.log(name);
                    setIsDisabled(false);
                  }
                }}
                placeholder="My first board"
                className="py-2 px-4 rounded normal-text-1_base h-10 focus:shadow-none outline-none focus:outline-none focus:border-primary border-linkWater hover:border-mudBlack placeholder:text-mudBlack text-mudBlack transition-[border-color] duration-300 ease-in"
              />
              {/* <div className="block m-[16px_0px_16px] p-[13px] bg-hawkesBlue rounded-lg text-[15px] leading-[22.5px]"> */}
              {/* {data.pages[index]?.desc} */}
              {/* </div> */}
            </>
          );
        case "2":
          return (
            <>
              <div className="flex flex-row flex-wrap mt-4 outline-none gap-y-4 gap-x-2">
                <div className="inline-block">
                  <Button
                    name="owner"
                    onClick={() => {
                      handleSelectColumn("owner");
                    }}
                    className={`${
                      table.columns.includes("owner")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-skyBlue">
                      <svg
                        viewBox="0 0 20 20"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className=""
                        data-testid="icon">
                        <path
                          d="M10.2501 2.0498C9.74254 2.0498 9.2399 2.14979 8.77093 2.34404 8.30196 2.53829 7.87584 2.82302 7.51691 3.18195 7.15798 3.54088 6.87325 3.967 6.679 4.43597 6.48475 4.90494 6.38477 5.40758 6.38477 5.91519 6.38477 6.4228 6.48475 6.92544 6.679 7.39441 6.87325 7.86338 7.15798 8.28949 7.51691 8.64843 7.87584 9.00736 8.30196 9.29209 8.77093 9.48634 9.2399 9.68059 9.74254 9.78057 10.2501 9.78057 10.7578 9.78057 11.2604 9.68059 11.7294 9.48634 12.1983 9.29208 12.6245 9.00736 12.9834 8.64843 13.3423 8.28949 13.627 7.86338 13.8213 7.39441 14.0156 6.92544 14.1155 6.4228 14.1155 5.91519 14.1155 5.40758 14.0156 4.90494 13.8213 4.43597 13.627 3.967 13.3423 3.54088 12.9834 3.18195 12.6245 2.82302 12.1983 2.53829 11.7294 2.34404 11.2604 2.14979 10.7578 2.0498 10.2501 2.0498zM9.34496 3.72986C9.63194 3.61099 9.93952 3.5498 10.2501 3.5498 10.5608 3.5498 10.8684 3.61099 11.1553 3.72986 11.4423 3.84873 11.7031 4.02296 11.9227 4.24261 12.1424 4.46226 12.3166 4.72301 12.4355 5.01 12.5544 5.29698 12.6155 5.60456 12.6155 5.91519 12.6155 6.22582 12.5544 6.5334 12.4355 6.82038 12.3166 7.10736 12.1424 7.36812 11.9227 7.58777 11.7031 7.80742 11.4423 7.98165 11.1553 8.10052 10.8684 8.21939 10.5608 8.28057 10.2501 8.28057 9.93952 8.28057 9.63194 8.21939 9.34496 8.10052 9.05798 7.98165 8.79722 7.80742 8.57757 7.58777 8.35792 7.36812 8.18369 7.10736 8.06482 6.82038 7.94595 6.5334 7.88477 6.22582 7.88477 5.91519 7.88477 5.60456 7.94595 5.29698 8.06482 5.01 8.18369 4.72301 8.35792 4.46226 8.57757 4.24261 8.79722 4.02296 9.05797 3.84873 9.34496 3.72986zM9.83935 10.7312C9.8512 10.7307 9.86306 10.7305 9.87491 10.7305H10.6247C10.6384 10.7305 10.652 10.7308 10.6655 10.7314 11.7943 10.7771 12.8913 11.0775 13.8525 11.6041 14.8151 12.1314 15.6096 12.8682 16.1604 13.7443 16.7113 14.6203 17.0003 15.6068 17 16.6097V17.2981C17 17.6856 16.6456 17.9997 16.2084 17.9997H10.6251L10.6201 17.9997H4.29163C3.85443 17.9997 3.5 17.6856 3.5 17.2981V16.6097C3.4997 15.6068 3.7887 14.6203 4.33955 13.7443 4.89044 12.8682 5.68491 12.1314 6.64751 11.6041 7.6101 11.0767 8.70884 10.7762 9.83935 10.7312zM9.89335 12.1337H10.6063C11.4613 12.1703 12.2918 12.3987 13.02 12.7977 13.753 13.1992 14.358 13.7602 14.7774 14.4274 15.1946 15.0907 15.4145 15.8372 15.4167 16.5965H10.6296L10.6247 16.5965H5.08328C5.08548 15.8372 5.30542 15.0907 5.72255 14.4273 6.14204 13.7602 6.747 13.1992 7.47999 12.7977 8.20811 12.3988 9.03853 12.1703 9.89335 12.1337zM5.08326 16.6066L5.08328 16.5965C5.08327 16.5998 5.08327 16.6032 5.08326 16.6066zM15.4167 16.6066C15.4167 16.6032 15.4167 16.5999 15.4167 16.5965L15.4167 16.6066z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Owner
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="status"
                    onClick={() => {
                      handleSelectColumn("status");
                    }}
                    className={`${
                      table.columns.includes("status")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-darkPastelGreen">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                        data-testid="icon">
                        <g clipPath="url(#clip0)">
                          <path
                            d="M1.99805 2.77233C1.99805 2.34471 2.34471 1.99805 2.77233 1.99805H17.2257C17.6533 1.99805 18 2.34471 18 2.77233V7.58989V12.4079V17.2257C18 17.6533 17.6533 18 17.2257 18H2.77233C2.34471 18 1.99805 17.6533 1.99805 17.2257V12.4079V7.58989V2.77233ZM3.54662 13.1822V16.4514H16.4514V13.1822H3.54662ZM16.4514 11.6336H3.54662V8.36417H16.4514V11.6336ZM16.4514 3.54662V6.8156H3.54662V3.54662H16.4514Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path
                              transform="translate(2 2)"
                              d="M0 0H16V16H0z"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    Status
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="due-date"
                    onClick={(e) => {
                      handleSelectColumn("due-date");
                    }}
                    className={`${
                      table.columns.includes("due-date")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-yellowGreen">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                        data-testid="icon">
                        <path
                          d="M6.83801 3C6.83801 2.58579 6.50223 2.25 6.08801 2.25C5.6738 2.25 5.33801 2.58579 5.33801 3V5.15381V7.30769C5.33801 7.72191 5.6738 8.05769 6.08801 8.05769C6.50223 8.05769 6.83801 7.72191 6.83801 7.30769V5.90381H11.4726C11.8868 5.90381 12.2226 5.56802 12.2226 5.15381C12.2226 4.73959 11.8868 4.40381 11.4726 4.40381H6.83801V3ZM2.64227 4.9389C2.98489 4.59629 3.44957 4.40381 3.9341 4.40381C4.34831 4.40381 4.6841 4.73959 4.6841 5.15381C4.6841 5.56802 4.34831 5.90381 3.9341 5.90381C3.8474 5.90381 3.76424 5.93825 3.70293 5.99956C3.64162 6.06087 3.60718 6.14403 3.60718 6.23073V8.71149H16.1072V6.23073C16.1072 6.14403 16.0727 6.06087 16.0114 5.99956C15.9501 5.93825 15.867 5.90381 15.7803 5.90381H14.3765V7.30769C14.3765 7.72191 14.0407 8.05769 13.6265 8.05769C13.2123 8.05769 12.8765 7.72191 12.8765 7.30769V5.16301L12.8764 5.15381L12.8765 5.1446V3C12.8765 2.58579 13.2123 2.25 13.6265 2.25C14.0407 2.25 14.3765 2.58579 14.3765 3V4.40381H15.7803C16.2648 4.40381 16.7295 4.59629 17.0721 4.9389C17.4147 5.28152 17.6072 5.7462 17.6072 6.23073V9.46149V15.923C17.6072 16.4076 17.4147 16.8723 17.0721 17.2149C16.7295 17.5575 16.2648 17.75 15.7803 17.75H3.9341C3.44957 17.75 2.98489 17.5575 2.64227 17.2149C2.29966 16.8723 2.10718 16.4076 2.10718 15.923V9.46149V6.23073C2.10718 5.7462 2.29966 5.28152 2.64227 4.9389ZM3.60718 15.923V10.2115H16.1072V15.923C16.1072 16.0097 16.0727 16.0929 16.0114 16.1542C15.9501 16.2155 15.867 16.25 15.7803 16.25H3.9341C3.8474 16.25 3.76424 16.2155 3.70293 16.1542C3.64162 16.0929 3.60718 16.0097 3.60718 15.923Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Due date
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="budget"
                    onClick={(e) => {
                      handleSelectColumn("budget");
                    }}
                    className={`${
                      table.columns.includes("budget")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-tangerine">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                        data-testid="icon">
                        <g fill="currentColor" clipPath="url(#clip0)">
                          <path d="M4.86947 8.59888H3.56146V3.55694L2 4.04122V2.97761L4.72917 2H4.86947V8.59888zM11.7107 13.3678H7.19375V12.4717L9.32549 10.1997C9.61817 9.87983 9.83391 9.60072 9.97271 9.36236 10.1145 9.12399 10.1854 8.89769 10.1854 8.68346 10.1854 8.39078 10.1115 8.16146 9.96365 7.99551 9.81581 7.82654 9.60459 7.74205 9.33002 7.74205 9.03432 7.74205 8.80048 7.84464 8.62849 8.04982 8.45952 8.25198 8.37503 8.51901 8.37503 8.85092H7.0625C7.0625 8.44962 7.15755 8.08301 7.34764 7.75111 7.54075 7.4192 7.8123 7.15971 8.16231 6.97264 8.51232 6.78255 8.9091 6.6875 9.35265 6.6875 10.0315 6.6875 10.5581 6.85044 10.9322 7.17631 11.3094 7.50218 11.498 7.96232 11.498 8.55673 11.498 8.8826 11.4135 9.21451 11.2445 9.55245 11.0755 9.89039 10.7859 10.2841 10.3755 10.7337L8.87742 12.3133H11.7107V13.3678zM14.9265 14.0561H15.6235C15.9555 14.0561 16.2014 13.9731 16.3613 13.8072 16.5212 13.6412 16.6012 13.421 16.6012 13.1464 16.6012 12.8809 16.5212 12.6742 16.3613 12.5263 16.2044 12.3785 15.9871 12.3046 15.7095 12.3046 15.4591 12.3046 15.2494 12.374 15.0804 12.5127 14.9115 12.6485 14.827 12.8266 14.827 13.0468H13.519C13.519 12.7028 13.611 12.3951 13.7951 12.1235 13.9821 11.8489 14.2416 11.6347 14.5735 11.4808 14.9084 11.3269 15.2766 11.25 15.6779 11.25 16.3749 11.25 16.921 11.4175 17.3163 11.7524 17.7115 12.0843 17.9092 12.5429 17.9092 13.1283 17.9092 13.43 17.8171 13.7076 17.6331 13.9611 17.449 14.2145 17.2076 14.4091 16.9089 14.5449 17.2801 14.6777 17.5561 14.8768 17.7372 15.1423 17.9212 15.4079 18.0133 15.7217 18.0133 16.0837 18.0133 16.6691 17.799 17.1383 17.3706 17.4913 16.9451 17.8444 16.3809 18.0209 15.6779 18.0209 15.0201 18.0209 14.4815 17.8474 14.0621 17.5004 13.6457 17.1534 13.4375 16.6948 13.4375 16.1245H14.7455C14.7455 16.3719 14.8375 16.5741 15.0216 16.731 15.2087 16.8879 15.438 16.9663 15.7095 16.9663 16.0203 16.9663 16.2632 16.8848 16.4382 16.7219 16.6162 16.556 16.7053 16.3372 16.7053 16.0656 16.7053 15.4079 16.3432 15.079 15.619 15.079H14.9265V14.0561z" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path
                              transform="translate(2 2)"
                              d="M0 0H16V16H0z"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    Budget
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="last-updated"
                    onClick={(e) => {
                      handleSelectColumn("last-updated");
                    }}
                    className={`${
                      table.columns.includes("last-updated")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-yellowGreen">
                      <img
                        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/last-updated-icon.svg"
                        alt=""
                      />
                    </div>
                    Last updated
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="files"
                    onClick={(e) => {
                      handleSelectColumn("files");
                    }}
                    className={`${
                      table.columns.includes("files")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-yellowGreen">
                      <img
                        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/files-icon.svg"
                        alt=""
                      />
                    </div>
                    Files
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="timeline"
                    onClick={(e) => {
                      handleSelectColumn("timeline");
                    }}
                    className={`${
                      table.columns.includes("timeline")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-mayaBlue">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                        data-testid="icon">
                        <path
                          d="M4.75 5C4.75 4.86193 4.86193 4.75 5 4.75H9.24961V15.2498H7.5C7.08579 15.2498 6.75 15.5856 6.75 15.9998C6.75 16.414 7.08579 16.7498 7.5 16.7498H9.98232L9.99961 16.75L10.0169 16.7498H12.5C12.9142 16.7498 13.25 16.414 13.25 15.9998C13.25 15.5856 12.9142 15.2498 12.5 15.2498H10.7496V4.75H15C15.1381 4.75 15.25 4.86193 15.25 5V6C15.25 6.41421 15.5858 6.75 16 6.75C16.4142 6.75 16.75 6.41421 16.75 6V5C16.75 4.0335 15.9665 3.25 15 3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V6C3.25 6.41421 3.58579 6.75 4 6.75C4.41421 6.75 4.75 6.41421 4.75 6V5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    Timeline
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="subtitles"
                    onClick={(e) => {
                      handleSelectColumn("subtitles");
                    }}
                    className={`${
                      table.columns.includes("subtitles")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-mediumPurple">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
                        data-testid="icon">
                        <path
                          d="M13 5H4.67871M16.3205 10.2148H8.49902M10.5 15.4287H5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    subtitles
                  </Button>
                </div>
                <div className="inline-block">
                  <Button
                    name="priority"
                    onClick={(e) => {
                      handleSelectColumn("priority");
                    }}
                    className={`${
                      table.columns.includes("priority")
                        ? "!border-2 !border-primary hover:!border-primary"
                        : "!border !border-solid !border-linkWater"
                    }
              transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
              flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                    <div className="flex items-center justify-center w-6 h-6 mr-2 text-white rounded bg-yellowGreen">
                      <img
                        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/priority-icon.svg"
                        alt=""
                      />
                    </div>
                    Priority
                  </Button>
                </div>
              </div>
              {(() => {
                const lastIndex = table.columns.length - 1;
                const lastItem = table.columns[lastIndex];

                if (lastItem) {
                  const element = data.filter((item) => {
                    if (item.id === lastItem) return item;
                    return;
                  });

                  return (
                    <div className="block m-[16px_0px_16px] p-[13px] bg-hawkesBlue rounded-lg normal-text-2_base">
                      {element[0].desc}
                    </div>
                  );
                }
              })()}
            </>
          );
        case "3":
          return <div>text</div>;
        case "4":
          return <div>text</div>;
        case "5":
          return <div>text</div>;
        case "6":
          return <div>text</div>;
        default:
          break;
      }
    };

    const generateContent = (page, data, index) => {
      const subtitle = data.pages[index]?.subtitle;
      const title = data.pages[index]?.title;
      switch (page) {
        case "1":
          return (
            <>
              <div className="w-full mb-6">
                <h1 className="block heading-2_normal letter-spacing-h2 text-mudBlack">
                  {title}
                </h1>
              </div>
              <div className="">
                <div className="pb-1">
                  <span className="block py-0.5 normal-text-2_base text-mudBlack">
                    {subtitle}
                  </span>
                </div>
                {generateOptions(page, data.pages[index].options, index)}
              </div>
              <div className="mb-auto">
                <div className="block mt-12 mb-8 p-6 bg-hawkesBlue rounded-lg text-[15px] leading-[22.5px]">
                  {data.pages[index]?.desc}
                </div>
              </div>
            </>
          );
        case "2":
          return (
            <>
              <div className="w-full mb-6">
                <h1 className="block heading-2_normal letter-spacing-h2 text-mudBlack">
                  {title}
                </h1>
                <h6 className="block mt-2 normal-text-3 text-mudBlack">
                  {subtitle}
                </h6>
              </div>
              <div className="mt-4">
                {generateOptions(page, data.pages[index].options, index)}
              </div>
            </>
          );
        case "3":
          return (
            <>
              <div className="w-full mb-6">
                <h1 className="block heading-2_normal letter-spacing-h2 text-mudBlack">
                  {title}
                </h1>
              </div>
              <div className="">
                {generateOptions(page, data.pages[index].options, index)}
              </div>
              <div className="mb-auto">
                <div className="block mt-4 mb-8 p-6 bg-hawkesBlue rounded-lg text-[15px] leading-[22.5px]">
                  {data.pages[index]?.desc}
                </div>
              </div>
            </>
          );
      }
    };

    return (
      <>
        <div className="flex flex-col  h-full">
          {generateContent(page, data, index)}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-row h-screen p-[2px] create-your-board-page">
      <div className="w-[50%] h-full flex">
        <div className=" h-[510px] w-[440px] flex flex-col m-auto">
          <figure className="pb-16">
            <img
              className="h-6"
              src="https://cdn.monday.com/images/logos/logo-full-big.png"
              alt=""
            />
          </figure>
          <div className="h-full">
            {renderSettingLayout(pageNum, inquiries)}
          </div>
          <div>{renderButtons(pageNum)}</div>
        </div>
      </div>
      <div className="w-[50%] h-full relative p-[2px]">
        <div className="p-1 bg-hawkesBlue rounded-[10px] h-full overflow-hidden">
          <Button className="flex items-center justify-center float-right w-10 h-10 p-0 bg-transparent border-0 closeBtn hover:bg-moonlightBay">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
              aria-hidden="true"
              className=""
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
