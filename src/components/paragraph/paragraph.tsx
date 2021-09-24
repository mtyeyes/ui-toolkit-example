import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  level?: 1 | 2;
  weight?: 'normal' | 'bold';
}

const Paragraph = ({ level = 1, weight = 'normal', className, children, ...props }: ParagraphProps) => {
  const classNames = cn(`text-paragraph-${level}-${weight}`, className);

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
