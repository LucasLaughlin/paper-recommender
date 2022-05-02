import * as React from 'react';

import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

function SmallArrows(props) {
  return (
    <Box display="flex" flexDirection="column">
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
    </Box>
  );
}

export default SmallArrows;
