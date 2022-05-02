import * as React from "react";

function SvgSmallUpArrow(props) {
  return (
    <svg
      width={7}
      height={5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.278 3.68L3.82.813a.422.422 0 00-.641 0L.723 3.68a.422.422 0 00.32.696h4.915c.36 0 .555-.422.32-.696z"
        fill="#0A1975"
      />
    </svg>
  );
}

export default SvgSmallUpArrow;
