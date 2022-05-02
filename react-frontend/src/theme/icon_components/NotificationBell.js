import * as React from "react";

function SvgNotificationBell(props) {
  return (
    <svg
      width={18}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.048 15.057c-1.204-1.473-2.054-2.223-2.054-6.285 0-3.72-1.9-5.045-3.463-5.688a.835.835 0 01-.466-.495C10.791 1.656 10.022.834 9 .834s-1.79.823-2.062 1.756a.827.827 0 01-.467.494C4.906 3.728 3.01 5.049 3.01 8.772c-.003 4.062-.853 4.812-2.056 6.285-.499.61-.062 1.527.81 1.527h14.479c.868 0 1.302-.92.806-1.527zM12 16.584v.75a3 3 0 01-6 0v-.75"
        stroke="#888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={14.193} cy={4.957} r={2.193} fill="#F60C0C" />
    </svg>
  );
}

export default SvgNotificationBell;
