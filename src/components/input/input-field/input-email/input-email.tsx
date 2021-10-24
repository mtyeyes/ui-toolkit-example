import React, { ChangeEvent } from 'react';

import { InputIcon } from '../input-icon/input-icon';
import { InputELement, InputELementProps } from '../input-element/input-element';

import EmailIcon from '../../../../resources/icons/email.svg';

export interface InputEmailProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: string;
  setValue: (value: string) => void;
  isDisabled?: boolean;
}

export const InputEmail = ({ id, value, setValue, isDisabled, ...props }: InputEmailProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
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
        {...props}
      />
      <InputIcon>{EmailIcon}</InputIcon>
    </>
  );
};
