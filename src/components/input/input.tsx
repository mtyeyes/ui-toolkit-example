import React from 'react';

import { FormWrapper, FormWrapperProps } from '../../index';
import { InputField, InputFieldProps } from './input-field/input-field';

export type InputProps = InputWithWrapperProps | InputWithoutWrapperProps;

interface InputWithWrapperProps extends InputFieldProps, Omit<FormWrapperProps, 'children'> {
  isWrapped: true;
  name: string;
}

interface InputWithoutWrapperProps extends InputFieldProps {
  isWrapped?: false;
  name: string;
}

export const Input = ({
  isWrapped = false,
  isDisabled = false,
  isReadOnly = false,
  isInvalid = false,
  isCondensed = false,
  isFilled = false,
  value,
  setValue,
  id,
  placeholder,
  name,
  type = 'search',
  ...props
}: InputProps) => {
  const inputFieldProps = {
    id,
    value,
    setValue,
    placeholder,
    type,
    name,
    isCondensed,
    isDisabled,
    isInvalid,
    isReadOnly,
    isFilled,
  };

  return isWrapped ? (
    <FormWrapper
      helperCounter={(props as InputWithWrapperProps).helperCounter}
      helperText={(props as InputWithWrapperProps).helperText}
      label={name}
      htmlFor={id}
      isRequired={(props as InputWithWrapperProps).isRequired}
      isInvalid={isInvalid}
    >
      <InputField {...inputFieldProps} />
    </FormWrapper>
  ) : (
    <InputField {...inputFieldProps} />
  );
};
