import { Button, Input, Radio } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  addColumns,
  deleteColumns,
  selectViewLayout,
  setHeading,
} from "../../redux/slices/previewTableSlice";
import { Table } from "../../components";

import {
  WarningIcon,
  WarningCircleIcon,
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
  HorizontalBar,
  PlaceholderAva,
  CheckIcon,
  CheckCircleIcon,
} from "../../components/Icon";
import { CustomInput, ToggleBox } from "../../components";
import { capitalizedFirstLetter, useCompare, usePrevious } from "../../utils";

export default function CreateYourBoard() {
  const [boardName, setBoardName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [itemValue, setItemValue] = useState("");
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});
  const [firstColumn, setFirstColumn] = useState("");
  const [selectedColumns, setSelectedColumns] = useState([]);

  const [columnData, setColumnData] = useState({ label: "", dataIndex: "" });
  const [tableData, setTableData] = useState({});
  const [pageNum, setPageNum] = useState("1");
  const inquiries = useSelector((state) => state.previewTable.designInquiries);
  const table = useSelector((state) => state.previewTable.data);
  const dispatch = useDispatch();

  const handleSelectColumn = (column) => {
    const label = capitalizedFirstLetter(column);
    const dataIndex = column;
    const updatedData = { label: label, dataIndex: dataIndex };
    setColumnData(updatedData);

    setSelectedColumns((prevData) => {
      const isExisted = prevData.includes(column);
      console.log("isExisted: ", isExisted);

      if (isExisted) {
        console.log("prevData: ", prevData);
        if (prevData.length > 1) {
          const deleteIndex = prevData.indexOf(column);
          const newData = [...prevData];
          newData.splice(deleteIndex, 1);
          return newData;
        }

        return [...prevData];
      } else {
        return [...prevData, column];
      }
    });
  };

  const handleSelectViewLayout = (layout) => {
    const value = layout.toLowerCase();
    dispatch(selectViewLayout(value));
  };

  const handleSelectRadio = (value) => {
    let labelValue = capitalizedFirstLetter(value);
    setFirstColumn({ label: labelValue, dataIndex: value });
  };

  const handleListItems = (name, value) => {
    switch (name) {
      case "input-f2mXiahpII7Mc8jq":
        setItem1({ id: "A1", value: value });
        break;
      case "input-xZTqSVj3ycDp3Y6u":
        setItem2({ id: "A2", value: value });
        break;
      case "input-Vw7GDd4ZuK9kTz9C":
        setItem3({ id: "A3", value: value });
        break;
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
              <ArrowIcon className={"ml-2 -rotate-90"} />
            </Button>
          </div>
        );
      case "6":
        return (
          <div className="flex flex-row-reverse justify-between">
            <Button className="flex flex-row items-center h-10 px-4 py-2 text-white border-none rounded nextBtn normal-text-1_base bg-primary disabled:bg-solitude disabled:text-disable-color">
              Get started
            </Button>
            <Button
              onClick={toPrevPage}
              disabled={isDisabled}
              className="flex flex-row items-center h-10 px-4 py-2 border rounded border-linkWater hover:!border-linkWater normal-text-1_base hover:bg-moonlightBay text-mudBlack hover:!text-mudBlack disabled:bg-solitude disabled:text-disable-color">
              <ArrowIcon className={"mr-2 rotate-90"} />
              Back
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
              <ArrowIcon className={"mr-2 rotate-90"} />
              Back
            </Button>
            <Button
              onClick={toNextPage}
              disabled={isDisabled}
              className="flex flex-row items-center h-10 px-4 py-2 text-white border-none rounded nextBtn normal-text-1_base bg-primary disabled:bg-solitude disabled:text-disable-color">
              Next
              <ArrowIcon className={"ml-2 -rotate-90"} />
            </Button>
          </div>
        );
    }
  };

  // const renderTable-ByRow = (numCol, numRow, color) => {
  //   let tableCells = [];
  //   let tableCell;

  //   const generateContent = (col, row, colLength, rowLength) => {
  //     if (col === 0) return "w-[70%]";

  //     if (col === colLength || row === rowLength) return "";

  //     return "w-[30%]";
  //   };

  //   const generateIcon = (col, row, colLength) => {
  //     if (col === colLength && row === 0) {
  //       return (
  //         <svg
  //           viewBox="0 0 20 20"
  //           fill="currentColor"
  //           width={16}
  //           height={16}
  //           aria-hidden="true"
  //           className="mx-3"
  //           data-testid="icon"
  //           style={{ color: "var(--color-asphalt_grey)" }}>
  //           <path
  //             d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z"
  //             fill="currentColor"
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       );
  //     }
  //     return <></>;
  //   };

  //   const generateCss = (col, color) => {
  //     if (col === 0) {
  //       return {
  //         gridColumn: `${+col + 1}`,
  //         borderLeft: `6px solid ${color}`,
  //       };
  //     }

  //     return { gridColumn: `${+col + 1}` };
  //   };

  //   const generateCellStyle = (col, row, rowLength) => {
  //     if (col === 0) {
  //       if (row === 0) {
  //         return `rounded-tl-[8px] px-6 !justify-start border-wolfGray border-t-solid border-t-[1px]`;
  //       }
  //       if (row === rowLength) {
  //         return `rounded-bl-[8px] px-6 !justify-start border-wolfGray border-solid border-t-[1px]  border-b-[1px] opacity-50`;
  //       }

  //       return "px-6 !justify-start border-wolfGray border-solid border-t-[1px]";
  //     } else {
  //       if (row === rowLength) {
  //         return `border-wolfGray border-solid  !border-b-[1px] !border-t-[1px] !border-r-0 opacity-50`;
  //       } else {
  //         return "border-wolfGray border-solid !border-t-[1px] border-b-0 border-l-[1px]";
  //       }
  //     }
  //   };

  //   for (let row = 0, rowLength = numRow; row <= rowLength; row++) {
  //     for (let col = 0, colLength = numCol; col <= colLength; col++) {
  //       const content = generateContent(col, row, colLength, rowLength);
  //       const icon = generateIcon(col, row, colLength);
  //       const inlineCss = generateCss(col, color);
  //       const twClass = generateCellStyle(col, row, rowLength);
  //       tableCell = (
  //         <div
  //           key={`${row},${col}`}
  //           style={inlineCss}
  //           className={`h-9 flex justify-center items-center w-full ${twClass}`}>
  //           <div className={`rounded-lg h-1 bg-linkWater  ${content}`}></div>
  //           {icon}
  //         </div>
  //       );

  //       tableCells.push(tableCell);
  //     }
  //   }
  //   return tableCells;
  // };

  const renderLivePreview = (data) => {
    const generateGridLayout = (cols) => {
      let value = "";
      let style = {
        display: "grid",
        gridTemplateColumns:
          "170px minmax(auto,200px) minmax(auto,200px) minmax(auto,200px) auto",
      };
      if (cols.length >= 1) {
        for (let i = 0; i < cols.length; i++) {
          value += " minmax(auto,200px)";
        }
        return (style = {
          ...style,
          gridTemplateColumns: `170px ${value} auto`,
        });
      }

      return style;
    };

    const generateBoardName = (name) => {
      return name.length > 0 ? (
        <h1 className="heading-1_normal letter-spacing-h1 text-comet">
          {name}
        </h1>
      ) : (
        <div className="w-[30%] h-2 rounded-lg bg-linkWater"></div>
      );
    };

    return (
      <>
        <div className=" h-[551px] w-[90%] [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] bg-white flex flex-col  drop-shadow transition-transform ease-in-out  duration-200 pt-8 pl-8 absolute top-1/2 right-0 -translate-y-1/2 shadow-[0px_4px_6px_-4px_rgba(0, 0, 0, 0.1)]">
          <div>
            <div className="flex items-center w-full h-9">
              {generateBoardName(boardName)}
            </div>
            <div className="h-[42px] mt-2 mr-8 mb-4"></div>
          </div>
          <div
            style={generateGridLayout(selectedColumns)}
            className={"overflow-auto w-full"}>
            <div
              style={{ gridColumn: "1" }}
              className="flex items-center mb-2 h-9">
              <div className=" bg-[rgb(87,155,252)] w-[70%] h-[6px] rounded-lg col-span-full"></div>
            </div>
            <Table
              row={4}
              col={4}
              color="#579BFC"
              // presetColumns={selectedColumns}
              column={columnData}
              data={""}
              // firstCatagory={itemValue}
            />
            <div
              style={{ gridColumn: "1" }}
              className="flex items-center mt-6 mb-2 h-9">
              <div className=" bg-[#00c875] w-[70%] h-[6px] rounded-lg"></div>
            </div>
            {/* <Table
              row={1}
              col={4}
              color="#00c875"
              // presetColumns={selectedColumns}
              // firstCatagory={itemValue}
            /> */}
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
          const lastIndex = selectedColumns.length - 1;
          const lastItem = selectedColumns[lastIndex];
          const element = data.filter((item) => {
            if (item.value === lastItem) return item;
            return;
          });

          if (element) {
            return (
              <div className="block m-[16px_0px_16px] p-[13px] bg-hawkesBlue rounded-lg normal-text-2_base">
                {element[0]?.desc}
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
                <div className="px-4 py-3 rounded-lg w-fit h-fit bg-hawkesBlue">
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
                          selectedColumns?.includes(option.value)
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
                    checked={firstColumn.dataIndex === option.value}
                    onChange={() => {
                      // setItemValue(option.value);
                      handleSelectRadio(option.value, tableData);
                    }}
                    className="flex items-center h-8 normal-text-2_base text-mudBlack">
                    {option.label}
                  </Radio>
                );
              })}
              {
                <Radio
                  value={firstColumn.dataIndex}
                  checked={
                    firstColumn.dataIndex !== "projects" &&
                    firstColumn.dataIndex !== "tasks"
                  }
                  className="h-8">
                  <Input
                    onClick={() => {
                      setFirstColumn("");
                    }}
                    onChange={(e) => {
                      handleSelectRadio(e.target.value, tableData);
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
          return (
            <>
              <CustomInput
                name={"item1"}
                id={"input-f2mXiahpII7Mc8jq"}
                value={item1.value}
                onChangeEvent={(e) => {
                  handleListItems(e.target.name, e.target.value);
                }}></CustomInput>
              <CustomInput
                name={"item2"}
                id={"input-xZTqSVj3ycDp3Y6u"}
                value={item2.value}
                onChangeEvent={(e) => {
                  handleListItems(e.target.name, e.target.value);
                }}></CustomInput>
              <CustomInput
                name={"item3"}
                id={"input-Vw7GDd4ZuK9kTz9C"}
                value={item3.value}
                onChangeEvent={(e) => {
                  handleListItems(e.target.name, e.target.value);
                }}></CustomInput>
            </>
          );
        case "6":
          return (
            <>
              <ToggleBox
                content={
                  <p>
                    When <strong>status</strong> changes to
                    <strong> done </strong> move item to
                    <strong> completed</strong>
                  </p>
                }
              />
              <ToggleBox
                content={
                  <p>
                    When <strong>due date</strong> arrives
                    <strong> notify me</strong>
                  </p>
                }
              />
              <ToggleBox
                content={
                  <p>
                    when <strong>status</strong> changes
                    <strong> notify me</strong>
                  </p>
                }
              />
            </>
          );
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
                {generateOptions(page, data.pages[index], index)}
              </div>
            </>
          );
        case "6":
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
              <div className={`flex flex-wrap flex-start`}>
                {generateOptions(page, data.pages[index], index)}
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
          {renderLivePreview(table)}
        </div>
      </div>
    </div>
  );
}
