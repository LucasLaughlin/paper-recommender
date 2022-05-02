/* React & Packages */
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import { Table as MaterialTable } from '@material-ui/core/';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import ActionItemWrapper from '../ToolBar/ActionItemWrapper';

/* Components */
import TableToolbar from './TableToolbar';
import TableHead from './TableHead';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  tHead: {
    height: '80%'
  },
  table: {
    minWidth: 750,
    borderBottom: '1px solid #F5F5F5'
  },
  tableRow: {
    borderBottom: '1px solid #F5F5F5'
  }
}));

// =================================================================================================

const TablePropTypes = {
  rows: PropTypes.array.isRequired,
  rowCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  skip: PropTypes.number.isRequired,
  setSkip: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  setOrder: PropTypes.func.isRequired,
  tableActions: PropTypes.element,
  headCells: PropTypes.arrayOf(PropTypes.object).isRequired,
  colMap: PropTypes.func.isRequired,
  actionsClassName: PropTypes.object.isRequired
};

const TableDefaultProps = {
  tableActions: () => <> </>
};

const Table = ({
  rows,             // list of items to be displayed as rows
  rowCount,         // # total items
  limit,            // # rows per page
  setLimit,         // Set # rows
  skip,             // page number
  setSkip,          // set page number
  sort,             // column to sort by
  setSort,          // set column sort
  order,            // asc = -1, desc = 1
  setOrder,         // set order
  tableActions,     // Rendered above the table header
  headCells,        // Defines column headers by: {id, align, disablePadding, label, sortable}
  colMap,           // Mapping each row data object to column table display
  actionsClassName, // className for Toolbar action spacing. Passed to Toolbar for select buttons
  listRecommendations
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected([]); // removes selected upon upload or delete
  }, [ limit, skip, sort, order]);
  
  useEffect(()=>{
    listRecommendations(selected);
  }, [selected])

  const handleRequestSort = (event, property) => {
    const isAsc = sort === property && order === 1;
    setOrder(isAsc ? -1 : 1);
    setSort(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.idx);
      setSelected(_.uniq([...selected, ...newSelecteds]));
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <TableToolbar
        classes={classes}
        numSelected={selected.length}
        selectAll={handleSelectAllClick}
        unSelectAll={() => setSelected([])}
        rowCount={rowCount}
        tableActions={tableActions(selected)}
        actionsClassName={actionsClassName}
      />
      <Paper className={classes.paper} elevation={0}>
        <TableContainer>
          <MaterialTable
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <TableHead
              classes={classes.tHead}
              numSelected={selected.length}
              order={order}
              onRequestSort={handleRequestSort}
              rowCount={rowCount}
              sort={sort}
              headCells={headCells}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.idx);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    className={classes.tableRow}
                    // classes={{ root: classes.tableRow }}
                    onClick={(event) => handleClick(event, row.idx)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row._id}
                    selected={isItemSelected}
                  >
                    {colMap(row, isItemSelected, labelId)}
                  </TableRow>
                );
              })}
            </TableBody>
          </MaterialTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rowCount}
          rowsPerPage={limit}
          page={skip}
          onChangePage={(e, newPage) => setSkip(newPage)}
          onChangeRowsPerPage={(e) => setLimit(e.target.value)}
        />
      </Paper>
    </div>
  );
};

Table.propTypes = TablePropTypes;
Table.defaultProps = TableDefaultProps;

export default Table;
