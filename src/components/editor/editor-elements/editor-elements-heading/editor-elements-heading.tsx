import React from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './editor-elements-heading.module.scss';
import cn from 'classnames';

export const EditorElementsHeading = ({ children, attributes, element }: RenderElementProps) => {
  const level = element?.type.replace('heading', '');
  const Tag = `h${level}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <Tag {...attributes} className={cn(styles[`headingLevel${level}`], styles.heading)}>
      {children}
    </Tag>
  );
};
