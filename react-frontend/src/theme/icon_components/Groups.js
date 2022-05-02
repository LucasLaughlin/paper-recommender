import * as React from 'react';

function SvgGroups(props) {
  return (
    <svg
      width={21}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.249.578c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="#888"
      />
      <path
        d="M6.249 14.578a2 2 0 100-4 2 2 0 000 4zM10.249 8.578a2 2 0 100-4 2 2 0 000 4zM14.249 14.578a2 2 0 100-4 2 2 0 000 4z"
        fill="#888"
      />
    </svg>
  );
}

export default SvgGroups;
