import React from 'react';
import styles from './avatar.module.scss';
import cn from 'classnames';

import { AvatarControls } from './avatar-controls/avatar-controls';
import { User } from 'phosphor-react';

export type AvatarProps = AvatarIconProps | AvatarInitialsProps | AvatarPhotoProps;

interface AvatarPhotoProps extends CommonAvatarProps {
  type: 'photo';
  avatarSrc: string;
}

interface AvatarInitialsProps extends CommonAvatarProps {
  type: 'initials';
  userInitials: string;
}

interface AvatarIconProps extends CommonAvatarProps {
  type?: 'icon';
}

export interface CommonAvatarProps {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  isOnline?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { size = 'medium', type = 'icon' } = props;

  const renderImageLayer = () => {
    if (props.type === 'initials')
      return (
        <p className={styles.letters}>
          {(props.userInitials[0].toUpperCase() || '') + (props.userInitials[1].toUpperCase() || '')}
        </p>
      );
    if (props.type === 'photo') return <img className={styles.img} src={props.avatarSrc} />;

    const svgSize = (() => {
      if (size === 'tiny') {
        return '16px';
      }
      if (size === 'small' || size === 'medium') {
        return '24px';
      }
      if (size === 'large') {
        return '48px';
      }
      if (size === 'huge') {
        return '80px';
      }
    })();

    return <User className={styles.icon} weight="fill" size={svgSize} />;
  };

  return (
    <div className={cn(styles[size], styles.wrapper)}>
      <div className={cn(styles[size], styles[type], styles.overflowContainer)}>{renderImageLayer()}</div>
      {props.isOnline !== undefined && <AvatarControls isOnline={props.isOnline} size={size} />}
    </div>
  );
};
