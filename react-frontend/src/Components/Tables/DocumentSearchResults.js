/* React and Packages */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import CircularProgress from '@material-ui/core/CircularProgress';

/* Components */
import Search from '../FormInputs/Search';
import Table from './Table';
import PrimaryDocActions from '../DocumentActions/PrimaryDocActions';
import DynamicIconMenu from '../Menus/DynamicIconMenu';
import DownloadPdf from '../DocumentActions/DownloadPdf';
import Edit from '../DocumentActions/Edit';
import Fullscreen from '../DocumentActions/Fullscreen';
// import NewTab from '../DocumentActions/NewTab';
import SharePaper from '../DocumentActions/SharePaper';

/* Services */
import citationService from '../../services/citation.service';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(4)
  },
  searchWrapper: {
    maxWidth: '700px'
  },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    flex: '0 1 20%'
  }
}));

// =================================================================================================

const DocumentTablePropTypes = {
  selectedActions: PropTypes.func,
  documents: PropTypes.arrayOf(PropTypes.object)
};

const DocumentTableDefaultProps = {
  selectedActions: () => {},
  documents: []
};

const DocumentTable = ({
  selectedActions,    // action components appearing right of Select All (e.g. delete, remove)
  documents
}) => {
  const classes = useStyles();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState();
  const [order, setOrder] = useState(1);

  const tableActions = (selectedArr) => (
    <>
      {selectedActions(selectedArr)}
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
    },
    {
      id: 'type', align: 'left', disablePadding: false, label: 'Research Activity', sortable: true
    },
    {
      id: 'publishedDate', align: 'left', disablePadding: false, label: 'Year', sortable: true
    }
  ];

  const colMap = (document, isItemSelected, labelId) => {
    const citation = citationService.create(document);
    return (
      <>
        <TableCell className={classes.tableRow} padding="checkbox">
          <Checkbox
            checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </TableCell>
        <TableCell className={classes.tableRow} component="th" id={labelId} scope="row" padding="none">
          <Link to={`../document/${document._id}`}>
            <Typography variant="body1" className={classes.titleHover}>{citation.title}</Typography>
          </Link>
          <Typography variant="body2">{citation.authorStr}</Typography>
          <Typography variant="body2">{citation.theRest}</Typography>
          <PrimaryDocActions doc={document} upload />
        </TableCell>
        <TableCell className={classes.tableRow} align="left">{document.type}</TableCell>
        <TableCell className={classes.tableRow} align="left">{document.publishedDate && document.publishedDate.substring(0, 4)}</TableCell>
      </>
    );
  };

  return (
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
  );
};
DocumentTable.propTypes = DocumentTablePropTypes;
DocumentTable.defaultProps = DocumentTableDefaultProps;

export default DocumentTable;
