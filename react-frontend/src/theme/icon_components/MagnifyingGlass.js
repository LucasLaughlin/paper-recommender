import * as React from "react";

function SvgMagnifyingGlass(props) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.364.584a7.364 7.364 0 100 14.727 7.364 7.364 0 000-14.727v0z"
        stroke="#737070"
        strokeMiterlimit={10}
      />
      <path
        d="M13.857 13.442L19 18.585"
        stroke="#737070"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgMagnifyingGlass;
