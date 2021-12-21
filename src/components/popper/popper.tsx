import React, { ReactNode, useEffect, useState } from 'react';
import styles from './popper.module.scss';
import cn from 'classnames';

import { usePopper } from 'react-popper';

export interface PopperProps {
  isVisible: boolean;
  referenceElement: Element | null;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  arrowDimensions: arrowDimensions;
  borderRadius: number;
  className?: string;
  arrowClassName?: string;
  children: string | ReactNode;
}

type arrowDimensions = {
  x: number;
  y: number;
};

export const Popper = ({
  referenceElement,
  isVisible,
  position = 'top',
  align = 'center',
  arrowDimensions,
  borderRadius,
  className,
  arrowClassName,
  children,
}: PopperProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const customProperties = {
    '--border-radius': `${borderRadius}px`,
    '--arrow-height': `${arrowDimensions.y}px`,
    '--arrow-width': `${arrowDimensions.x}px`,
  };

  const {
    styles: popperStyles,
    attributes,
    forceUpdate,
  } = usePopper(referenceElement, popperElement, {
    placement: align === 'center' ? position : `${position}-${align}`,
    modifiers: [
      { name: 'arrow', options: { padding: borderRadius, element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, arrowDimensions.y + 2],
        },
      },
    ],
  });

  useEffect(() => {
    if (forceUpdate !== null) forceUpdate();
  }, [isVisible, forceUpdate]);

  return (
    <div
      ref={setPopperElement}
      style={{ ...customProperties, ...popperStyles.popper }}
      className={cn({ [styles.visible]: isVisible && referenceElement !== null }, styles.popper, className)}
      {...attributes.popper}
    >
      {children}
      <div
        ref={setArrowElement}
        style={{ ...customProperties, ...popperStyles.arrow }}
        className={cn(styles.arrow, arrowClassName)}
      />
    </div>
  );
};
