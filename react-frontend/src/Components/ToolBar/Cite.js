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
import { Cite1, Cite2 } from '../../theme/icon_components/index';

// =================================================================================================

const CitePropTypes = {
  selectedArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Cite = ({
  selectedArr
}) => (
  <>
    <Tooltip title="Cite Multiple Papers">
      <IconButton aria-label="Cite Icon" onClick={() => feedbackService.incrementFeatureCount('citeMultiplePapers')}>
        <Cite1 />
        <Cite2 />
      </IconButton>
    </Tooltip>
    <Typography color="inherit" component="div">
      Cite
    </Typography>
  </>
);
Cite.propTypes = CitePropTypes;

export default Cite;
