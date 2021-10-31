import React from 'react';
import styles from './list.module.scss';
import cn from 'classnames';

export interface ListProps {
  type?: 'ordered' | 'unordered';
  isCondensed?: boolean;
  children: string[];
}

export const List = ({ type = 'unordered', isCondensed = false, children }: ListProps) => {
  const Tag = type === 'ordered' ? 'ol' : 'ul';
  const mapChildrenCallback = (value: string) => {
    return (
      <li key={value} className={cn(styles.item)}>
        <span>{value}</span>
      </li>
    );
  };

  return (
    <Tag className={cn({ [styles.condensed]: isCondensed }, styles[type], styles.list)}>
      {children.map(mapChildrenCallback)}
    </Tag>
  );
};
