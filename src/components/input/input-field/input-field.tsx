import React from 'react';
import styles from './input-field.module.scss';
import cn from 'classnames';

import { InputText, InputTextProps } from './input-text/input-text';
import { InputSearch, InputSearchProps } from './input-search/input-search';
import { InputPassword, InputPasswordProps } from './input-password/input-password';
import { InputEmail, InputEmailProps } from './input-email/input-email';
import { InputTel, InputTelProps } from './input-tel/input-tel';
import { InputCounter, InputCounterProps } from './input-counter/input-counter';
import { InputTextarea, InputTextareaProps } from './input-textarea/input-textarea';
import { InputFile, InputFileProps } from './input-file/input-file';
import { InputSelect, InputSelectProps } from './input-select/input-select';
import { InputMultiselect, InputMultiselectProps } from './input-multiselect/input-multiselect';

import IconLocked from '../../../resources/icons/locked.svg';

export type InputFieldProps =
  | InputTextFieldProps
  | InputFileFieldProps
  | InputPasswordFieldProps
  | InputCounterFieldProps
  | InputSearchFieldProps
  | InputTextareaFieldProps
  | InputEmailFieldProps
  | InputTelFieldProps
  | InputSelectFieldProps
  | InputMultiselectFieldProps;

interface InputTextFieldProps extends CommonFieldProps, InputTextProps {
  type: 'text';
}

interface InputPasswordFieldProps extends CommonFieldProps, InputPasswordProps {
  type: 'password';
}

interface InputFileFieldProps extends CommonFieldProps, InputFileProps {
  type: 'file';
}

interface InputCounterFieldProps extends CommonFieldProps, InputCounterProps {
  type: 'number';
}

interface InputTextareaFieldProps extends CommonFieldProps, InputTextareaProps {
  type: 'textarea';
}

interface InputSearchFieldProps extends CommonFieldProps, InputSearchProps {
  type: 'search';
}

interface InputEmailFieldProps extends CommonFieldProps, InputEmailProps {
  type: 'email';
}

interface InputSelectFieldProps extends CommonFieldProps, InputSelectProps {
  type: 'select';
}

interface InputMultiselectFieldProps extends CommonFieldProps, InputMultiselectProps {
  type: 'multiselect';
}

interface InputTelFieldProps extends CommonFieldProps, InputTelProps {
  type: 'tel';
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
  type,
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
      [styles.wrappable]: type === 'file',
    },
    styles.container,
    className,
  );

  const renderInput = () => {
    const commonInputProps = { isDisabled: isDisabled || isReadOnly, className: styles.input };

    if (type === 'text')
      return (
        <InputText {...commonInputProps} {...(props as Omit<InputTextFieldProps, keyof typeof commonInputProps>)} />
      );
    if (type === 'file')
      return (
        <InputFile isDisabled={isDisabled} {...(props as Omit<InputFileFieldProps, keyof typeof commonInputProps>)} />
      );
    if (type === 'textarea')
      return (
        <InputTextarea
          isDisabled={isDisabled}
          {...(props as Omit<InputTextareaFieldProps, keyof typeof commonInputProps>)}
        />
      );
    if (type === 'password') {
      return (
        <InputPassword
          {...commonInputProps}
          {...(props as Omit<InputPasswordFieldProps, keyof typeof commonInputProps>)}
        />
      );
    }
    if (type === 'number')
      return (
        <InputCounter
          {...commonInputProps}
          {...(props as Omit<InputCounterFieldProps, keyof typeof commonInputProps>)}
        />
      );
    if (type === 'search')
      return (
        <InputSearch {...commonInputProps} {...(props as Omit<InputSearchFieldProps, keyof typeof commonInputProps>)} />
      );
    if (type === 'email')
      return (
        <InputEmail {...commonInputProps} {...(props as Omit<InputEmailFieldProps, keyof typeof commonInputProps>)} />
      );
    if (type === 'tel')
      return <InputTel {...commonInputProps} {...(props as Omit<InputTelFieldProps, keyof typeof commonInputProps>)} />;
    if (type === 'select')
      return (
        <InputSelect {...commonInputProps} {...(props as Omit<InputSelectFieldProps, keyof typeof commonInputProps>)} />
      );
    if (type === 'multiselect')
      return (
        <InputMultiselect
          {...commonInputProps}
          {...(props as Omit<InputMultiselectFieldProps, keyof typeof commonInputProps>)}
        />
      );
  };

  return (
    <div className={containerClassName}>
      {renderInput()}
      {(isDisabled || isReadOnly) && <IconLocked className={styles.iconLocked} />}
    </div>
  );
};
