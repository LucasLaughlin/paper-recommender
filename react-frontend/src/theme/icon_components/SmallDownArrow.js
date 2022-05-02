import * as React from "react";

function SvgSmallDownArrow(props) {
  return (
    <svg
      width={7}
      height={4}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.723.718L3.18 3.585a.422.422 0 00.64 0L6.279.718a.422.422 0 00-.32-.697H1.041a.422.422 0 00-.32.697z"
        fill="#0A1975"
      />
    </svg>
  );
}

export default SvgSmallDownArrow;
