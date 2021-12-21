import React, { ReactNode, DetailedHTMLProps, LiHTMLAttributes, forwardRef } from 'react';
import styles from './list.module.scss';
import cn from 'classnames';

export interface ListProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement> {
  type?: 'ordered' | 'unordered';
  isCondensed?: boolean;
  children: ReactNode;
}

export const List = ({ type = 'unordered', isCondensed = false, className, children, ...props }: ListProps) => {
  const Tag = type === 'ordered' ? 'ol' : 'ul';

  return (
    <Tag className={cn({ [styles.condensed]: isCondensed }, styles[type], styles.list, className)} {...props}>
      {children}
    </Tag>
  );
};

export type ListItemProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ children, className, ...props }, ref) => {
  return (
    <li className={cn(styles.item, className)} {...props} ref={ref}>
      <span>{children}</span>
    </li>
  );
});
ListItem.displayName = 'listItem';
