import * as React from "react";

function SvgNetwork(props) {
  return (
    <svg
      width={23}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.093 4.653c-.137 1.907-1.552 3.375-3.094 3.375-1.542 0-2.959-1.468-3.094-3.375-.14-1.983 1.237-3.375 3.094-3.375 1.858 0 3.234 1.428 3.094 3.375z"
        stroke="#888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.999 11.028c-3.055 0-5.993 1.518-6.729 4.473-.097.39.148.777.55.777h12.358c.402 0 .646-.386.55-.777-.736-3.003-3.674-4.473-6.73-4.473z"
        stroke="#888"
        strokeMiterlimit={10}
      />
      <path
        d="M8.624 5.494c-.11 1.523-1.253 2.722-2.484 2.722-1.232 0-2.377-1.199-2.485-2.722-.112-1.584 1-2.716 2.485-2.716 1.484 0 2.596 1.162 2.484 2.716z"
        stroke="#888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.905 11.122c-.846-.387-1.778-.536-2.765-.536-2.438 0-4.786 1.211-5.375 3.572-.077.312.119.62.44.62h5.263"
        stroke="#888"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgNetwork;
