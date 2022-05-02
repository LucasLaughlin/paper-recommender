import * as React from "react";

function SvgLibrary(props) {
  return (
    <svg
      width={23}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.999 3.418h-1.5a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V4.168a.75.75 0 00-.75-.75z"
        stroke="#888"
        strokeLinejoin="round"
      />
      <path
        d="M4.499 9.418h6M4.499 17.668h6"
        stroke="#888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.749 6.418h-4.5a.75.75 0 00-.75.75v12.75c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V7.168a.75.75 0 00-.75-.75zM14.999 1.168h-3a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-18a.75.75 0 00-.75-.75zM19.052 3.423l-1.894.2c-.521.054-.9.542-.84 1.082l1.636 15.075c.06.54.533.938 1.055.883l1.893-.2c.522-.054.9-.541.84-1.082L20.109 4.31c-.061-.543-.535-.94-1.056-.886z"
        stroke="#888"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLibrary;
