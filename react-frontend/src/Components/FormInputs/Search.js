/* React & Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

/* Components */

import MagnifyingGlass from '../../theme/icon_components/MagnifyingGlass';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    border: '1px solid rgba(10, 25, 117, 0.3)',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.light, 0.25)
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
      display: 'flex'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
}));

// =================================================================================================

const SearchPropTypes = {
  onSearch: PropTypes.func.isRequired,
  searching: PropTypes.bool
};
const SearchDefaultProps = {
  searching: false
};

const Search = ({
  onSearch, // Function to trigger on hitting 'enter"
  searching // Is the search function being triggered?
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
          <MagnifyingGlass />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
          onKeyDown={handleEnter}
        />
      </div>
      {
        searching ? (
          <CircularProgress color="secondary" size={30} />
        ) : (
          <Box width={46} />
        ) // prevent size readjustment when searching
      }
    </>
  );
};
Search.propTypes = SearchPropTypes;
Search.defaultProps = SearchDefaultProps;

export default Search;
