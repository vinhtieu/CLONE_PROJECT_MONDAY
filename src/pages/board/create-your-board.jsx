import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { addColumns } from "../../redux/slices/customTableSlice";

export default function CreateYourBoard() {
  const [boardName, setBoardName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [pageNum, setPageNum] = useState("1");
  const inquiries = useSelector((state) => state.customTable.designInquiries);
  const table = useSelector((state) => state.customTable.customData);
  const dispatch = useDispatch();

  const handleSelectColumn = (column) => {
    const isExisted = table.columns.includes(column);
    if (isExisted) {
      return;
    } else {
      const value = column.toLowerCase();
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

    const generateMultipleSelects = (data) => {
      return data.map((option, i) => {
        const value = option?.label.toLowerCase();
        return (
          <div className="inline-block" key={i}>
            <Button
              onClick={() => {
                handleSelectColumn(option?.label);
              }}
              className={`${
                table.columns.includes(value)
                  ? "!border-2 !border-primary hover:!border-primary"
                  : "!border !border-solid !border-linkWater"
              } flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
              {option?.icon}
              {option?.label}
            </Button>
          </div>
        );
      });
    };

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
            </>
          );
        case "2":
          return (
            <div className="flex flex-row flex-wrap mt-8 outline-none gap-y-4 gap-x-2">
              {generateMultipleSelects(data)}
            </div>
          );
        // return data.pages[index].options.map(() => {});
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

    const generateSubTitle = (page, data, index) => {
      const subtitle = data.pages[index]?.note;
      switch (page) {
        case "1":
          return (
            <span className="normal-text-2_base text-mudBlack block pb-[6px]">
              {subtitle}
            </span>
          );
        case "2":
          return (
            <span className="block mt-2 normal-text-2_base text-mudBlack">
              {subtitle}
            </span>
          );
        default:
          break;
      }
    };

    return (
      <>
        <div className="flex flex-col justify-between h-full">
          <div className="w-full">
            <h1 className="block mb-6 heading-2_normal letter-spacing-h2 text-mudBlack">
              {data.pages[index]?.title}
            </h1>
            <span className="normal-text-2_base text-mudBlack block pb-[6px]">
              {data.pages[index]?.note}
            </span>
            {generateOptions(page, data.pages[index].options, index)}
          </div>
          <div className="mb-auto">
            <span className="block mt-12 mb-8 p-6 bg-hawkesBlue rounded-lg text-[15px] leading-[22.5px]">
              {data.pages[index]?.desc}
            </span>
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
          {renderSettingLayout(pageNum, inquiries)}
          {renderButtons(pageNum)}
        </div>
      </div>
      <div className="w-[50%] h-full relative p-[2px]">
        <div className="p-1 bg-hawkesBlue rounded-[10px] h-full overflow-hidden">
          <Button
            // groupBorderColor="red"
            className="flex items-center justify-center float-right w-10 h-10 p-0 bg-transparent border-0 closeBtn hover:bg-moonlightBay">
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
