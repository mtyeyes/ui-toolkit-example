import React from 'react';
import styles from './editor-placeholder.module.scss';

import { RenderPlaceholderProps } from 'slate-react';

export const EditorPlaceholder = ({ children, attributes }: RenderPlaceholderProps) => {
  return (
    <span {...attributes} className={styles.placeholder}>
      {children}
    </span>
  );
};
