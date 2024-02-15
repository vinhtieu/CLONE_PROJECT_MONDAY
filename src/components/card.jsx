import React from "react";
import { PlusCircle, PlusComment } from "./Icon";

function card() {
  return (
    <div className="max-w-[250px] min-w-[125px] p-2 pb-4 [box-shadow:0_6px_20px_#0003] rounded bg-white">
      <div className="h-[142px] w-full flex items-center justify-center mb-2 rounded bg-[#f6f7fb]">
        <PlusCircle></PlusCircle>
      </div>
      <div className="p-2 ">
        <div className="grid items-center justify-between grid-flow-col gap-1 mb-4">
          <span className="text-lg font-normal">Text</span>
          <PlusComment />
        </div>
        <div className="flex">
          <div className="flex flex-col gap-4 mb-2">
            <div className="h-[34px] flex justify-between leading-6">
              <div>
                <h6>Owner</h6>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
