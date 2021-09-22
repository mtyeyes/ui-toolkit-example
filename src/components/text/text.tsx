import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & (ParagraphProps | SubtitleProps);

interface ParagraphProps {
  type?: 'paragraph';
  level: 1 | 2;
  weight: 'normal' | 'bold';
}

interface SubtitleProps {
  type: 'subtitle';
  level: 1 | 2;
  weight: 'normal' | 'bold';
}

const Text = ({ type = 'paragraph', level, weight, className, children, ...props }: TextProps) => {
  const classNames = cn(`text-${type}-${level}-${weight}`, className);

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};

export default Text;
