import React from 'react';
import styles from './meta-item.module.scss';

import { Eye, ChatDots } from 'phosphor-react';

export interface MetaItemProps {
  type?: 'default' | 'comments' | 'views';
  children: string | number;
}

export const MetaItem = ({ type = 'default', children }: MetaItemProps) => {
  const renderIcon = () => {
    const iconClassName = styles.icon;
    if (type === 'comments') return <ChatDots weight="regular" size="16px" className={iconClassName} />;
    if (type === 'views') return <Eye weight="regular" size="16px" className={iconClassName} />;
    return null;
  };

  return (
    <li className={styles.item}>
      {renderIcon()}
      <span className={styles.text}>{children}</span>
    </li>
  );
};
