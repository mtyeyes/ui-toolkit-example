import React, { FC, SVGAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import capitalize from '../../utils/capitalizeFirstLetter';

import loadingIcon from '../../resources/icons/circle.svg';

export type ButtonProps = ButtonPropsWithIcon | ButtonPropsWithoutIcon;

interface ButtonPropsWithIcon extends GenericButtonProps {
  icon: 'left' | 'right' | 'only';
  iconSrc: FC<SVGAttributes<SVGAElement>>;
}

interface ButtonPropsWithoutIcon extends GenericButtonProps {
  icon?: 'none';
}

interface GenericButtonProps
  extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonAttributesToOmit> {
  theme?: 'onDark' | 'onLight';
  impact?: 'high' | 'medium' | 'low' | 'none' | 'destructive';
  size?: '36dp' | '48dp';
  state?: 'default' | 'loading' | 'disabled';
  children?: string;
}

type ButtonAttributesToOmit = 'aria-label' | 'aria-labelledby' | 'tabIndex' | 'children';

const Button = ({
  theme = 'onLight',
  impact = 'high',
  icon = 'none',
  size = '48dp',
  state = 'default',
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonClassName = cn(
    {
      [styles.btnLoading]: state === 'loading',
      [styles.btnDisabled]: state === 'disabled',
    },
    styles[`btnSize${size}`],
    styles[`btnIcon${capitalize(icon)}`],
    styles[`${theme}${capitalize(impact)}`],
    styles.btn,
    styles.btnResetDefault,
    className,
  );
  const textClassName = cn(styles.text, 'text-button');
  const iconWrapperClassName = cn(styles.iconWrapper);
  const iconClassName = cn(styles.icon);

  const isBtnLoading = state === 'loading';
  const isBtnWithIcon = icon !== 'none';
  const isTextDisplayed = !isBtnLoading && icon !== 'only';
  const isIconDisplayed = isBtnLoading || isBtnWithIcon;
  const IconComponent = isBtnWithIcon && !isBtnLoading ? (props as ButtonPropsWithIcon)['iconSrc'] : loadingIcon;

  return (
    <button
      aria-label={icon === 'only' && children ? children : undefined}
      tabIndex={state === 'disabled' || isBtnLoading ? -1 : 0}
      className={buttonClassName}
      type="button"
      {...props}
    >
      {isIconDisplayed && (
        <div className={iconWrapperClassName}>
          <IconComponent className={iconClassName} />
        </div>
      )}
      {isTextDisplayed && <span className={textClassName}>{children}</span>}
    </button>
  );
};

export default Button;
