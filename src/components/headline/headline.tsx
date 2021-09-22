import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

export type HeadlineProps = (DefaultProps | HeroProps) & HTMLAttributes<HTMLHeadingElement>;

interface DefaultProps {
  type?: 'headline';
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

interface HeroProps {
  type: 'hero';
  level: 1 | 2 | 3;
}

const Headline = ({ type = 'headline', level, children, className, ...props }: HeadlineProps) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  const classNames = cn(`text-${type}-${level}`, className);

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
};

export default Headline;
