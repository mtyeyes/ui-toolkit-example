import React, { LabelHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './label.module.scss';
import cn from 'classnames';

import FlagRequired from '../../resources/icons/required.svg';

export type LabelProps = LabelAsLabelProps | LabelAsLegend;

interface LabelAsLabelProps extends DefaultLabelProps {
  tag?: 'label';
  isRequired?: boolean;
}

type DefaultLabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

interface LabelAsLegend {
  isRequired?: boolean;
  tag: 'legend';
  className?: string;
  children?: string;
}

export const Label = ({ isRequired = false, className, tag = 'label', children, ...props }: LabelProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <div className={styles.labelWrapper}>
      <Tag className={cn(styles.label, className)} {...(props as any)}>
        {children}
      </Tag>
      {isRequired && <FlagRequired className={styles.icon} />}
    </div>
  );
};
