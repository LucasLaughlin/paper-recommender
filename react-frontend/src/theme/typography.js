import palette from './palette';

export default {
  fontFamily: 'Roboto',
  h1: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: '40px',
    lineHeight: 1.1
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: '38px',
    lineHeight: 1.5
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: '32px',
    lineHeight: 1.25
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: 1.35
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: '20px',
    lineHeight: 1.4
  },
  h6: {
    color: palette.primary.hSix,
    fontWeight: 500,
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: '19px',
    letterSpacing: '0em'
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '16px',
    lineHeight: 1.4
  },
  subtitle2: {
    color: palette.text.secondary.main,
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '18.75px'
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '16.41px'
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '14px',
    lineHeight: '18px',
    fontStyle: 'normal',
    fontWeight: 400
  },
  button: {
    color: palette.primary.main,
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '16.41px',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textAlign: 'center',
    textTransform: 'none'
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '12px',
    // lineHeight: 1.35,
    lineHeight: '14px'
  },
  overline: {
    fontSize: '13px',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
};
