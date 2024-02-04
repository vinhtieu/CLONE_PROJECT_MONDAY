import React from "react";

function PlaceholderAva({ className }) {
  return (
    <figure className={`${className}`}>
      <img
        src="https://cdn.monday.com/icons/dapulse-person-column.svg"
        alt=""
        className="h-full w-full object-contain"
      />
    </figure>
  );
}

export default PlaceholderAva;
