import React, { ChangeEvent, useRef } from 'react';

import { InputControl } from '../input-controls/input-control';
import { InputELement, InputELementProps } from '../input-element/input-element';

export interface SearchInputProps extends Omit<InputELementProps, 'onChange' | 'disabled'> {
  id: string;
  value: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  setValue: (value: string) => void;
}

export const SearchInput = ({ id, value, setValue, isDisabled, isReadOnly, ...props }: SearchInputProps) => {
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
      <InputControl isDisabled={isDisabled || isReadOnly} type="search" onClick={focusOnSearchField} />
      <InputELement
        disabled={isDisabled || isReadOnly}
        ref={inputRef}
        type="search"
        id={id}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {value !== '' && <InputControl isDisabled={isDisabled || isReadOnly} type="cross" onClick={clearSearchField} />}
    </>
  );
};
