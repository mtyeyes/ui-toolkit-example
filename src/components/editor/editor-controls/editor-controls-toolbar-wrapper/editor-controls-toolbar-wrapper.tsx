import React, { ReactNode, forwardRef, CSSProperties } from 'react';
import styles from './editor-controls-toolbar-wrapper.module.scss';
import cn from 'classnames';

export interface EditorControlsToolbarWrapperProps {
  children: ReactNode;
  isVisible: boolean;
  className?: string;
  style?: CSSProperties;
}

export const EditorControlsToolbarWrapper = forwardRef<HTMLDivElement, EditorControlsToolbarWrapperProps>(
  ({ children, isVisible, style, className, ...attributes }, ref) => {
    return (
      <div
        ref={ref as React.ForwardedRef<HTMLDivElement | null>}
        className={cn({ [styles.visible]: isVisible }, styles.toolbar, className)}
        style={style}
        {...attributes}
      >
        {children}
      </div>
    );
  },
);
EditorControlsToolbarWrapper.displayName = 'EditorControlsToolbarWrapper';
