import React, { ChangeEvent } from 'react';

import { InputELement, InputELementProps } from '../input-element/input-element';
import { Units } from '../units/units';

export interface InputTextProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: string;
  setValue: (value: string) => void;
  isDisabled?: boolean;
  unitsLeftSide?: string;
  unitsRightSide?: string;
}

export const InputText = ({
  id,
  value,
  setValue,
  isDisabled,
  unitsLeftSide,
  unitsRightSide,
  ...props
}: InputTextProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      {unitsLeftSide && <Units>{unitsLeftSide}</Units>}
      <InputELement
        type="text"
        id={id}
        name={id}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        {...props}
      />
      {unitsRightSide && <Units>{unitsRightSide}</Units>}
    </>
  );
};
