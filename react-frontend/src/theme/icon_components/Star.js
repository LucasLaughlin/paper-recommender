import * as React from "react";

function SvgStar(props) {
  return (
    <svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.99 7.661l-7.19-.62-2.81-6.62-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03 6.18-3.73 6.18 3.73-1.63-7.03 5.45-4.73zm-10 6.16l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38 1.7-4.03 1.71 4.04 4.38.38-3.32 2.88 1 4.28-3.77-2.28z"
        fill="#7A91F8"
      />
    </svg>
  );
}

export default SvgStar;
