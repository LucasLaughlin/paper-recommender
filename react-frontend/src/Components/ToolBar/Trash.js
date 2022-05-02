/* React and Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

// =================================================================================================

const TrashPropTypes = {
  selectedArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};

const Trash = ({
  selectedArr,
  label,
  func
}) => (
  <>
    <Tooltip title={label}>
      <IconButton
        disabled={selectedArr.length < 1}
        aria-label={label.toLowerCase}
        onClick={() => func(selectedArr)}
      >
        <DeleteIcon color={(selectedArr.length < 1) ? 'inherit' : 'primary'} />
      </IconButton>
    </Tooltip>
    <Typography color="inherit" variant="subtitle1" component="div">
      {label}
    </Typography>
  </>
);
Trash.propTypes = TrashPropTypes;

export default Trash;
