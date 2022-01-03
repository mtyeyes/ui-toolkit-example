import React from 'react';
import styles from './editor-controls-remove-node-button.module.scss';
import { Element, Transforms } from 'slate';
import { useSlate, ReactEditor, useSelected, useFocused } from 'slate-react';

import { Button } from '../../../../index';
import { X } from 'phosphor-react';

export interface EditorControlsRemoveNodeButtonProps {
  element: Element;
}

export const EditorControlsRemoveNodeButton = ({ element }: EditorControlsRemoveNodeButtonProps) => {
  const editor = useSlate();
  const path = ReactEditor.findPath(editor, element);
  const isSelected = useSelected();
  const isFocused = useFocused();

  if (!isSelected || !isFocused) return null;

  return (
    <div contentEditable={false} className={styles.wrapper}>
      <Button
        theme="onLight"
        impact="none"
        icon="only"
        size="small"
        iconComponent={<X size="24px" />}
        onClick={() => {
          Transforms.removeNodes(editor, { at: path });
        }}
      />
    </div>
  );
};
