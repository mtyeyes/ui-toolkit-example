import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

export type OtherTextProps = (NumericProps | DefaultProps) &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

interface DefaultProps {
  type: 'button' | 'caption' | 'overline';
}

interface NumericProps {
  type: 'numeric';
  size: 'small' | 'large';
}

const OtherText = ({ type, children, className, ...props }: OtherTextProps) => {
  const textTypeClassname = type === 'numeric' ? `text-${type}-${props as NumericProps['size']}` : `text-${type}`;
  const classNames = cn(textTypeClassname, className);

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};

export default OtherText;
