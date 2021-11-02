import React from 'react';
import styles from './meta.module.scss';

import { MetaItem, MetaItemProps } from './meta-item/meta-item';

export interface MetaProps {
  data: MetaItemProps[];
}

export const Meta = ({ data }: MetaProps) => {
  const childrenMapCallback = (props: MetaItemProps) => {
    return <MetaItem key={props.children} {...props} />;
  };

  return <ul className={styles.list}>{data.map(childrenMapCallback)}</ul>;
};
