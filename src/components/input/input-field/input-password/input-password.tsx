import React, { ChangeEvent, useState } from 'react';

import { InputControl } from '../input-controls/input-control';
import { InputELement, InputELementProps } from '../input-element/input-element';

import PasswordVisibleIcon from '../../../../resources/icons/password-visible.svg';
import PasswordHiddenIcon from '../../../../resources/icons/password-hidden.svg';

export interface InputPasswordProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: string;
  setValue: (value: string) => void;
  isDisabled?: boolean;
}

export const InputPassword = ({ id, value, setValue, isDisabled, ...props }: InputPasswordProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <InputELement
        type={passwordVisibility ? 'text' : 'password'}
        id={id}
        name={id}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        {...props}
      />
      <InputControl isDisabled={isDisabled} onClick={() => setPasswordVisibility((prevState) => !prevState)}>
        {passwordVisibility ? PasswordVisibleIcon : PasswordHiddenIcon}
      </InputControl>
    </>
  );
};