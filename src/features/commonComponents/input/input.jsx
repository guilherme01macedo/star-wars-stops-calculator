import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-root': {
      color: '#1e1e1e',
      backgroundColor: '#FFF',
      fontSize: '14px', 
      width: '100%',
      borderRadius: '4px',
    },
    '& label.Mui-focused': {
      color: '#FFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFF',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#FFF',
    },
    '& ::placeholder':{
      color: '#9c9c9cf0',
      marginLeft: '8px',
      opacity: 1,
    },
  },
}));

const Input = ({placeholder, value, setValue, ...props}) => {
  const classes = useStyles();
  return (
    <TextField
      id={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      fullWidth
      classes={{root:classes.root}}
      {...props}
    />
  );
};

Input.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  setValue: () => {},
  value: '',
  placeholder: '',
};

export default Input;
