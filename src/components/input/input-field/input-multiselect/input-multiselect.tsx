import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './input-multiselect.module.scss';
import cn from 'classnames';

import { InputControl } from '../input-controls/input-control';
import { InputELement } from '../input-element/input-element';
import { Dropdown, DropdownItemProps } from '../../../../index';
import { Chip } from '../../../../index';
import useCloseModal from '../../../../utils/hooks/use-close-modal';

import ResetIcon from '../../../../resources/icons/reset.svg';
import DropdownIcon from '../../../../resources/icons/dropdown.svg';

export interface InputMultiselectProps {
  id: string;
  placeholder?: string;
  className?: string;
  selectedValues: string[];
  setSelectedValues: (arr: string[]) => void;
  selectableValues: string[];
  setSelectableValues: (arr: string[]) => void;
  isDisabled?: boolean;
}

export const InputMultiselect = ({
  id,
  placeholder,
  className,
  selectedValues,
  setSelectedValues,
  selectableValues,
  setSelectableValues,
  isDisabled,
}: InputMultiselectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSelectableValues, setFilteredSelectableValues] = useState<string[]>([]);
  const [dropdownExpanded, setDropdownExpanded] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useCloseModal(
    dropdownExpanded,
    () => {
      setDropdownExpanded(false);
    },
    inputRef.current?.parentNode!,
  );

  useEffect(() => {
    if (isDisabled) setDropdownExpanded(false);
  }, [isDisabled]);

  useEffect(() => {
    const filteredValues = selectableValues.filter((valueName) => valueName.includes(inputValue));

    setFilteredSelectableValues(filteredValues);
  }, [inputValue, selectableValues]);

  useEffect(() => {
    setInputValue('');
  }, [dropdownExpanded]);

  useEffect(() => {
    const handleNewSelectableValue = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        setSelectableValues([...selectableValues, inputValue]);
        setSelectedValues([...selectedValues, inputValue]);
      }
    };

    if (filteredSelectableValues.length === 0 && inputValue !== '') {
      document.addEventListener('keydown', handleNewSelectableValue);
    }

    return () => {
      document.removeEventListener('keydown', handleNewSelectableValue);
    };
  }, [selectableValues, selectedValues, filteredSelectableValues, inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleResetIconClick = () => {
    setSelectedValues([]);
  };

  const handleDropdownIconClick = () => {
    setDropdownExpanded((prevState) => !prevState);
  };

  const filteredValuesMapCallback = (valueName: string): DropdownItemProps => {
    const isCurrent = selectedValues.includes(valueName);

    const handleChecked = (checked: boolean) => {
      checked
        ? setSelectedValues([...selectedValues, valueName])
        : setSelectedValues(selectedValues.filter((value) => value !== valueName));
    };

    return {
      type: 'checkbox',
      isChecked: isCurrent,
      setIsChecked: handleChecked,
      id: `${id}-${valueName}`,
      children: valueName,
      key: valueName,
    };
  };

  return (
    <>
      {selectedValues.length > 0 && (
        <Chip
          isDisabled={isDisabled}
          onClick={() => {
            setDropdownExpanded(true);
          }}
        >{`Выбрано: ${selectedValues.length}`}</Chip>
      )}
      <InputELement
        disabled={isDisabled}
        type="text"
        name={`${id}-input`}
        id={`${id}-input`}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => {
          setDropdownExpanded(true);
        }}
        autoComplete="off"
        placeholder={selectedValues.length > 0 ? undefined : placeholder}
        className={className}
        ref={inputRef}
      />
      {selectedValues.length > 0 ? (
        <InputControl className={styles.icon} isDisabled={isDisabled} onClick={handleResetIconClick}>
          {ResetIcon}
        </InputControl>
      ) : (
        <InputControl
          className={cn({ [styles.toggled]: dropdownExpanded }, styles.icon)}
          isDisabled={isDisabled}
          onClick={handleDropdownIconClick}
        >
          {DropdownIcon}
        </InputControl>
      )}

      <Dropdown isExpanded={dropdownExpanded} id={`${id}-dropdown`} tabIndex={dropdownExpanded ? 0 : -1}>
        {{
          menu:
            filteredSelectableValues.length !== 0 || inputValue === ''
              ? filteredSelectableValues.map(filteredValuesMapCallback)
              : [
                  {
                    type: 'label',
                    key: 'novalues',
                    children: 'Нажмите Enter, чтобы добавить',
                    onClick: () => {
                      setSelectableValues([...selectableValues, inputValue]);
                      setSelectedValues([...selectedValues, inputValue]);
                    },
                  },
                ],
        }}
      </Dropdown>
    </>
  );
};
