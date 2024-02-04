import React from "react";

function HorizontalBar({ width = "50px" }) {
  return <div className={`rounded-lg h-1 bg-linkWater  ${width}`}></div>;
}

export default HorizontalBar;
