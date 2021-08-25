import React from 'react';
import { TextField} from '@material-ui/core';
import { useField } from 'formik';
import {
	MuiPickersUtilsProvider, KeyboardDatePicker
} from '@material-ui/pickers';
const YearPicker = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const [value, setValue] = React.useState(new Date());
  const configYearPicker = {
    ...field,
    ...otherProps,
    value : value,
    views:["year"],
    onChange:(newValue) => {
        setValue(newValue);
      },
    inputVariant :'outlined',
    size :'small',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  };

  if(meta && meta.touched && meta.error) {
    configYearPicker.error = true;
    configYearPicker.helperText = meta.error;
  }

  return (
    <KeyboardDatePicker
      {...configYearPicker}
     

    />
  );
};

export default YearPicker;
