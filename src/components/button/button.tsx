import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import capitalize from '../../utils/capitalize-first-letter';
import { Spinner } from '../../';

export type ButtonProps = ButtonPropsWithoutIcon | ButtonPropsWithIcon;

interface GenericButtonProps
  extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonAttributesToOmit> {
  icon?: 'left' | 'right' | 'only' | 'none';
  iconComponent?: ReactNode;
  theme?: 'onDark' | 'onLight';
  impact?: 'high' | 'medium' | 'low' | 'none' | 'destructive';
  size?: 'small' | 'medium';
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: string;
}

type ButtonPropsWithoutIcon = GenericButtonProps & {
  icon?: 'none';
  iconComponent?: undefined;
};

type ButtonPropsWithIcon = GenericButtonProps & {
  icon: 'left' | 'right' | 'only';
  iconComponent: ReactNode;
};

type ButtonAttributesToOmit = 'aria-label' | 'aria-labelledby' | 'children' | 'type';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      theme = 'onLight',
      impact = 'high',
      icon = 'none',
      size = 'medium',
      isLoading = false,
      isDisabled = false,
      className,
      children,
      iconComponent,
      ...props
    },
    ref,
  ) => {
    const buttonClassName = cn(
      {
        [styles.btnLoading]: isLoading,
        [styles.btnDisabled]: isDisabled,
      },
      styles[`${size}Size`],
      styles[`btnIcon${capitalize(icon)}`],
      styles[`${theme}Theme${capitalize(impact)}Impact`],
      styles.btn,
      className,
    );

    const isBtnWithIcon = icon !== 'none';
    const isTextDisplayed = !isLoading && icon !== 'only';
    const isIconDisplayed = isLoading || isBtnWithIcon;
    const IconComponent = isBtnWithIcon && !isLoading ? iconComponent : <Spinner />;

    return (
      <button
        aria-label={icon === 'only' && children ? children : undefined}
        disabled={isDisabled || isLoading}
        className={buttonClassName}
        type="button"
        ref={ref}
        {...props}
      >
        {isIconDisplayed && <div className={styles.iconWrapper}>{IconComponent}</div>}
        {isTextDisplayed && <span className={styles.text}>{children}</span>}
      </button>
    );
  },
);
