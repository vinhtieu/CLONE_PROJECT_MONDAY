import React from "react";
import { Switch } from "antd";

function ToggleBox({ content = "This is toggle box." }) {
  return (
    <div className="mb-4 w-full border border-linkWater rounded-lg flex justify-between items-start p-4">
      {content}
      <Switch></Switch>
    </div>
  );
}

export default ToggleBox;
