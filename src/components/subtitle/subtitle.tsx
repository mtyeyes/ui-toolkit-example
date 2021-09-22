import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

export interface SubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  level?: 1 | 2;
  weight?: 'normal' | 'bold';
}

const Subtitle = ({ level = 1, weight = 'normal', className, children, ...props }: SubtitleProps) => {
  const classNames = cn(`text-subtitle-${level}-${weight}`, className);

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};

export default Subtitle;
