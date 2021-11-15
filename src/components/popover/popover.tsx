import React from 'react';
import styles from './popover.module.scss';

import { Popper, PopperProps } from '../../index';
import { PopoverInput, PopoverInputProps } from './popover-input/popover-input';
import { PopoverPrompt, PopoverPromptProps } from './popover-prompt/popover-prompt';

export type PopoverProps = (PopoverInputProps | PopoverPromptProps) &
  Pick<PopperProps, 'position' | 'align' | 'isVisible' | 'referenceElement'>;

export const Popover = ({ position, align, isVisible, referenceElement, ...popoverProps }: PopoverProps) => {
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
      {popoverProps.type === 'input' ? <PopoverInput {...popoverProps} /> : <PopoverPrompt {...popoverProps} />}
    </Popper>
  );
};
