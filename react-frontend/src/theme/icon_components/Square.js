import * as React from "react";

function SvgSquare(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={1.059}
        y={1.211}
        width={15.943}
        height={15.943}
        rx={2.25}
        stroke="#6782F7"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default SvgSquare;
