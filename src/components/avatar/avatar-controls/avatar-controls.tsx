import React from 'react';
import styles from './avatar-controls.module.scss';
import cn from 'classnames';

import { CommonAvatarProps } from '../avatar';

export type AvatarControlsProps = CommonAvatarProps;

export const AvatarControls = ({ isOnline, size = 'medium' }: AvatarControlsProps) => {
  return <div className={cn({ [styles.online]: isOnline }, styles[size], styles.icon)} />;
};
