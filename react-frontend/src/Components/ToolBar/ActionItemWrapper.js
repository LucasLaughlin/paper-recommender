/* React and Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import Box from '@material-ui/core/Box';

// =================================================================================================

const ActionItemWrapperPropTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.object.isRequired
};

const ActionItemWrapper = ({
  children,
  className
}) => (
  <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" className={className}>
    {children}
  </Box>
);
ActionItemWrapper.propTypes = ActionItemWrapperPropTypes;

export default ActionItemWrapper;
