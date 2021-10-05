import React from 'react';
import styles from './input-field.module.scss';
import cn from 'classnames';

import IconLocked from '../../../resources/icons/locked.svg';
import { SearchInput, SearchInputProps } from './search-input/search-input';

export type InputFieldProps = SearchInputFieldProps;

interface SearchInputFieldProps extends CommonFieldProps, SearchInputProps {
  type: 'search';
}

interface CommonFieldProps {
  className?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isCondensed?: boolean;
  isInvalid?: boolean;
  isFilled?: boolean;
}

export const InputField = ({
  type = 'search',
  className,
  isDisabled = false,
  isReadOnly = false,
  isCondensed = false,
  isInvalid = false,
  isFilled = false,
  ...props
}: InputFieldProps) => {
  const containerClassName = cn(
    {
      [styles.condensed]: isCondensed,
      [styles.readOnly]: isReadOnly,
      [styles.invalid]: isInvalid,
      [styles.disabled]: isDisabled,
      [styles.filled]: isFilled,
    },
    styles.container,
    className,
  );

  const renderInput = () => {
    if (type === 'search') {
      return <SearchInput isDisabled={isDisabled} isReadOnly={isReadOnly} className={styles.input} {...props} />;
    }
  };

  return (
    <div className={containerClassName}>
      {renderInput()}
      {(isDisabled || isReadOnly) && <IconLocked className={styles.iconLocked} />}
    </div>
  );
};
