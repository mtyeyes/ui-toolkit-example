import React, { ChangeEvent } from 'react';
import styles from './input-counter.module.scss';
import cn from 'classnames';

import { InputELement, InputELementProps } from '../input-element/input-element';
import { InputControl } from '../input-controls/input-control';
import { Units } from '../units/units';

import PlusIcon from '../../../../resources/icons/plus.svg';
import MinusIcon from '../../../../resources/icons/minus.svg';

export interface InputCounterProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: number | string;
  setValue: (value: number) => void;
  isDisabled?: boolean;
  units?: string;
  increment: () => void;
  decrement: () => void;
}

export const InputCounter = ({
  id,
  value,
  setValue,
  isDisabled,
  increment,
  decrement,
  units,
  className,
  ...props
}: InputCounterProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.currentTarget.value.replaceAll(/\D/g, ''));
    if (!isNaN(newValue)) return setValue(newValue);
    if (e.currentTarget.value === '') return setValue(0);
  };

  return (
    <>
      {units && <Units>{units}</Units>}
      <InputELement
        type="number"
        id={id}
        name={id}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        className={cn(styles.input, className)}
        {...props}
      />
      <InputControl isDisabled={isDisabled} onClick={decrement}>
        {MinusIcon}
      </InputControl>
      <InputControl isDisabled={isDisabled} onClick={increment}>
        {PlusIcon}
      </InputControl>
    </>
  );
};