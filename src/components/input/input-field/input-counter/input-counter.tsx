import React, { ChangeEvent } from 'react';
import styles from './input-counter.module.scss';
import cn from 'classnames';

import { InputELement, InputELementProps } from '../input-element/input-element';
import { InputIcon } from '../input-icon/input-icon';
import { Units } from '../units/units';
import useHandleLongPress from '../../../../utils/hooks/use-handle-long-press';

import { Plus, Minus } from 'phosphor-react';

export interface InputCounterProps extends Omit<InputELementProps, 'onChange' | 'disabled' | 'name'> {
  id: string;
  value: number | string;
  setValue: (value: number) => void;
  isDisabled?: boolean;
  units?: string;
  increment: () => void;
  decrement: () => void;
  longPressDelay?: number;
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
  longPressDelay = 200,
  ...props
}: InputCounterProps) => {
  const { ...decrementBtnProps } = useHandleLongPress(decrement, longPressDelay, [' ']);
  const { ...incrementBtnProps } = useHandleLongPress(increment, longPressDelay, [' ']);

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
      <InputIcon isDisabled={isDisabled} {...decrementBtnProps}>
        <Minus size="24px" />
      </InputIcon>
      <InputIcon isDisabled={isDisabled} {...incrementBtnProps}>
        <Plus size="24px" />
      </InputIcon>
    </>
  );
};
