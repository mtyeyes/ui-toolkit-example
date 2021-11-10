import React, { ReactNode } from 'react';
import styles from './alert.module.scss';
import cn from 'classnames';

import { Modal, ModalProps } from '../../index';
import { Sun, Info, CheckCircle } from 'phosphor-react';
import { Dialog } from '@headlessui/react';

const iconsMap = {
  default: Sun,
  info: Info,
  success: CheckCircle,
};

export interface AlertProps extends Pick<ModalProps, 'isOpen' | 'closeModal'> {
  title: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description: string;
  withIcon?: boolean;
  actions: ReactNode;
  type?: 'default' | 'info' | 'success';
  style?: 'outline' | 'fill';
}

export const Alert = ({
  title,
  titleTag = 'h2',
  description,
  withIcon = false,
  actions,
  type = 'default',
  style = 'outline',
  isOpen,
  closeModal,
}: AlertProps) => {
  const wrapperClassName = cn(styles[type], styles[style], styles.wrapper);
  const iconClassName = cn({ [styles.big]: description }, styles[type], styles.icon);
  const Icon = iconsMap[type];

  return (
    <Modal className={wrapperClassName} isOpen={isOpen} closeModal={closeModal}>
      <div className={styles.contentContainer}>
        {withIcon && <Icon className={iconClassName} weight="fill" />}
        <div className={styles.textContainer}>
          <Dialog.Title as={titleTag} className={styles.title}>
            {title}
          </Dialog.Title>
          {description && <Dialog.Description className={styles.description}>{description}</Dialog.Description>}
        </div>
      </div>
      {actions && <div className={styles.actionsWrapper}>{actions}</div>}
    </Modal>
  );
};
