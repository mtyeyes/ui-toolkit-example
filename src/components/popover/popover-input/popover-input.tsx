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
  pasteButtonText?: string;
  cancelButtonText?: string;
  isPasteButtonDisabled?: boolean;
  isCancelButtonDisabled?: boolean;
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
  pasteButtonText = 'Paste',
  cancelButtonText = 'Cancel',
  isPasteButtonDisabled = false,
  isCancelButtonDisabled = false,
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
        <Button theme="onLight" impact="high" size="small" isDisabled={isPasteButtonDisabled} onClick={handlePaste}>
          {pasteButtonText}
        </Button>
        <Button theme="onLight" impact="none" size="small" isDisabled={isCancelButtonDisabled} onClick={handleCancel}>
          {cancelButtonText}
        </Button>
      </div>
    </>
  );
};
