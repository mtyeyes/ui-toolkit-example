import React from 'react';
import styles from './user-card.module.scss';
import cn from 'classnames';

import { Avatar, AvatarProps } from '../../index';

export type UserCardProps = CardProps & AvatarProps;

export interface CardProps {
  size?: 'medium' | 'small';
  userName: string;
  children?: string;
}

export const UserCard = ({ size = 'medium', userName, children, ...props }: UserCardProps) => {
  return (
    <div className={cn(styles[size], styles.wrapper)}>
      <Avatar size={size} {...props} />
      <div className={cn({ [styles.withDescription]: children }, styles.textContainer)}>
        <p className={styles.name}>{userName}</p>
        {children && <p className={styles.description}>{children}</p>}
      </div>
    </div>
  );
};
