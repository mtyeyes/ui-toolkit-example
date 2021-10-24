import React, { ChangeEvent } from 'react';

import { InputIcon } from '../input-icon/input-icon';
import { InputELement, InputELementProps } from '../input-element/input-element';

import SearchIcon from '../../../../resources/icons/search.svg';
import ResetIcon from '../../../../resources/icons/reset.svg';

export interface InputSearchProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: string;
  isDisabled?: boolean;
  setValue: (value: string) => void;
}

export const InputSearch = ({ id, value, setValue, isDisabled, ...props }: InputSearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const clearSearchField = () => {
    setValue('');
  };

  return (
    <>
      <InputIcon>{SearchIcon}</InputIcon>
      <InputELement
        disabled={isDisabled}
        type="search"
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {value !== '' && <InputIcon onClick={clearSearchField}>{ResetIcon}</InputIcon>}
    </>
  );
};
