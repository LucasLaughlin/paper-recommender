/* React and Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

/* Services */
import feedbackService from '../../services/feedback.service';

/* Icons */
import { Share as ShareIcon } from '../../theme/icon_components/index';

// =================================================================================================

const SharePropTypes = {
  selectedArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Share = ({
  selectedArr
}) => (
  <>
    <Tooltip title="Share Multiple Papers">
      <IconButton aria-label="Share Icon" onClick={() => feedbackService.incrementFeatureCount('ShareMultipleDocuments')}>
        <ShareIcon />
      </IconButton>
    </Tooltip>
    <Typography color="inherit" component="div">
      Share
    </Typography>
  </>
);
Share.propTypes = SharePropTypes;

export default Share;
