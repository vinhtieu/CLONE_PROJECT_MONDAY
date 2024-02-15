import React, { useEffect, useState } from "react";

import {
  WarningIcon,
  WarningCircleIcon,
  PlusIcon,
  HorizontalBar,
  PlaceholderAva,
  CheckIcon,
  CheckCircleIcon,
} from "./Icon";

import { capitalizedFirstLetter, useCompare } from "../utils";

import ShortUniqueId from "short-unique-id";

function Table({
  row,
  col,
  color = "red",
  presetColumns = [],
  firstCatagory,
  dummyColumns,
  itemTitle,
  data,
}) {
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const presetColumnsValue = [
    [
      {
        label: "Owner",
        data: (
          <span className="w-full max-w-[200px] grid">
            <div className="w-full h-full min-w-[100px]">
              <div className="flex items-center justify-center w-full h-full">
                <PlaceholderAva
                  className={
                    "w-[25px] h-[25px] flex-[0_0_25px]"
                  }></PlaceholderAva>
              </div>
            </div>
          </span>
        ),
      },
      {
        label: "Status",
        data: (
          <div className="w-full h-full max-w-[200px] grid">
            <div className="w-full h-full min-w-[110px]">
              <div
                className={`w-full h-full text-white bg-sinYellow flex items-center justify-center`}>
                <span className="subtext">Working on it</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Due date",
        data: (
          <span className="w-full max-w-[200px] grid">
            <div className="  w-full h-full min-w-[130px] flex items-center leading-[37px]">
              <div className="flex-[0_0_30px] flex items-center justify-center">
                <WarningCircleIcon className={"w-4 h-4"} fill={"#e0394e"} />
              </div>
              <div className="flex-[1_1_0] flex items-center justify-center min-w-[40%] mr-[30px]">
                <span className="subtext">8 Jan</span>
              </div>
            </div>
          </span>
        ),
      },
      {
        label: "Budget",
        data: (
          <div className="w-full h-full  min-w-[110px] max-w-[200px] flex items-center justify-center">
            <div className="w-full h-full p-[5px]">
              <span className="leading-6 subtext">$100</span>
            </div>
          </div>
        ),
      },
      {
        label: "Last updated",
        data: (
          <div className="w-full h-full min-w-[110px] max-w-[200px] grid">
            <div className="flex items-center w-full h-full px-2 ">
              <PlaceholderAva
                className={
                  "w-[25px] h-[25px] flex-[0_0_25px]"
                }></PlaceholderAva>
              <span className="subtext !text-[13px] !font-light leading-[34px] pl-4 text-left flex-[1_1_auto] text-nowrap ">
                3 weeks ago
              </span>
            </div>
          </div>
        ),
      },
      { label: "Files", data: "" },
      {
        label: "Timeline",
        data: (
          <span className="w-full min-w-[150px] max-w-[200px]">
            <div className="my-2 mx-4  bg-[#E0394E] flex items-center justify-center relative leading-[22px] h-[22px] rounded-[11px] subtext">
              <span className="w-[2.5px] h-[22px] text-[13px] absolute top-[1px] left-[10px] flex align-middle">
                <WarningIcon className={"h-[13px] my-auto"} fill={"#ffffff"} />
              </span>
              <span className="text-white text-nowrap"> 8 - 9 Jan</span>
            </div>
          </span>
        ),
      },
      {
        label: "Notes",
        data: (
          <span className="w-full h-full min-w-[110px] max-w-[200px] grid">
            <div className="w-ful h-full px-[5px] flex items-center justify-center">
              <span className="subtext !leading-6 !text-[13px]">
                Action Items
              </span>
            </div>
          </span>
        ),
      },
      {
        label: "Priority",
        data: (
          <div className="w-full h-full min-w-[110px] max-w-[200px]">
            <div className="flex items-center justify-center w-full h-full text-white bg-mayaBlue">
              <span className="min-w-[110px] subtext leading-9 ">Low</span>
            </div>
          </div>
        ),
      },
    ],
    [
      {
        label: "Owner",
        data: (
          <span className="w-full max-w-[200px] grid">
            <div className="w-full h-full min-w-[100px]">
              <div className="flex items-center justify-center w-full h-full">
                <PlaceholderAva
                  className={
                    "w-[25px] h-[25px] flex-[0_0_25px]"
                  }></PlaceholderAva>
              </div>
            </div>
          </span>
        ),
      },
      {
        label: "Status",
        data: (
          <div className="w-full h-full max-w-[200px] grid">
            <div className="w-full h-full min-w-[110px]">
              <div
                className={`w-full h-full text-white bg-darkPastelGreen flex items-center justify-center`}>
                <span className="subtext">Done</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Due date",
        data: (
          <span className="w-full max-w-[200px] grid">
            <div className="  w-full h-full min-w-[130px] flex items-center leading-[37px]">
              <div className="flex-[0_0_30px] flex items-center justify-center">
                <CheckCircleIcon className={"w-4 h-4"} fill={"#00854d"} />
              </div>
              <div className="flex-[1_1_0] flex items-center justify-center min-w-[40%] mr-[30px]">
                <del className="subtext">9 Jan</del>
              </div>
            </div>
          </span>
        ),
      },
      {
        label: "Budget",
        data: (
          <div className="w-full h-full min-w-[110px] max-w-[200px] flex items-center justify-center">
            <div className="w-full h-full p-[5px]">
              <span className="leading-6 subtext">$1,000</span>
            </div>
          </div>
        ),
      },
      {
        label: "Last updated",
        data: (
          <div className="w-full h-full min-w-[110px] max-w-[200px] grid">
            <div className="flex items-center w-full h-full px-2 ">
              <PlaceholderAva
                className={
                  "w-[25px] h-[25px] flex-[0_0_25px]"
                }></PlaceholderAva>
              <span className="subtext !text-[13px] !font-light leading-[34px] pl-4 text-left flex-[1_1_auto] text-nowrap ">
                3 weeks ago
              </span>
            </div>
          </div>
        ),
      },
      { label: "Files", data: "" },
      {
        label: "Timeline",
        data: (
          <span className="w-full min-w-[150px] max-w-[200px]">
            <div className="my-2 mx-4  bg-[#00c875] flex items-center justify-center relative leading-[22px] h-[22px] rounded-[11px] subtext">
              <span className="w-[11px] h-[22px] text-[13px] absolute top-[1px] left-[6px] flex align-middle">
                <CheckIcon
                  className={"w-full text-[24px] my-auto"}
                  fill={"#ffffff"}
                />
              </span>
              <span className="text-white text-nowrap">10 - 11 Jan</span>
            </div>
          </span>
        ),
      },
      {
        label: "Notes",
        data: (
          <span className="w-full h-full min-w-[110px] max-w-[200px] grid">
            <div className="w-ful h-full px-[5px] flex items-center justify-center">
              <span className="subtext !leading-6 !text-[13px]">
                Meeting Notes
              </span>
            </div>
          </span>
        ),
      },
      {
        label: "Priority",
        data: (
          <div className="w-full h-full min-w-[110px] max-w-[200px]">
            <div className="flex items-center justify-center w-full h-full text-white bg-persianIndigo">
              <span className="min-w-[110px]  subtext leading-9 ">High</span>
            </div>
          </div>
        ),
      },
    ],
    [
      {
        label: "Owner",
        data: (
          <span className="w-full max-w-[200px] grid">
            <div className="w-full h-full min-w-[100px]">
              <div className="flex items-center justify-center w-full h-full">
                <PlaceholderAva
                  className={
                    "w-[25px] h-[25px] flex-[0_0_25px]"
                  }></PlaceholderAva>
              </div>
            </div>
          </span>
        ),
      },
      {
        label: "Status",
        data: (
          <div className="w-full h-full max-w-[200px] grid">
            <div className="w-full h-full min-w-[110px]">
              <div
                className={`w-full h-full text-white bg-cerise flex items-center justify-center`}>
                <span className="subtext">Stuck</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Due date",
        data: (
          <span className="w-full max-w-[200px] grid">
            <div className="  w-full h-full min-w-[130px] flex items-center leading-[37px]">
              <div className="flex-[0_0_30px] flex items-center justify-center">
                <WarningCircleIcon className={"w-4 h-4"} fill={"#e0394e"} />
              </div>
              <div className="flex-[1_1_0] flex items-center justify-center min-w-[40%] mr-[30px]">
                <span className="subtext">10 Jan</span>
              </div>
            </div>
          </span>
        ),
      },
      {
        label: "Budget",
        data: (
          <div className="w-full h-full  min-w-[110px] max-w-[200px] flex items-center justify-center">
            <div className="w-full h-full p-[5px]">
              <span className="leading-6 subtext">$500</span>
            </div>
          </div>
        ),
      },
      {
        label: "Last updated",
        data: (
          <div className="flex items-center w-full px-2">
            <PlaceholderAva
              className={"w-[25px] h-[25px] flex-[0_0_25px]"}></PlaceholderAva>
            <span className="subtext !text-[13px] !font-light leading-[34px] pl-4 text-left flex-[1_1_auto] text-nowrap ">
              3 weeks ago
            </span>
          </div>
        ),
      },
      { label: "Files", data: "" },
      {
        label: "Timeline",
        data: (
          <span className="w-full min-w-[150px] max-w-[200px]">
            <div className="my-2 mx-4  bg-[#E0394E] flex items-center justify-center relative leading-[22px] h-[22px] rounded-[11px] subtext">
              <span className="w-[2.5px] h-[22px] text-[13px] absolute top-[1px] left-[10px] flex align-middle">
                <WarningIcon className={"h-[13px] my-auto"} fill={"#ffffff"} />
              </span>
              <span className="text-white text-nowrap"> 12 - 13 Jan</span>
            </div>
          </span>
        ),
      },
      {
        label: "Notes",
        data: (
          <span className="w-full h-full min-w-[110px] max-w-[200px] grid">
            <div className="w-ful h-full px-[5px] flex items-center justify-center">
              <span className="subtext !leading-6 !text-[13px]">Other</span>
            </div>
          </span>
        ),
      },
      {
        label: "Priority",
        data: (
          <div className="w-full h-full min-w-[110px] max-w-[200px]">
            <div className="w-full h-full bg-[#5559DF] text-white  flex items-center justify-center">
              <span className="min-w-[110px]  subtext leading-9 ">Medium</span>
            </div>
          </div>
        ),
      },
    ],
  ];

  const generateCellId = (row, col) => {
    return String.fromCharCode(65 + col) + row;
  };

  const getColumnValue = (value, index, table) => {
    const filteredData = table[index].filter((item) => item.label === value);
    const result = filteredData[0].data;
    return result;
  };

  const generateLastRow = (row, col, color = "red", content = "") => {
    const classStyle =
      "h-9 flex justify-center items-center w-full border-wolfGray border-solid border-b";
    const cellId = generateCellId(row, col);
    const uid = new ShortUniqueId({ length: 16 });
    let cell;

    if (col === 0) {
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            style={{
              gridColumn: `${col + 1}`,
              borderBottom: "1px solid",
              borderLeft: `6px solid ${color}`,
            }}
            className={`${classStyle}
          rounded-bl-[8px] px-6 !justify-start
         !border-b-wolfGray opacity-50`}>
            {content ? (
              `+ Add ${content.toLowerCase()}`
            ) : (
              <HorizontalBar width="w-[70%]" />
            )}
          </div>
        ),
      };
    } else {
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            style={{
              gridColumn: `${col + 1}`,
            }}
            className={`${classStyle} opacity-50`}></div>
        ),
      };
    }

    return cell;
  };

  const generateLastColumn = (row, col) => {
    const classStyle =
      "h-9 flex justify-start items-center w-full border-wolfGray border-solid border-b border-l px-6 ";
    const cellId = generateCellId(row, col);
    const uid = new ShortUniqueId({ length: 16 });
    let cell;

    if (row === 0) {
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            style={{ gridColumn: `${col + 1}` }}
            className={`${classStyle} border-t`}>
            <PlusIcon />
          </div>
        ),
      };
    } else {
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            style={{ gridColumn: `${col + 1}` }}
            className={`${classStyle}`}></div>
        ),
      };
    }

    return cell;
  };

  const generateContents = (
    row,
    col,
    color,
    selectedDummyColumn,
    dummyColumnValues,
    itemTitle,
    dataSource
  ) => {
    const classStyle =
      "h-9 flex justify-start items-center w-full border-wolfGray border-solid border-b border-l ";
    const cellId = generateCellId(row, col);
    let isDummyExisted = selectedDummyColumn.length > 0 ? true : false;
    let dummyColumnsLabel = selectedDummyColumn[col - 1]?.label;
    let cell;

    const uid = new ShortUniqueId({ length: 32 });

    if (col === 0 && row === 0) {
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            id={cellId}
            style={{
              gridColumn: `${col + 1}`,
              borderLeft: `6px solid ${color}`,
            }}
            className={`${classStyle} px-6  rounded-tl-[8px] border-t !border-t-wolfGray`}>
            {itemTitle ? (
              <span className="subtext">{itemTitle}</span>
            ) : (
              <HorizontalBar width="w-[70%]" />
            )}
          </div>
        ),
      };
    } else if (col === 0) {
      // check if data existed,otherwise use itemTitle

      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            id={cellId}
            style={{
              gridColumn: `${col + 1}`,
              borderLeft: `6px solid ${color}`,
            }}
            className={`${classStyle} px-6 `}>
            {(() => {
              if (dataSource[row - 1]) {
                return (
                  <span className="subtext">{`${
                    dataSource[row - 1].value
                  }`}</span>
                );
              } else if (itemTitle) {
                return <span className="subtext">{`${itemTitle} ${row}`}</span>;
              }
              return <HorizontalBar width="w-[70%]" />;
            })()}
          </div>
        ),
      };
    } else if (row === 0) {
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            id={cellId}
            style={{
              gridColumn: `${col + 1}`,
            }}
            className={`${classStyle} p-0 border-t !border-t-wolfGray !justify-center`}>
            {isDummyExisted ? (
              <div className="mx-5 text-center text-nowrap subtext">
                {dummyColumnsLabel}
              </div>
            ) : (
              <HorizontalBar width="w-[30%]" />
            )}
          </div>
        ),
      };
    } else {
      // check if data existed,otherwise use dummyColumn
      cell = {
        id: cellId,
        data: (
          <div
            key={uid.rnd()}
            id={cellId}
            style={{
              gridColumn: `${col + 1}`,
            }}
            className={`${classStyle} p-0 !justify-center text-nowrap text-center h-9`}>
            {isDummyExisted ? (
              // Render value ở row = 1
              // Vì presetColumnsValue chứa element bắt đầu từ 0
              // Nên rol - 2 = 0 để bắt đầu lấy element từ index = 0
              <span className="h-full w-full max-w-[200px] grid">
                {getColumnValue(dummyColumnsLabel, row - 1, dummyColumnValues)}
              </span>
            ) : (
              <HorizontalBar width="w-[30%]" />
            )}
          </div>
        ),
      };
    }

    return cell;
  };

  const processingData = (
    row,
    col,
    color,
    dummyColumns,
    itemTitle,
    dataSource
  ) => {
    let lastCol = dummyColumns?.length >= 1 ? dummyColumns.length + 1 : col + 1;
    let newTable = [];

    for (let i = 0; i <= row; i++) {
      let group = [];
      let cell = <></>;

      for (let j = 0; j <= lastCol; j++) {
        if (i === row) {
          cell = generateLastRow(i, j, color, itemTitle);
        } else if (j === lastCol) {
          cell = generateLastColumn(i, j);
        } else {
          cell = generateContents(
            i,
            j,
            color,
            dummyColumns,
            presetColumnsValue,
            itemTitle,
            dataSource
          );
        }

        group.push(cell);
      }

      newTable.push(...group);
    }
    return newTable;
  };

  const handleRenderData = (
    row,
    col,
    color,
    dummyColumns,
    itemTitle,
    dataSource
  ) => {
    const processedData = processingData(
      row,
      col,
      color,
      dummyColumns,
      itemTitle,
      dataSource
    );
    console.log(processedData);

    const table = generateTable(processedData);
    return table;
  };

  const generateTable = (tableData) => {
    return tableData.map((cell) => cell.data);
  };

  useEffect(() => {
    if (dummyColumns) {
      setTableColumns((prevState) => {
        let newData = [...prevState];
        const isExisted = newData.some((item) => {
          return item.label === dummyColumns.label;
        });

        if (isExisted) {
          return newData.filter((item) => item.label !== dummyColumns.label);
        }
        return [...prevState, dummyColumns];
      });
    }
  }, [dummyColumns]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setTableData((prevState) => {
        const clonedData = [...prevState];

        data.forEach((item) => {
          let isExisted = false;

          clonedData.forEach((element) => {
            if (element.id === item.id) {
              isExisted = true;
              element.value = item.value;
            }
          });

          if (!isExisted && item.id.length >= 1) {
            clonedData.push(item);
          }
        });

        console.log(clonedData);
        return clonedData;
      });
    }
  }, [data]);

  return (
    <>{handleRenderData(row, col, color, tableColumns, itemTitle, tableData)}</>
  );
}

export default Table;
