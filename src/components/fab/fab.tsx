import React from 'react';
import styles from './fab.module.scss';
import cn from 'classnames';

import { Spinner } from '../../index';
import FabIcon from '../../resources/icons/fab-icon.svg';

export interface FabProps {
  size?: 'medium' | 'small';
  impact?: 'high' | 'medium' | 'low';
  isLoading?: boolean;
  onClick: () => void;
}

export const Fab = ({ size = 'medium', impact = 'high', isLoading = false, onClick }: FabProps) => {
  const btnClassName = cn(
    {
      [styles.small]: size === 'small',
      [styles.loading]: isLoading,
    },
    styles[`${impact}Impact`],
    styles.btn,
  );

  return (
    <button className={btnClassName} type="button" onClick={onClick}>
      {isLoading ? <Spinner /> : <FabIcon />}
    </button>
  );
};
