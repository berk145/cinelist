import React from 'react';

import { MenuItem, TextField, TextFieldProps } from '@mui/material';

import '../../styles/select.scss';

type IProps = {
  onValueChanged: (value: SelectComponentValue) => void;
  value?: SelectComponentValue | null;
  selectableValues: Array<SelectComponentValue>;
  label?: string;
  optionValueKey?: string;
  optionLabelKey?: string;
  dataTestId?: string;
} & TextFieldProps;

export const Select = (props: IProps) => {
  const {
    onValueChanged,
    value,
    selectableValues,
    label,
    optionValueKey = 'value',
    optionLabelKey = 'label',
    dataTestId,
    ...rest
  } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = selectableValues.find((item) => event.target.value === item.value);
    if (result) onValueChanged(result);
  };

  return (
    <TextField
      {...rest}
      variant='outlined'
      select
      size={'small'}
      label={label}
      value={value ? (value.value as string | number) : ''}
      onChange={onChange}
      className='selectComponent'
    >
      {selectableValues.map((option) => (
        <MenuItem key={option.value as string} value={option.value as string | number}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
