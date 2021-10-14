import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './input-select.module.scss';
import cn from 'classnames';

import { InputControl } from '../input-controls/input-control';
import { InputELement } from '../input-element/input-element';
import { Dropdown, DropdownItemProps } from '../../../../index';
import useCloseModal from '../../../../utils/hooks/use-close-modal';

import DropdownIcon from '../../../../resources/icons/dropdown.svg';

export interface InputSelectProps {
  id: string;
  value: string;
  placeholder?: string;
  className?: string;
  setValue: (value: string | null) => void;
  selectableValues: string[];
  isDisabled?: boolean;
}

export const InputSelect = ({
  id,
  value,
  placeholder,
  className,
  setValue,
  selectableValues,
  isDisabled,
}: InputSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState<string>('');
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
    const displayApplicableData = () => {
      if (dropdownExpanded) {
        return setDisplayedValue(inputValue);
      }
      if (value) {
        return setDisplayedValue(value);
      }
      return setDisplayedValue('');
    };

    displayApplicableData();
  }, [value, inputValue, dropdownExpanded]);

  useEffect(() => {
    setInputValue('');
  }, [dropdownExpanded]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleIconClick = () => {
    setDropdownExpanded((prevState) => !prevState);
  };

  const filteredValuesMapCallback = (valueName: string): DropdownItemProps => {
    const isCurrent = valueName === value;

    const handleClick = () => {
      if (isCurrent) return setValue(null);

      setValue(valueName);
      setDropdownExpanded(false);
    };

    return {
      type: 'label',
      isCurrent: isCurrent,
      onClick: handleClick,
      children: valueName,
      key: valueName,
    };
  };

  return (
    <>
      <InputELement
        disabled={isDisabled}
        type="text"
        name={`${id}-input`}
        id={`${id}-input`}
        value={displayedValue}
        onChange={handleChange}
        onFocus={() => {
          setDropdownExpanded(true);
        }}
        autoComplete="off"
        placeholder={placeholder}
        className={className}
        ref={inputRef}
      />
      <InputControl
        className={cn({ [styles.toggled]: dropdownExpanded }, styles.icon)}
        isDisabled={isDisabled}
        onClick={handleIconClick}
      >
        {DropdownIcon}
      </InputControl>
      <Dropdown isExpanded={dropdownExpanded} id={`${id}-dropdown`} tabIndex={dropdownExpanded ? 0 : -1}>
        {{
          menu:
            filteredSelectableValues.length !== 0
              ? filteredSelectableValues.map(filteredValuesMapCallback)
              : [
                  {
                    type: 'label',
                    key: 'novalues',
                    children: 'Совпадений не найдено. Сбросить фильтр?',
                    onClick: () => {
                      setInputValue('');
                    },
                  },
                ],
        }}
      </Dropdown>
    </>
  );
};
