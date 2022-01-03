import React, { useState, useEffect } from 'react';
import styles from './editor-controls-insert-table-button.module.scss';

import { Button, Input, Tooltip, Popover } from '../../../../index';
import { Table } from 'phosphor-react';

export interface EditorControlsInsertTableButtonProps {
  insertTable: (columnsAmount: number, rowsAmount: number) => void;
  isToolbarVisibile: boolean;
}

const maxAmount = 30;
const minAmount = 1;

export const EditorControlsInsertTableButton = ({
  insertTable,
  isToolbarVisibile,
}: EditorControlsInsertTableButtonProps) => {
  const [tooltipAnchor, setTooltipAnchor] = useState<HTMLButtonElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const [columnsAmount, setColumnsAmount] = useState(minAmount);
  const [rowsAmount, setRowsAmount] = useState(minAmount);

  const resetState = () => {
    setIsEnabled(false);
    setColumnsAmount(minAmount);
    setRowsAmount(minAmount);
  };

  const handleAmountChange = (newAmount: number, setAmount: React.Dispatch<React.SetStateAction<number>>) => {
    if (newAmount > maxAmount) return setAmount(maxAmount);
    if (newAmount < minAmount) return setAmount(minAmount);
    setAmount(newAmount);
  };

  const incrementAmount = (setAmount: React.Dispatch<React.SetStateAction<number>>) => {
    setAmount((prevValue) => (prevValue >= maxAmount ? maxAmount : ++prevValue));
  };

  const decrementAmount = (setAmount: React.Dispatch<React.SetStateAction<number>>) => {
    setAmount((prevValue) => (prevValue <= minAmount ? minAmount : --prevValue));
  };

  useEffect(() => {
    if (!isToolbarVisibile) resetState();
  }, [isToolbarVisibile]);

  return (
    <>
      <Button
        ref={setTooltipAnchor}
        theme="onLight"
        impact="none"
        icon="only"
        size="small"
        iconComponent={<Table size="24px" />}
        onClick={() => {
          setIsEnabled((prevState) => !prevState);
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <Tooltip
        isVisible={!isEnabled && (isHovered || isFocused)}
        size="small"
        theme="dark"
        position="top"
        align="center"
        referenceElement={tooltipAnchor}
      >
        {'Таблица'}
      </Tooltip>
      <Popover isVisible={isEnabled} position="top" referenceElement={tooltipAnchor} type="container">
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="editor-columns-amount">
              Столбцов
            </label>
            <Input
              isWrapped={false}
              id="editor-columns-amount"
              type="number"
              value={columnsAmount}
              setValue={(newValue) => {
                handleAmountChange(newValue, setColumnsAmount);
              }}
              increment={() => {
                incrementAmount(setColumnsAmount);
              }}
              decrement={() => {
                decrementAmount(setColumnsAmount);
              }}
              placeholder="Столбцов в таблице"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="editor-rows-amount">
              Рядов
            </label>
            <Input
              isWrapped={false}
              id="editor-rows-amount"
              type="number"
              value={rowsAmount}
              setValue={(newValue) => {
                handleAmountChange(newValue, setRowsAmount);
              }}
              increment={() => {
                incrementAmount(setRowsAmount);
              }}
              decrement={() => {
                decrementAmount(setRowsAmount);
              }}
              placeholder="Строк в таблице"
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            theme="onLight"
            impact="high"
            size="small"
            isDisabled={!columnsAmount || !rowsAmount}
            onClick={() => {
              insertTable(columnsAmount, rowsAmount);
            }}
          >
            Вставить
          </Button>
          <Button theme="onLight" impact="none" size="small" onClick={resetState}>
            Отмена
          </Button>
        </div>
      </Popover>
    </>
  );
};
