import { Button, Input, Radio } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  addColumns,
  deleteColumns,
  selectViewLayout,
} from "../../redux/slices/customTableSlice";

import {
  ArrowIcon,
  BarsStaggeredIcon,
  CalendarIcon,
  CardIcon,
  KanbanIcon,
  LeftBarsStaggeredIcon,
  PlusIcon,
  TableIcon,
  X_Icon,
  FileIcon,
  NumberIcon,
  T_Icon,
  ClockIcon,
  PersonIcon,
  TriangleIcon,
} from "../../components/Icon";
import CustomInput from "../../components";

export default function CreateYourBoard() {
  const [boardName, setBoardName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [radioCustomValue, setRadioCustomValue] = useState("");
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

  const handleSelectViewLayout = (layout) => {
    const value = layout.toLowerCase();
    dispatch(selectViewLayout(value));
  };

  const handleClickOnRadio = () => {};

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

    const generateDesc = (page, data, index) => {
      switch (page) {
        case "2":
          const lastIndex = table.columns.length - 1;
          const lastItem = table.columns[lastIndex];

          if (lastItem) {
            const element = data.filter((item) => {
              if (item.value === lastItem) return item;
              return;
            });

            return (
              <div className="block m-[16px_0px_16px] p-[13px] bg-hawkesBlue rounded-lg normal-text-2_base">
                {element[0].desc}
              </div>
            );
          }
          break;
        case "4":
          if (table.viewLayout) {
            const item = data.options.filter((object) => {
              if (object.value === table.viewLayout) {
                return object;
              }
              return;
            });
            return (
              <div className=" m-[16px_0px_16px] flex flex-row">
                <div
                  className={`w-1 rounded-tl-[2px] rounded-bl-[2px] ${item[0].backgroundColor}`}></div>
                <div className="py-3 px-4 w-fit h-fit bg-hawkesBlue rounded-lg">
                  <p className="mr-4 normal-text-2_base text-mudBlack">
                    {item[0].desc}
                  </p>
                </div>
              </div>
            );
          }

          return;
        default:
          break;
      }
    };

    const generateIcons = (page, data, index) => {
      let icon;
      let bgColor;

      switch (page) {
        case "2":
          bgColor = data.backgroundColor;

          if (data.label === "Owner") {
            icon = <PersonIcon />;
          } else if (data.label === "Status") {
            icon = <LeftBarsStaggeredIcon />;
          } else if (data.label === "Due date") {
            icon = <CalendarIcon />;
          } else if (data.label === "Notes") {
            icon = <T_Icon />;
          } else if (data.label === "Last updated") {
            icon = <ClockIcon />;
          } else if (data.label === "Files") {
            icon = <FileIcon />;
          } else if (data.label === "Budget") {
            icon = <NumberIcon />;
          } else if (data.label === "Priority") {
            icon = <TriangleIcon />;
          } else if (data.label === "Timeline") {
            icon = <BarsStaggeredIcon />;
          }

          return (
            <div
              className={`flex items-center justify-center w-6 h-6 mr-2 text-white rounded ${bgColor}`}>
              {icon}
            </div>
          );
        case "4":
          bgColor = data.backgroundColor;

          if (data.label === "Table") {
            icon = <TableIcon />;
          } else if (data.label === "Timeline") {
            icon = <BarsStaggeredIcon />;
          } else if (data.label === "Calendar") {
            icon = <CalendarIcon />;
          } else if (data.label === "Kanban") {
            icon = <KanbanIcon />;
          } else if (data.label === "Gantt") {
            icon = <LeftBarsStaggeredIcon />;
          } else if (data.label === "Cards") {
            icon = <CardIcon />;
          }

          return (
            <div
              className={`flex items-center justify-center w-6 h-6 mr-2 text-white rounded ${bgColor}`}>
              {icon}
            </div>
          );
        default:
          break;
      }
    };

    const generateOptions = (page, data, index) => {
      let elements;
      switch (page) {
        case "1":
          return (
            <>
              <CustomInput
                onChangeEvent={(e) => {
                  const name = e.target.value;
                  setBoardName(name);
                  setIsDisabled(true);

                  if (name) {
                    setIsDisabled(false);
                  }
                }}></CustomInput>
            </>
          );
        case "2":
          return (
            <>
              <div className="flex flex-row flex-wrap outline-none gap-y-4 gap-x-2">
                {data.map((option, i) => {
                  return (
                    <div key={i} className="inline-block">
                      <Button
                        name={option.value}
                        onClick={() => {
                          handleSelectColumn(option.value);
                        }}
                        className={`${
                          table.columns.includes(option.value)
                            ? "!border-2 !border-primary hover:!border-primary"
                            : "!border !border-solid !border-linkWater"
                        }
      transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
      flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                        {generateIcons(page, option, index)}
                        {option.label}
                      </Button>
                    </div>
                  );
                })}
              </div>
              {generateDesc(page, data, index)}
            </>
          );
        case "3":
          return (
            <div className="grid h-8 grid-cols-3">
              {data.map((option, i) => {
                return (
                  <Radio
                    key={i}
                    value={option.value}
                    checked={isActive === option.value}
                    onChange={() => {
                      setIsActive(option.value);
                    }}
                    className="flex items-center h-8 normal-text-2_base text-mudBlack">
                    {option.label}
                  </Radio>
                );
              })}
              {
                <Radio
                  value={radioCustomValue}
                  checked={isActive === "custom"}
                  className="h-8">
                  <Input
                    onClick={() => {
                      setIsActive("custom");
                    }}
                    onChange={(e) => {
                      setRadioCustomValue(e.target.value);
                    }}
                    placeholder="Custom"
                    className="h-8 px-4 py-2 rounded !shadow-none !outline-none hover:!border-mudBlack !border-linkWater focus:!border-primary normal-text-2_base"></Input>
                </Radio>
              }
            </div>
          );
        case "4":
          return (
            <>
              {data.map((object, i) => {
                return (
                  <div key={i} className="inline-block">
                    <Button
                      name={object.value}
                      onClick={() => {
                        handleSelectViewLayout(object.value);
                      }}
                      className={`${
                        table.viewLayout === object.value
                          ? "!border-2 !border-primary hover:!border-primary"
                          : "!border !border-solid !border-linkWater"
                      }
transition-[70ms_transform,100ms_cubic-bezier(0.4,0,0.2,1)_min-width] [min-width:auto]
flex items-center justify-start h-10 p-2  rounded selectOption hover:bg-moonlightBay !text-mudBlack normal-text-1_base`}>
                      {generateIcons(page, object, index)}
                      {object.label}
                    </Button>
                  </div>
                );
              })}
              {}
            </>
          );
        case "5":
          return <></>;
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
              <div className={`flex flex-wrap  flex-start gap-y-4 gap-x-2`}>
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
        case "4":
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
              <div>
                <div className={`flex flex-wrap flex-start gap-y-4 gap-x-2`}>
                  {generateOptions(page, data.pages[index].options, index)}
                </div>
                {generateDesc(page, data.pages[index], index)}
              </div>
            </>
          );
        case "5":
          return (
            <>
              <div className="w-full mb-6">
                <h1 className="block heading-2_normal letter-spacing-h2 text-mudBlack">
                  {title}
                </h1>
              </div>
              <div className={`flex flex-wrap mt-4 flex-start gap-y-4 gap-x-2`}>
                {generateOptions(page, data.pages[index].options, index)}
              </div>
            </>
          );
      }
    };

    return (
      <>
        <div className="flex flex-col h-full">
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
