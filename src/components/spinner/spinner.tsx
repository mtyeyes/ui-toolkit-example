import React from 'react';
import styles from './spinner.module.scss';
import cn from 'classnames';

import LoadingIcon from '../../resources/icons/circle.svg';

export interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return <LoadingIcon className={cn(styles.spinner, className)} />;
};
