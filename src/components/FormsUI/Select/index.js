import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
import { StoreMallDirectory } from '@material-ui/icons';

const SelectWrapper = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };
 
  const configSelect = {
    ...field,
    ...otherProps,
    size:'small',
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {/* {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })} */}
    </TextField>
  );
};

export default SelectWrapper;
