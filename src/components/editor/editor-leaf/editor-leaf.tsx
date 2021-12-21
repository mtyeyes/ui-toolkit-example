import React from 'react';
import styles from './editor-leaf.module.scss';
import cn from 'classnames';

import { RenderLeafProps } from 'slate-react';

export interface EditorLeafProps extends Omit<RenderLeafProps, 'leaf'> {
  leaf: LeafModifiers;
}

export interface LeafModifiers {
  bold: boolean;
  strikethrough: boolean;
}

export const EditorLeaf = ({ attributes, children, leaf }: EditorLeafProps) => {
  const leafClassName = cn({
    [styles.bold]: leaf.bold,
    [styles.strikethrough]: leaf.strikethrough,
  });
  return (
    <span {...attributes} className={leafClassName}>
      {children}
    </span>
  );
};
