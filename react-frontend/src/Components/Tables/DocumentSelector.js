/* React and Packages */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Typography } from '@material-ui/core';

/* Components */
import Table from './Table';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0)
  },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    flex: '0 1 20%'
  }
}));

// =================================================================================================

const DocumentSelectorPropTypes = {
  documents: PropTypes.array.isRequired,
  actions: PropTypes.element
};

const DocumentSelectorDefaultProps = {
  actions: (<> </>)
};

const DocumentSelector = ({
  documents,
  actions
}) => {
  const classes = useStyles();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState();
  const [order, setOrder] = useState(1);

  const tableActions = (selectedArr) => (
    <>
      {actions(selectedArr)}
      <Box className={classes.spacer} />
      <Typography className={classes.actions} color="inherit" variant="subtitle1" component="div">
        {documents.length}
        {' '}
        Results
      </Typography>
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const headCells = [
    {
      id: 'title', align: 'left', disablePadding: true, label: 'Title', sortable: true
    }
  ];

  const colMap = (document, isItemSelected, labelId) => (
    <>
      <TableCell className={classes.tableRow} padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell>
      <TableCell className={classes.tableRow} component="th" id={labelId} scope="row" padding="none">
        {citationService.create(document).stylized}
      </TableCell>
    </>
  );

  return (
    <Box
      className={classes.container}
      display="flex"
      flexDirection="column"
      flexGrow={1}
    >
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <Table
          rows={documents.slice(skip * limit, (skip + 1) * limit)}
          rowCount={documents.length}
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
          sort={sort}
          setSort={setSort}
          order={order}
          setOrder={setOrder}
          headCells={headCells}
          colMap={colMap}
          tableActions={tableActions}
        />
      </Box>
    </Box>
  );
};
DocumentSelector.propTypes = DocumentSelectorPropTypes;
DocumentSelector.defaultProps = DocumentSelectorDefaultProps;

export default DocumentSelector;
