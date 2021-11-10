import React, { ReactNode } from 'react';
import styles from './notification.module.scss';
import cn from 'classnames';

import { Modal, ModalProps, ProgressRing } from '../../index';
import { X } from 'phosphor-react';
import { Dialog } from '@headlessui/react';

export interface NotificationProps extends Pick<ModalProps, 'isOpen' | 'closeModal'> {
  title: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description?: string;
  type?: 'default' | 'error';
  controls?: ReactNode;
  percentageOfTimeLeft?: number;
}

export const Notification = ({
  isOpen,
  closeModal,
  title,
  titleTag = 'h6',
  description,
  controls,
  type = 'default',
  percentageOfTimeLeft,
}: NotificationProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <Dialog.Title
          as={titleTag}
          className={cn({ [styles.big]: description || controls }, styles[type], styles.title)}
        >
          {title}
        </Dialog.Title>
        {description && <Dialog.Description className={styles.description}>{description}</Dialog.Description>}
      </div>
      {controls && <div className={styles.controlsContainer}>{controls}</div>}
      <div className={styles.closeWrapper}>
        {percentageOfTimeLeft !== undefined && (
          <ProgressRing
            className={styles.progressRing}
            stroke={2}
            radius={18}
            progress={percentageOfTimeLeft}
            isClockwise={false}
          />
        )}
        <button className={styles.closeBtn} type="button">
          <X size="24px" />
        </button>
      </div>
    </Modal>
  );
};
