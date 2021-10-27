import React from 'react';
import styles from './meta.module.scss';

import { MetaItem, MetaItemProps } from './meta-item/meta-item';

export interface MetaProps {
  children: MetaItemProps[];
}

export const Meta = ({ children }: MetaProps) => {
  const childrenMapCallback = (props: MetaItemProps) => {
    return <MetaItem key={props.children} {...props} />;
  };

  return <ul className={styles.list}>{children.map(childrenMapCallback)}</ul>;
};
