import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import capitalize from '../../utils/capitalizeFirstLetter';
import { Spinner } from '../../';

export type ButtonProps = ButtonPropsWithIcon | ButtonPropsWithoutIcon;

interface ButtonPropsWithIcon extends GenericButtonProps {
  icon: 'left' | 'right' | 'only';
  iconComponent: ReactNode;
}

interface ButtonPropsWithoutIcon extends GenericButtonProps {
  icon?: 'none';
}

interface GenericButtonProps
  extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonAttributesToOmit> {
  theme?: 'onDark' | 'onLight';
  impact?: 'high' | 'medium' | 'low' | 'none' | 'destructive';
  size?: 'small' | 'medium';
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: string;
}

type ButtonAttributesToOmit = 'aria-label' | 'aria-labelledby' | 'children';

export const Button = ({
  theme = 'onLight',
  impact = 'high',
  icon = 'none',
  size = 'medium',
  isLoading = false,
  isDisabled = false,
  className,
  children,
  ...props
}: ButtonProps) => {
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
  const IconComponent = isBtnWithIcon && !isLoading ? (props as ButtonPropsWithIcon)['iconComponent'] : <Spinner />;

  return (
    <button
      aria-label={icon === 'only' && children ? children : undefined}
      disabled={isDisabled || isLoading}
      className={buttonClassName}
      type="button"
      {...props}
    >
      {isIconDisplayed && <div className={styles.iconWrapper}>{IconComponent}</div>}
      {isTextDisplayed && <span className={styles.text}>{children}</span>}
    </button>
  );
};
