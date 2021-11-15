import React from 'react';
import styles from './tooltip.module.scss';
import cn from 'classnames';

import { Popper, PopperProps } from '../../index';

export interface TooltipProps extends Pick<PopperProps, 'position' | 'align' | 'isVisible' | 'referenceElement'> {
  theme?: 'dark' | 'light';
  size?: 'large' | 'small';
  children: string;
}

export const Tooltip = ({ theme = 'light', size = 'small', children, ...tooltipShapeProps }: TooltipProps) => {
  const tooltipClassName = cn(styles[theme], styles[size], styles.tooltip);

  return (
    <Popper
      borderRadius={size === 'small' ? 6 : 8}
      arrowDimensions={size === 'small' ? { x: 8, y: 4 } : { x: 12, y: 6 }}
      className={tooltipClassName}
      {...tooltipShapeProps}
    >
      {children}
    </Popper>
  );
};
