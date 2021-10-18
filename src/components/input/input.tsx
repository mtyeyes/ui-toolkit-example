import React from 'react';

import { FormWrapper, FormWrapperProps } from '../../index';
import { InputField, InputFieldProps } from './input-field/input-field';

export type InputProps = InputFieldProps | (InputWithWrapperProps & InputFieldProps);

interface InputWithWrapperProps extends Omit<FormWrapperProps, 'children' | 'htmlfor' | 'tag'> {
  isWrapped: true;
}

export const Input = (props: InputProps) => {
  if ('isWrapped' in props) {
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

  return <InputField {...props} />;
};
