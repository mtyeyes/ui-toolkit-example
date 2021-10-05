import React from 'react';
import styles from './toggle-group.module.scss';

import { FormWrapper, FormWrapperProps } from '../../index';

export const ToggleGroup = ({ children, ...props }: FormWrapperProps) => {
  return <FormWrapper {...props}>{<div className={styles.group}>{children}</div>}</FormWrapper>;
};
