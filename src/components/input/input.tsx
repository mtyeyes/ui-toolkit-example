import React from 'react';

import { FormWrapper, FormWrapperProps } from '../../index';
import { InputField, InputFieldProps } from './input-field/input-field';

export type InputProps = InputFieldProps | (InputWithWrapperProps & InputFieldProps);

interface InputWithWrapperProps extends Omit<FormWrapperProps, 'children' | 'label' | 'htmlfor' | 'tag'> {
  isWrapped: true;
}

export const Input = (props: InputProps) => {
  if ('isWrapped' in props) {
    const { helperCounter, helperText, ...inputProps } = props;

    return (
      <FormWrapper
        tag="div"
        helperCounter={helperCounter}
        helperText={helperText}
        label={props.id}
        htmlFor={props.id}
        isRequired={props.isRequired}
        isInvalid={props.isInvalid}
      >
        <InputField {...inputProps} />
      </FormWrapper>
    );
  }

  return <InputField {...props} />;
};
