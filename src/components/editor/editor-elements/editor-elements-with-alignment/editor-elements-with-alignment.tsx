import React from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './editor-elements-with-alignment.module.scss';
import cn from 'classnames';

import { Alignment } from '../../editor-utils/editor-utils';

export const EditorElementsWithAlignment = <P extends RenderElementProps>(Component: React.FC<P>) => {
  const WrappedComponent = (props: P) => {
    const alignment = 'element' in props && 'alignment' in props.element ? props?.element?.alignment : 'left';

    return (
      <span className={cn(styles[alignment as Alignment])}>
        <Component {...props} />
      </span>
    );
  };

  return WrappedComponent;
};
