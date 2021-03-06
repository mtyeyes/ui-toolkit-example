import React, { LabelHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './label.module.scss';
import cn from 'classnames';

import { FlagRequired } from '../../index';

export type LabelProps = LabelAsLabelProps | LabelAsLegendProps;

interface LabelAsLabelProps extends DefaultLabelProps {
  tag?: 'label';
  isRequired?: boolean;
}

type DefaultLabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

interface LabelAsLegendProps {
  isRequired?: boolean;
  tag: 'legend';
  className?: string;
  children?: string;
}

export const Label = ({ isRequired = false, className, tag = 'label', children, ...props }: LabelProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <div className={cn(styles.labelWrapper, className)}>
      <Tag className={styles.label} {...(props as any)}>
        {children}
      </Tag>
      {isRequired && <FlagRequired className={styles.icon} />}
    </div>
  );
};
