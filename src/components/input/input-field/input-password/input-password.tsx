import React, { ChangeEvent, useState } from 'react';

import { InputIcon } from '../input-icon/input-icon';
import { InputELement, InputELementProps } from '../input-element/input-element';

import { Eye, EyeClosed } from 'phosphor-react';

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
      <InputIcon isDisabled={isDisabled} onClick={() => setPasswordVisibility((prevState) => !prevState)}>
        {passwordVisibility ? <Eye size="24px" /> : <EyeClosed size="24px" />}
      </InputIcon>
    </>
  );
};
