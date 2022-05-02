import * as React from "react";

function SvgSignout(props) {
  return (
    <svg
      width={20}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 12.112v1.875a1.875 1.875 0 01-1.875 1.875h-7.5A1.875 1.875 0 011 13.987V2.737A1.875 1.875 0 012.875.862H10c1.036 0 2.25.84 2.25 1.875v1.875M15.25 12.112L19 8.362l-3.75-3.75M6.25 8.362h12"
        stroke="#888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSignout;
