import React from 'react';
import styles from './description-list.module.scss';
import cn from 'classnames';

export interface DescriptionListProps {
  children: DescriptionType[];
  isCondensed?: boolean;
  isVertical?: boolean;
}

export type DescriptionType = {
  title: string;
  description: string;
};

export const DescriptionList = ({ children, isCondensed = false, isVertical = false }: DescriptionListProps) => {
  const listClassName = cn({ [styles.vertical]: isVertical, [styles.condensed]: isCondensed }, styles.list);

  const mapChildrenCallback = ({ title, description }: DescriptionType) => {
    return (
      <div className={styles.descriptionItemWrapper} key={title}>
        <div className={styles.titleWrapper}>
          <dt className={styles.title}>{title}</dt>
        </div>
        <dd className={styles.description}>{description}</dd>
      </div>
    );
  };

  return <dl className={listClassName}>{children.map(mapChildrenCallback)}</dl>;
};
