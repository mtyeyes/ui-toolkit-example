import React, { ChangeEvent, useRef } from 'react';

import { InputControl } from '../input-controls/input-control';
import { InputELement, InputELementProps } from '../input-element/input-element';

import EmailIcon from '../../../../resources/icons/email.svg';

export interface InputEmailProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: string;
  setValue: (value: string) => void;
  isDisabled?: boolean;
}

export const InputEmail = ({ id, value, setValue, isDisabled, ...props }: InputEmailProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const focusOnInputField = () => {
    inputRef?.current?.focus();
  };

  return (
    <>
      <InputELement
        type="email"
        id={id}
        name={id}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        ref={inputRef}
        {...props}
      />
      <InputControl tabIndex={-1} onClick={focusOnInputField} isDisabled={isDisabled}>
        {EmailIcon}
      </InputControl>
    </>
  );
};
