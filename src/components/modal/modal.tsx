import React, { Fragment, ReactNode } from 'react';
import styles from './modal.module.scss';
import cn from 'classnames';

import { Dialog, Transition } from '@headlessui/react';

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title?: string;
  titleClassName?: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description?: string;
  descriptionClassName?: string;
  className?: string;
  overlayVisible?: boolean;
}

export const Modal = ({
  isOpen,
  closeModal,
  children,
  className,
  title,
  titleClassName,
  titleTag,
  description,
  descriptionClassName,
  overlayVisible = true,
}: ModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={closeModal}>
        <Transition.Child
          enter={styles.modalTransition}
          enterFrom={styles.modalHidden}
          enterTo={styles.modalVisible}
          leave={styles.modalTransition}
          leaveFrom={styles.modalVisible}
          leaveTo={styles.modalHidden}
        >
          {overlayVisible && <Dialog.Overlay className={styles.overlay} />}
          <div className={cn(styles.modalWrapper, className)}>
            {title && (
              <Dialog.Title as={titleTag} className={titleClassName}>
                {title}
              </Dialog.Title>
            )}
            {description && <Dialog.Description className={descriptionClassName}>{description}</Dialog.Description>}
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
