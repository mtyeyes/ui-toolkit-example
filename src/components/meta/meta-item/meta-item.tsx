import React from 'react';
import styles from './meta-item.module.scss';

import ViewsIcon from '../../../resources/icons/views.svg';
import CommentsIcon from '../../../resources/icons/comments.svg';

export interface MetaItemProps {
  type?: 'default' | 'comments' | 'views';
  children: string;
}

export const MetaItem = ({ type = 'default', children }: MetaItemProps) => {
  const renderIcon = () => {
    const iconClassName = styles.icon;
    if (type === 'comments') return <CommentsIcon className={iconClassName} />;
    if (type === 'views') return <ViewsIcon className={iconClassName} />;
    return null;
  };

  return (
    <li className={styles.item}>
      {renderIcon()}
      <span className={styles.text}>{children}</span>
    </li>
  );
};
