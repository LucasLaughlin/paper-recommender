/* React and Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

// =================================================================================================

const SavePropTypes = {
  selectedArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Save = ({
  selectedArr,
  onClick
}) => (
  <>
    <Tooltip title="Save Documents">
      <IconButton
        disabled={selectedArr.length < 1}
        aria-label="save"
        onClick={onClick}
      >
        <StarOutlineIcon color={(selectedArr.length < 1) ? 'inherit' : 'primary'} />
      </IconButton>
    </Tooltip>
    <Typography color="inherit" variant="subtitle1" component="div">
      Save
    </Typography>
  </>
);
Save.propTypes = SavePropTypes;

export default Save;
