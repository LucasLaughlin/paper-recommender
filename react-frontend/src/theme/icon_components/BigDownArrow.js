import * as React from "react";

function SvgBigDownArrow(props) {
  return (
    <svg
      width={14}
      height={8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.062.237l5.063 5.062L12.187.237l1.194 1.193-6.256 6.256L.869 1.43 2.062.237z"
        fill="#0A1975"
      />
    </svg>
  );
}

export default SvgBigDownArrow;
