import React, { ReactNode } from 'react';
import styles from './dialog.module.scss';

import { Modal, ModalProps } from '../../index';
import { Button } from '../../index';
import { X } from 'phosphor-react';

export interface DialogProps
  extends Omit<ModalProps, 'children' | 'className' | 'titleClassName' | 'descriptionClassName' | 'overlayVisible'> {
  title: string;
  controls?: ReactNode;
}

export const Dialog = ({ closeModal, controls, ...props }: DialogProps) => {
  return (
    <Modal
      closeModal={closeModal}
      className={styles.wrapper}
      titleClassName={styles.title}
      descriptionClassName={styles.description}
      {...props}
    >
      {controls !== undefined && <div className={styles.controlsContainer}>{controls}</div>}
      <Button
        className={styles.closeBtn}
        size="medium"
        impact="none"
        theme="onLight"
        icon="only"
        iconComponent={<X size="24px" />}
        onClick={closeModal}
      />
    </Modal>
  );
};
