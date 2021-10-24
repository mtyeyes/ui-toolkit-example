import React from 'react';

import { FormWrapper, FormWrapperProps } from '../../index';
import { InputField, InputFieldProps } from './input-field/input-field';

export type InputProps = InputWithoutWrapperProps | InputWithWrapperProps;

type InputWithoutWrapperProps = { isWrapped?: false } & InputFieldProps;

type InputWithWrapperProps = { isWrapped: true } & InputFieldProps &
  Omit<FormWrapperProps, 'children' | 'htmlfor' | 'tag'>;

export const Input = (props: InputProps) => {
  if (props.isWrapped) {
    const { isWrapped, label, helperCounter, helperText, ...inputProps } = props;

    return (
      <FormWrapper
        tag="div"
        helperCounter={helperCounter}
        helperText={helperText}
        label={label}
        htmlFor={props.id}
        isRequired={props.isRequired}
        isInvalid={props.isInvalid}
        isDisabled={props.isDisabled}
      >
        <InputField {...inputProps} />
      </FormWrapper>
    );
  }
  const { isWrapped, ...inputProps } = props;

  return <InputField {...inputProps} />;
};
