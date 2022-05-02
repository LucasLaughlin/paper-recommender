/* React & Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import TableCell from '@material-ui/core/TableCell';
import TableHeadMui from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles } from '@material-ui/core/styles';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  tableHeader: {
    backgroundColor: theme.palette.tableHeader,
    borderRadius: '6px 6px 0px 0px'
  },
  label: {
    color: '#0A1975'
  }
}));

// =================================================================================================

const TableHeadPropTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf([1, -1]).isRequired,
  sort: PropTypes.string.isRequired,
  headCells: PropTypes.array.isRequired
};

const TableHead = ({
  order, // asc = -1, desc = 1
  onRequestSort, // Function to trigger re-order in Table.js
  sort, // Column to sort by
  headCells // Columns heads
}) => {
  const classes = useStyles();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const getOrderString = (ordr) => {
    if (ordr === -1) return 'desc';
    return 'asc';
  };

  return (
    <TableHeadMui className={classes.tableHeader}>
      <TableRow>
        <TableCell padding="checkbox" />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={sort === headCell.id ? getOrderString(order) : false}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={sort === headCell.id}
                direction={sort === headCell.id ? getOrderString(order) : 'asc'}
                onClick={
                  headCell.sortable ? createSortHandler(headCell.id) : () => {}
                }
              >
                {headCell.label}
                {sort === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === -1 ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              <>{headCell.label}</>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
};

TableHead.propTypes = TableHeadPropTypes;

export default TableHead;
