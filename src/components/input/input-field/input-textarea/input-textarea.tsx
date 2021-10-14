import React, { ChangeEvent } from 'react';
import styles from './input-textarea.module.scss';

export interface InputTextareaProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
  isDisabled?: boolean;
}

export const InputTextarea = ({ id, value, setValue, isDisabled }: InputTextareaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <textarea id={id} name={id} value={value} onChange={handleChange} disabled={isDisabled} className={styles.input} />
  );
};
