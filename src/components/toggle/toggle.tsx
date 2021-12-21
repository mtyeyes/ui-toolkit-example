import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './toggle.module.scss';
import cn from 'classnames';

import { FlagRequired } from '../../index';
import { Checkbox } from './checkbox/checkbox';
import { Radiobutton } from './radiobutton/radiobutton';
import { Switch } from './switch/switch';

export interface ToggleProps {
  type: 'checkbox' | 'radiobutton' | 'switch';
  id: string;
  isChecked: IsChecked;
  setIsChecked: SetIsChecked;
  className?: string;
  isIntermidiate?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isFilled?: boolean;
  tabIndex?: number;
  children?: string;
}

type IsChecked = boolean;

type SetIsChecked = (IsChecked: IsChecked) => void | Dispatch<SetStateAction<boolean>>;

export const Toggle = ({
  type = 'checkbox',
  id,
  isChecked,
  setIsChecked,
  className,
  isDisabled = false,
  isInvalid = false,
  isIntermidiate = false,
  isRequired = false,
  isFilled = false,
  tabIndex,
  children,
}: ToggleProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  const labelClassName = cn(
    {
      [styles.checked]: isChecked,
      [styles.disabled]: isDisabled,
      [styles.invalid]: isInvalid,
      [styles.filled]: isFilled,
    },
    styles.label,
    className,
  );

  const renderInputField = () => {
    if (type === 'radiobutton') return <Radiobutton />;
    if (type === 'switch')
      return <Switch isChecked={isChecked} isDisabled={isDisabled} isInvalid={isInvalid} isFilled={isFilled} />;
    return <Checkbox isIntermidiate={isIntermidiate} />;
  };

  return (
    <label className={labelClassName} htmlFor={id}>
      {renderInputField()}
      {children && (
        <span className={cn({ [styles.disabled]: isDisabled }, styles.text)}>
          {children}
          {isRequired && <FlagRequired className={styles.icon} />}
        </span>
      )}
      <input
        id={id}
        name={id}
        className={styles.input}
        checked={isChecked}
        onChange={handleChange}
        required={isRequired}
        disabled={isDisabled}
        tabIndex={tabIndex}
        type={type === 'radiobutton' ? 'radio' : 'checkbox'}
      />
    </label>
  );
};
