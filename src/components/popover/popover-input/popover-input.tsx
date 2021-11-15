import React from 'react';
import styles from './popover-input.module.scss';

export interface PopoverInputProps {
  type: 'input';
  inputOnePlaceholder: string;
  inputOneValue: string;
  setInputOneValue: (value: string | null) => void;
  inputTwoPlaceholder: string;
  inputTwoValue: string;
  setInputTwoValue: (value: string | null) => void;
  handleCancel: () => void;
  handlePaste: () => void;
}

import { Input, Button } from '../../../index';

export const PopoverInput = ({
  inputOnePlaceholder,
  inputOneValue,
  setInputOneValue,
  inputTwoPlaceholder,
  inputTwoValue,
  setInputTwoValue,
  handleCancel,
  handlePaste,
}: PopoverInputProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Input
          isWrapped={false}
          id="popover-1"
          type="text"
          value={inputOneValue}
          setValue={setInputOneValue}
          placeholder={inputOnePlaceholder}
        />
        <Input
          isWrapped={false}
          id="popover-2"
          type="text"
          value={inputTwoValue}
          setValue={setInputTwoValue}
          placeholder={inputTwoPlaceholder}
        />
      </div>
      <div className={styles.actions}>
        <Button theme="onLight" impact="high" size="small" onClick={handlePaste}>
          Paste
        </Button>
        <Button theme="onLight" impact="none" size="small" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </>
  );
};
