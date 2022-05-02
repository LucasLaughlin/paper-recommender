/* React & Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import { fade, makeStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import CircularProgress from '@material-ui/core/CircularProgress';


// =================================================================================================

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    border: '1px solid rgba(10, 25, 117, 0.3)',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    marginLeft: 0,
    width: '100%',
    padding: '10px 5px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
      display: 'flex'
    }
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    bottom: '1px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '14px'
  }
}));

// =================================================================================================

const TableSearchPropTypes = {
  onSearch: PropTypes.func.isRequired,
  searching: PropTypes.bool
};
const TableSearchDefaultProps = {
  searching: false
};

const TableSearch = ({
  onSearch,  // Function to trigger on hitting 'enter"
  searching  // Is the search function being triggered?
}) => {
  const classes = useStyles();

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      onSearch(e.target.value);
    }
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          {
            searching ? (
              <CircularProgress color="secondary" size={30} />
            ) : (
              <div />
            ) // prevent size readjustment when searching
          }
        </div>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
};

TableSearch.propTypes = TableSearchPropTypes;
TableSearch.defaultProps = TableSearchDefaultProps;

export default TableSearch;
