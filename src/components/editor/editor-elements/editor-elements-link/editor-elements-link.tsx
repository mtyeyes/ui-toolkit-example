import React from 'react';
import styles from './editor-elements-link.module.scss';
import { LinkElement, CustomText } from '../../editor-utils/editor-utils';

export interface EditorElementsLinkProps {
  children: CustomText;
  element: LinkElement;
  attributes: {
    'data-slate-node': 'element';
    'data-slate-inline'?: true;
    'data-slate-void'?: true;
    dir?: 'rtl';
    ref: any;
  };
}

export const EditorElementsLink = ({ children, attributes, element }: EditorElementsLinkProps) => {
  return (
    <a href={element.href} {...attributes} className={styles.link}>
      {children}
    </a>
  );
};
