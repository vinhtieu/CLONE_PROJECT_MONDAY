import React from "react";

function Board({ name, layout, data, dummyColumns, itemTitle, itemList }) {
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
      <h1 className="heading-1_normal letter-spacing-h1 text-comet">{name}</h1>
    ) : (
      <div className="w-[30%] h-2 rounded-lg bg-linkWater"></div>
    );
  };

  const handleViewLayout = (layout) => {
    console.log(layout);
    switch (layout) {
      case "table":
        return (
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
              dummyColumns={columnData}
              itemTitle={itemTitle}
              data={itemList}
            />
            <div
              style={{ gridColumn: "1" }}
              className="flex items-center mt-6 mb-2 h-9">
              <div className=" bg-[#00c875] w-[70%] h-[6px] rounded-lg"></div>
            </div>
            <Table
              row={1}
              col={4}
              color="#00c875"
              dummyColumns={columnData}
              itemTitle={itemTitle}
            />
          </div>
        );
      case "timeline":
        break;
      case "gantt":
        break;
      case "calendar":
        break;
      case "cards":
        return (
          <div className="mr-8 overflow-auto">
            <div className="grid grid-flow-col  grid-cols-[repeat(2,minmax(125px,250px))] mt-2 gap-x-12 overflow-auto">
              <Card />
              <Card />
            </div>
          </div>
        );
      case "kanban":
        break;
      default:
        return (
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
              dummyColumns={columnData}
              itemTitle={itemTitle}
              data={itemList}
            />
            <div
              style={{ gridColumn: "1" }}
              className="flex items-center mt-6 mb-2 h-9">
              <div className=" bg-[#00c875] w-[70%] h-[6px] rounded-lg"></div>
            </div>
            <Table
              row={1}
              col={4}
              color="#00c875"
              dummyColumns={columnData}
              data={itemTitle}
            />
          </div>
        );
    }
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
        {handleViewLayout(viewLayout)}
      </div>
    </>
  );
}

export default Board;
