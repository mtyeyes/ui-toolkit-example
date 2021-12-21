import React from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './editor-elements-text.module.scss';
import cn from 'classnames';

export const EditorElementsText = ({ children, attributes, element }: RenderElementProps) => {
  const type = element?.type || 'main';

  return (
    <p {...attributes} className={cn(styles[type], styles.text)}>
      {children}
    </p>
  );
};
