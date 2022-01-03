import React, { ReactNode } from 'react';
import styles from './popover.module.scss';

import { Popper, PopperProps } from '../../index';
import { PopoverInput, PopoverInputProps } from './popover-input/popover-input';
import { PopoverPrompt, PopoverPromptProps } from './popover-prompt/popover-prompt';

export type PopoverProps = (PopoverInputProps | PopoverPromptProps | PopoverContainerProps) &
  Pick<PopperProps, 'position' | 'align' | 'isVisible' | 'referenceElement'>;

interface PopoverContainerProps {
  type: 'container';
  children: ReactNode;
}

export const Popover = ({ position, align, isVisible, referenceElement, ...popoverProps }: PopoverProps) => {
  const renderContent = () => {
    switch (popoverProps.type) {
      case 'input':
        return <PopoverInput {...popoverProps} />;
      case 'prompt':
        return <PopoverPrompt {...popoverProps} />;
      case 'container':
        return popoverProps.children;
    }
  };

  return (
    <Popper
      position={position}
      align={align}
      isVisible={isVisible}
      referenceElement={referenceElement}
      borderRadius={12}
      arrowDimensions={{ x: 16, y: 8 }}
      className={styles.popover}
    >
      {renderContent()}
    </Popper>
  );
};
