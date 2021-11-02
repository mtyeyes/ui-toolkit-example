import React from 'react';
import styles from './tooltip.module.scss';
import cn from 'classnames';

export interface TooltipProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  theme?: 'dark' | 'light';
  size?: 'large' | 'small';
  isVisible?: boolean;
  children: string;
}

export const Tooltip = ({
  position = 'top',
  align = 'center',
  theme = 'light',
  size = 'small',
  isVisible = true,
  children,
}: TooltipProps) => {
  const tooltipClassName = cn(
    { [styles.visible]: isVisible },
    styles[theme],
    styles[position],
    styles[align],
    styles[size],
    styles.tooltip,
  );
  return <div className={tooltipClassName}>{children}</div>;
};
