import React, { ReactNode } from 'react';
import styles from './form-wrapper.module.scss';
import cn from 'classnames';

import { Counter, Helpers } from './helpers/helpers';
import { Label } from '../../index';

export type FormWrapperProps = FormWrapperFieldsetProps | FormWrapperLabeledProps;

interface FormWrapperFieldsetProps extends CommonFormWrapperProps {
  tag?: 'fieldset';
}

interface FormWrapperLabeledProps extends CommonFormWrapperProps {
  tag: 'div';
  htmlFor?: string;
}

interface CommonFormWrapperProps {
  label: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  helperText?: string;
  helperCounter?: Counter;
}

export const FormWrapper = ({
  label,
  tag = 'fieldset',
  isRequired,
  isInvalid,
  isDisabled,
  helperText,
  helperCounter,
  children,
  ...props
}: FormWrapperProps) => {
  const FieldTag = tag as keyof JSX.IntrinsicElements;
  const fieldClassName = cn({ [styles.invalid]: isInvalid }, styles.fieldset);

  return (
    <FieldTag className={fieldClassName}>
      <Label
        tag={tag === 'fieldset' ? 'legend' : 'label'}
        htmlFor={'htmlFor' in props ? props.htmlFor : undefined}
        isRequired={isRequired}
        className={styles.label}
      >
        {label}
      </Label>
      {children}
      <Helpers
        className={styles.helpers}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        helperText={helperText}
        counter={helperCounter}
      />
    </FieldTag>
  );
};
