import React, { ChangeEvent, useRef } from 'react';

import { InputControl } from '../input-controls/input-control';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const focusOnSearchField = () => {
    inputRef?.current?.focus();
  };

  const clearSearchField = () => {
    setValue('');
  };

  return (
    <>
      <InputControl tabIndex={-1} isDisabled={isDisabled} onClick={focusOnSearchField}>
        {SearchIcon}
      </InputControl>
      <InputELement
        disabled={isDisabled}
        ref={inputRef}
        type="search"
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {value !== '' && (
        <InputControl isDisabled={isDisabled} onClick={clearSearchField}>
          {ResetIcon}
        </InputControl>
      )}
    </>
  );
};
