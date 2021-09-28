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
  state?: State;
  isRequired?: boolean;
  isFilled?: boolean;
  children?: string;
}

export type State = 'disabled' | 'invalid';

type IsChecked = boolean;

type SetIsChecked = (IsChecked: IsChecked) => void | Dispatch<SetStateAction<boolean>>;

export const Toggle = ({
  type = 'checkbox',
  id,
  name,
  isChecked,
  setIsChecked,
  state,
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
      [styles.disabled]: state === 'disabled',
      [styles.invalid]: state === 'invalid',
      [styles.filled]: isFilled,
    },
    styles.wrapper,
  );

  const labelClassName = cn(
    {
      [styles.labelDisabled]: state === 'disabled',
      [styles.labelOfSwitch]: type === 'switch',
    },
    styles.label,
  );

  const renderInputBox = () => {
    if (type === 'radiobutton') return <Radiobutton />;
    if (type === 'switch') return <Switch isChecked={isChecked} state={state} isFilled={isFilled} />;
    return <Checkbox isIntermidiate={isIntermidiate} />;
  };

  return (
    <div className={wrapperClassName}>
      {renderInputBox()}
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
        disabled={state === 'disabled'}
        type={type === 'radiobutton' ? 'radio' : 'checkbox'}
      />
    </div>
  );
};
