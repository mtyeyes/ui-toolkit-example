import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './input-select.module.scss';
import cn from 'classnames';

import { InputIcon } from '../input-icon/input-icon';
import { InputELement } from '../input-element/input-element';
import { Dropdown, DropdownItemProps } from '../../../../index';
import useCloseModal from '../../../../utils/hooks/use-close-modal';

import { CaretDown } from 'phosphor-react';

export interface InputSelectProps {
  id: string;
  value: string | null;
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
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [displayedValue, setDisplayedValue] = useState<string | null>(null);
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
    const filteredValues = selectableValues.filter((valueName) => {
      if (!inputValue) return true;
      return valueName.includes(inputValue);
    });

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
    setInputValue(null);
  }, [dropdownExpanded]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!dropdownExpanded) {
      setDropdownExpanded(true);
    }

    setInputValue(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!dropdownExpanded && (e.key === 'Enter' || e.code === 'Space')) {
      setDropdownExpanded(true);
      e.preventDefault();
    }
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
        value={displayedValue || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={() => {
          if (dropdownExpanded === false) {
            setDropdownExpanded(true);
          }
        }}
        autoComplete="off"
        placeholder={placeholder}
        className={className}
        ref={inputRef}
      />
      <InputIcon className={cn({ [styles.toggled]: dropdownExpanded }, styles.icon)}>
        <CaretDown size="24px" />
      </InputIcon>
      <Dropdown isExpanded={dropdownExpanded} isShrinkable id={`${id}-dropdown`}>
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
                      setInputValue(null);
                    },
                  },
                ],
        }}
      </Dropdown>
    </>
  );
};
