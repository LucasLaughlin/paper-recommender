/* React and Packages */
import React from 'react';

/* Material UI */
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

/* Components */
import UploadSelector from '../DocUpload/UploadSelector';

// =================================================================================================

const Create = () => (
  <>
    <Tooltip title="Upload a new Document">
      <UploadSelector />
    </Tooltip>
    <Typography color="inherit" variant="subtitle1" component="div">
      Upload
    </Typography>
  </>
);

export default Create;
