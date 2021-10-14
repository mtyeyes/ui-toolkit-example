import React, { ChangeEvent, useRef } from 'react';

import { InputControl } from '../input-controls/input-control';
import { Units } from '../units/units';
import { InputELement, InputELementProps } from '../input-element/input-element';

import PhoneIcon from '../../../../resources/icons/phone.svg';

export interface InputTelProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name' | 'placeholder'> {
  id: string;
  value: string;
  setValue: (value: string) => void;
  isDisabled?: boolean;
}

export const InputTel = ({ id, value, setValue, isDisabled, ...props }: InputTelProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string = unformatePhoneNumber(e.currentTarget.value);
    if (value.length > 11) value = value.slice(0, 11);
    setValue(value);
  };

  const formatPhoneNumber = (value: string) => {
    if (value === undefined || value === '') return undefined;

    let result = '';

    if (value.length > 0) result = `${value.slice(0, 1)}`;
    if (value.length > 1) result = `${result} (${value.slice(1, 4)}`;
    if (value.length > 4) result = `${result}) ${value.slice(4, 7)}`;
    if (value.length > 7) result = `${result} ${value.slice(7, 9)}`;
    if (value.length > 9) result = `${result} ${value.slice(9, 11)}`;

    return result;
  };

  const unformatePhoneNumber = (value: string) => {
    return value.replaceAll(/\D/g, '');
  };

  const focusOnInputField = () => {
    inputRef?.current?.focus();
  };

  return (
    <>
      <Units>+</Units>
      <InputELement
        type="tel"
        id={id}
        name={id}
        value={formatPhoneNumber(value)}
        disabled={isDisabled}
        onChange={handleChange}
        ref={inputRef}
        placeholder="• (•••) ••• •• ••"
        {...props}
      />
      <InputControl tabIndex={-1} onClick={focusOnInputField} isDisabled={isDisabled}>
        {PhoneIcon}
      </InputControl>
    </>
  );
};
