import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  alternate: 'rgb(247, 249, 250)',
  primary: {
    // Blue
    light: '#E5E5E5',
    main: '#0658F8',
    selected: '#DFE3FA',
    hSix: '#0A1975',
    button: '#6782F7'
  },
  secondary: {
    // Gray
    dashboard: '#FCFCFC',
    extraLight: '#F3F4FA',
    light: '#888888',
    main: '#545252'
  },
  tertiary: {
    // Magenta
    main: '#C067F7',
    // Red
    highlight: '#F60C0C'
  },
  darkPink: '#822B76',
  lightPurple: '#EBEEFF',
  background: {
    // Off-White
    main: '#fcfcfc'
  },
  sideBar: {
    // Off-White
    background: '#f3f4fa'
  },
  header: {
    // White
    background: '#FFFFFF',
    // Gray
    text: '#727070'
  },
  // Off-White/Blue
  tableHeader: '#EFF0F5',
  tonalOffset: 0.6, // tonal Offset > 0.6 will generate out of range error
  contrastThreshold: 3,
  // Gray
  inputText: '#C4C4C4',
  inputBorder: '#C4C4C4',
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    // Dark Blue
    // primary: '#121037',

    // Dan Text
    primary: '#545252',
    secondary: colors.blueGrey[600],
    contrastText: white,
    link: colors.blue[600]
  },
  /* background: {
    default: 'theme',
    paper: white
  }, */
  icon: '#EF7B56',
  divider: colors.grey[600]
};
