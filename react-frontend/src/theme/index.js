import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import layout from './layout';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    typography,
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    layout,
    drawerWidth: '244px'
  })
);

export default theme;
