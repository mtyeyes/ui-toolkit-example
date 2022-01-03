import React from 'react';
import styles from './editor-elements-table.module.scss';
import { RenderElementProps } from 'slate-react';
import { EditorControlsRemoveNodeButton } from '../../editor-controls/editor-controls';

export const EditorElementsTable = ({ children, attributes, element }: RenderElementProps) => {
  return (
    <div {...attributes}>
      <EditorControlsRemoveNodeButton element={element} />
      <table className={styles.table}>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export const EditorElementsTableRow = ({ children, attributes }: RenderElementProps) => {
  return (
    <tr className={styles.row} {...attributes}>
      {children}
    </tr>
  );
};

export const EditorElementsTableCell = ({ children, attributes }: RenderElementProps) => {
  return (
    <td className={styles.item} {...attributes}>
      {children}
    </td>
  );
};
