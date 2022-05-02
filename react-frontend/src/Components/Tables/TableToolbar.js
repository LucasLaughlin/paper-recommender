/* React & Packages */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

/* Components */
import ActionItemWrapper from '../ToolBar/ActionItemWrapper';

// =================================================================================================

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0
  },
  checkBox: {
    color: '#7A91F8',
    borderRadius: '3px'
  }
}));

// =================================================================================================

const TableToolbarPropTypes = {
  numSelected: PropTypes.number.isRequired,
  selectAll: PropTypes.func.isRequired,
  unSelectAll: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
  tableActions: PropTypes.element.isRequired,
  actionsClassName: PropTypes.object.isRequired
};

const TableToolbar = ({
  numSelected,      // Number of Selected Rows
  selectAll,        // Function to select all currently displayed rows
  unSelectAll,      // Function to de-select all currently selected rows
  rowCount,         // Total number of possible rows
  tableActions,     // JSX for actions with selected rows
  actionsClassName  // className for Toolbar actions spacing
}) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      {tableActions}
    </Toolbar>
  );
};

TableToolbar.propTypes = TableToolbarPropTypes;

export default TableToolbar;
