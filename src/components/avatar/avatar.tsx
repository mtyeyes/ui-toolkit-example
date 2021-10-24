import React from 'react';
import styles from './avatar.module.scss';
import cn from 'classnames';

import { AvatarControls } from './avatar-controls/avatar-controls';
import AvatarIcon from '../../resources/icons/avatar-placeholder.svg';

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
        return { width: '16px', height: '16px' };
      }
      if (size === 'small' || size === 'medium') {
        return { width: '24px', height: '24px' };
      }
      if (size === 'large') {
        return { width: '48px', height: '48px' };
      }
      if (size === 'huge') {
        return { width: '80px', height: '80px' };
      }
    })();

    return <AvatarIcon className={styles.icon} {...svgSize} />;
  };

  return (
    <div className={cn(styles[size], styles.wrapper)}>
      <div className={cn(styles[size], styles[type], styles.overflowContainer)}>{renderImageLayer()}</div>
      {props.isOnline !== undefined && <AvatarControls isOnline={props.isOnline} size={size} />}
    </div>
  );
};
