import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './toggle.module.scss';
import cn from 'classnames';

import { Label } from '../../index';
import { Checkbox } from './checkbox/checkbox';
import { Radiobutton } from './radiobutton/radiobutton';
import { Switch } from './switch/switch';

export interface ToggleProps {
  type?: 'checkbox' | 'radiobutton' | 'switch';
  id: string;
  name?: string;
  isChecked: IsChecked;
  setIsChecked: SetIsChecked;
  isIntermidiate?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isFilled?: boolean;
  children?: string;
}

type IsChecked = boolean;

type SetIsChecked = (IsChecked: IsChecked) => void | Dispatch<SetStateAction<boolean>>;

export const Toggle = ({
  type = 'checkbox',
  id,
  name,
  isChecked,
  setIsChecked,
  isDisabled = false,
  isInvalid = false,
  isIntermidiate = false,
  isRequired = false,
  isFilled = false,
  children,
}: ToggleProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  const wrapperClassName = cn(
    {
      [styles.checked]: isChecked,
      [styles.disabled]: isDisabled,
      [styles.invalid]: isInvalid,
      [styles.filled]: isFilled,
    },
    styles.wrapper,
  );

  const labelClassName = cn(
    {
      [styles.labelDisabled]: isDisabled,
      [styles.labelOfSwitch]: type === 'switch',
    },
    styles.label,
  );

  const renderInputField = () => {
    if (type === 'radiobutton') return <Radiobutton />;
    if (type === 'switch')
      return <Switch isChecked={isChecked} isDisabled={isDisabled} isInvalid={isInvalid} isFilled={isFilled} />;
    return <Checkbox isIntermidiate={isIntermidiate} />;
  };

  return (
    <div className={wrapperClassName}>
      {renderInputField()}
      <Label htmlFor={id} isRequired={isRequired} className={labelClassName}>
        {children}
      </Label>
      <input
        id={id}
        name={name}
        className={styles.input}
        checked={isChecked}
        onChange={handleChange}
        required={isRequired}
        disabled={isDisabled}
        type={type === 'radiobutton' ? 'radio' : 'checkbox'}
      />
    </div>
  );
};
