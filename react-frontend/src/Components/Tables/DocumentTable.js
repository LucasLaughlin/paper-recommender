/* React and Packages */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

/* Components */
import TableSearch from '../FormInputs/TableSearch';
import Table from './Table';

import ActionItemWrapper from '../ToolBar/ActionItemWrapper';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(4)
  },
  spacer: {
    flex: '1 1 100%'
  },
  results: {
    flex: '1 1 100%',
    textAlign: 'right'
  },
  tableRow: {
    padding: '0'
  },
  titleHover: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '18px'
  },
  checkBox: {
    color: '#7A91F8',
    borderRadius: '3px'
  },
  actions: {
    flex: '0 1 20%',
    minWidth: '110px',
    marginRight: '10px'
  },
  filterText: {
    marginLeft: '10px'
  }
}));

// =================================================================================================

const DocumentTablePropTypes = {
  list: PropTypes.func.isRequired,
  triggerList: PropTypes.node,
  selectedActions: PropTypes.func
};

const DocumentTableDefaultProps = {
  triggerList: 0,
  selectedActions: () => {}
};

const DocumentTable = ({
  list,            // list function to search for documents
  listRecommendations, // function to list recomendations
  triggerList,     // Prop used to trigger list function (ex: claiming doc changes uploads array)
  selectedActions  // action components appearing right of Select All (e.g. delete, remove)
}) => {
  const classes = useStyles();
  const [documents, setDocuments] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState('publishedDate');
  const [order, setOrder] = useState(-1);
  const [searchStr, setSearchStr] = useState('');
  const [searching, setSearching] = useState(true);

  const listDocuments = async () => {
    setSearching(true);
    const results = await list(searchStr, skip, limit);
    console.log("back to DocumentTable")
    setDocuments(results.documents);
    setDocumentCount(results.count);
    setSearching(false);
  };

  useEffect(() => {
    listDocuments();
  }, [skip, limit, searchStr, triggerList]);

  const handleSearch = async (searchString) => {
    setSkip(0);
    setSort(null);
    setOrder(1);
    setSearchStr(searchString);
  };
  const tableActions = (selectedArr) => (
    <>
      <Box className={classes.spacer} />
      <Typography
        className={classes.results}
        visibility={searching ? 'hidden' : 'visible'}
        color="inherit"
        variant="subtitle1"
        component="div"
        noWrap
      >
        {documentCount}
        {' '}
        Results
      </Typography>
    </>
  );

  const headCells = [
    {
      id: 'title',
      align: 'left',
      disablePadding: true,
      label: <Typography variant="h6">Title</Typography>,
      sortable: true
    },
    {
      id: 'type',
      align: 'left',
      disablePadding: false,
      label: (
        <Typography variant="h6">
          Authors
        </Typography>
      ),
      sortable: true
    },
    {
      id: 'publishedDate',
      align: 'left',
      disablePadding: false,
      label: <Typography variant="h6">arxiv ID</Typography>,
      sortable: true
    }
  ];

  const colMap = (document, isItemSelected, labelId) => {
    return (
      <>
        <TableCell className={classes.tableRow} padding="checkbox">
          <Checkbox
            checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}
            classes={{ root: classes.checkBox }}
          />
        </TableCell>
        <TableCell
          className={classes.tableRow}
          component="th"
          id={labelId}
          scope="row"
          padding="none"
        >
          <a href={`https://arxiv.org/abs/${document.arxiv_id}`}>
            {document.title}
          </a>
          {/* <PrimaryDocActions doc={document} /> */}
        </TableCell>
        <TableCell className={classes.tableRow} align="left">
          {document.authors.join(", ")}
        </TableCell>
        <TableCell className={classes.tableRow} align="left">
          {document.arxiv_id}
        </TableCell>
      </>
    );
  };

  return (
    <Box
      className={classes.content}
      display="flex"
      flexDirection="column"
      alignContent="flex-start"
      flexGrow={1}
    >
      <Typography align="left" variant="h1" gutterBottom={true}>arXiv High Energy Physics Paper Recommender</Typography>
      < br />
      <Typography align="left" >
        Search for any high energy physics paper from the arXiv dataset. When you've found the paper you're looking for, 
        select the checkbox and the most similar papers will appear below. Unselect the original paper before selecting another.  
      </Typography>
      < br />
      < br />
      <TableSearch onSearch={handleSearch} searching={searching} />
      <Table
        rows={documents}
        rowCount={documentCount}
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
        actionsClassName={classes.actions}
        listRecommendations={(selected) =>listRecommendations(selected, skip, limit)}
      />
    </Box>
  );
};
DocumentTable.propTypes = DocumentTablePropTypes;
DocumentTable.defaultProps = DocumentTableDefaultProps;

export default DocumentTable;
