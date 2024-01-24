import React from "react";

function Triangle() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={24}
      height={24}
      aria-hidden="true"
      className="icon_f5f5ef7fbd noFocusStyle_a362fcbc9b"
      data-testid="icon">
      <rect width={20} height={20} rx="3.636" fill="#00C875" />
      <g filter="url(#filter0_d_43912_44065)">
        <mask
          id="mask0_43912_44065"
          maskUnits="userSpaceOnUse"
          x={1}
          y={4}
          width={17}
          height={12}>
          <rect
            x="1.919"
            y="4.874"
            width="15.704"
            height="2.977"
            rx=".807"
            fill="#fff"
            stroke="#fff"
            strokeWidth=".205"
          />
          <rect
            x="1.919"
            y="8.51"
            width="15.704"
            height="2.977"
            rx=".807"
            fill="#fff"
            stroke="#fff"
            strokeWidth=".205"
          />
          <rect
            x="1.919"
            y="12.147"
            width="15.704"
            height="2.977"
            rx=".807"
            fill="#fff"
            stroke="#fff"
            strokeWidth=".205"
          />
        </mask>
        <g mask="url(#mask0_43912_44065)">
          <path
            d="M9.21888 5.40179C9.57136 4.80977 10.4286 4.80977 10.7811 5.40179L15.677 13.6248C16.0378 14.2307 15.6012 14.9989 14.8959 14.9989L5.1041 14.9989C4.39884 14.9989 3.96218 14.2307 4.32298 13.6248L9.21888 5.40179Z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_43912_44065"
          x="2.375"
          y="4.049"
          width="15.25"
          height="13.678"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood result="BackgroundImageFix" floodOpacity={0} />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".909" />
          <feGaussianBlur stdDeviation=".909" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.200691 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_43912_44065"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_43912_44065"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Triangle;
