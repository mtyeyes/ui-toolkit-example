import React from 'react';
import styles from './editor-elements-image.module.scss';
import { ImageElement, VoidText } from '../../editor-utils/editor-utils';

export interface EditorElementsImageProps {
  children: VoidText;
  element: ImageElement;
  attributes: {
    'data-slate-node': 'element';
    'data-slate-inline'?: true;
    'data-slate-void'?: true;
    dir?: 'rtl';
    ref: any;
  };
}

export const EditorElementsImage = ({ children, attributes, element }: EditorElementsImageProps) => {
  return (
    <div className={styles.wrapper} {...attributes}>
      <img className={styles.image} src={element.src} />
      <div className={styles.slateTarget}>{children}</div>
    </div>
  );
};
