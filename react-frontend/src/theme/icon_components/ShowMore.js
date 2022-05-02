import * as React from 'react';

function SvgShowMore(props) {
  return (
    <svg
      width={10}
      height={6}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.506.867L4.88 4.242 8.256.867l.795.796-4.17 4.17-4.17-4.17.795-.796z"
        fill="#888"
      />
    </svg>
  );
}

export default SvgShowMore;
