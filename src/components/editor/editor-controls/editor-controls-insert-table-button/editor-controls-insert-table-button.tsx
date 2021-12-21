import React, { useState, useEffect } from 'react';

import { Button, Tooltip, Popover } from '../../../../index';
import { Table } from 'phosphor-react';

export interface EditorControlsInsertTableButtonProps {
  insertTable: (columnsAmount: number, rowsAmount: number) => void;
  isToolbarVisibile: boolean;
}

export const EditorControlsInsertTableButton = ({
  insertTable,
  isToolbarVisibile,
}: EditorControlsInsertTableButtonProps) => {
  const [tooltipAnchor, setTooltipAnchor] = useState<HTMLButtonElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const [columnsAmount, setColumnsAmount] = useState(0);
  const [rowsAmount, setRowsAmount] = useState(0);

  const resetState = () => {
    setIsEnabled(false);
    setColumnsAmount(0);
    setRowsAmount(0);
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
      <Popover
        type="input"
        handleCancel={() => setIsEnabled(false)}
        handlePaste={() => {
          insertTable(columnsAmount, rowsAmount);
          resetState();
        }}
        isPasteButtonDisabled={columnsAmount === 0 || rowsAmount === 0}
        pasteButtonText="Вставить"
        cancelButtonText="Отменить"
        referenceElement={tooltipAnchor}
        position="top"
        align="center"
        isVisible={isEnabled}
        inputOneValue={rowsAmount === 0 ? '' : `${rowsAmount}`}
        setInputOneValue={(value) => {
          setRowsAmount(+value! || 0);
        }}
        inputOnePlaceholder="Количество рядов"
        inputTwoValue={columnsAmount === 0 ? '' : `${columnsAmount}`}
        setInputTwoValue={(value) => {
          setColumnsAmount(+value! || 0);
        }}
        inputTwoPlaceholder="Количество столбцов"
      />
    </>
  );
};
