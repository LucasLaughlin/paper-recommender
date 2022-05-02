import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export default function Spinner() {
  return (
    <Box flexGrow={1} display="flex" justifyContent="center">
      <CircularProgress color="secondary" />
    </Box>
  );
}
