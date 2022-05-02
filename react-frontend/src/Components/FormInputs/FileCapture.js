/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

/*  React and Packages */
import React from 'react';
import { useField } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/* Utilities */
import * as Logger from '../../utilities/Logger';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  dropzoneClass: {
    borderColor: theme.palette.inputBorder,
    color: theme.palette.inputText,
    margin: '16px 0 8px 0',
    '&:focus': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      outline: 'none'
    },
    '&:active': {
      borderColor: theme.palette.primary.main
    },
    '&:visited': {
      borderColor: theme.palette.inputBorder
    },
    '&:hover': {
      borderColor: 'black'
    }
  },
  dropZoneText: {
    color: theme.palette.inputText
  }
}));

// =================================================================================================

const FileCapturePropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  fileTypes: PropTypes.arrayOf(PropTypes.string)
};

const FileCaptureDefaultProps = {
  disabled: false,
  label: '',
  handleChange: () => {},
  fileTypes: [
    '.xlsx',
    '.xls',
    'image/*',
    '.doc',
    '.docx',
    '.ppt',
    '.pptx',
    '.txt',
    '.pdf'
  ]
};

/* For more info on fileTypes:
https://react-dropzone.js.org/#section-accepting-specific-file-types
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
 */
const FileCapture = ({
  name,          // Key for redux validation state & formik useFields
  label,         // Label for the
  disabled,      // Disable input field
  handleChange,  // Function triggered on file uploaded to browser,
  fileTypes      // FileTypes to accept (e.g ['.pdf'] or ['image/*])
}) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [fields, meta, helpers] = useField(name);
  return (
    <>
      <Typography>{label}</Typography>
      <DropzoneArea
        acceptedFiles={fileTypes}
        dropzoneClass={classes.dropzoneClass}
        dropzoneParagraphClass={classes.dropZoneText}
        filesLimit={1}
        showFileNames
        maxFileSize={2000000000}
        useChipsForPreview
        onChange={(newFile) => {
          if (newFile[0]) {
            Logger.log('File captured:', newFile[0]);
            helpers.setValue(newFile[0]);
            handleChange(newFile[0]);
          }
        }}
        onDelete={() => helpers.setValue('')}
        inputProps={{ disabled }}
        required
      />
    </>
  );
};
FileCapture.propTypes = FileCapturePropTypes;
FileCapture.defaultProps = FileCaptureDefaultProps;

export default FileCapture;
