import { Transforms, Editor, Element, BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { CustomElement } from './editor-utils';

export const insertTable = (editor: BaseEditor & ReactEditor, rows: number, columns: number) => {
  const [tableNode] = Editor.nodes(editor, {
    match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'table',
    mode: 'highest',
  });

  if (tableNode) return;
  if (!rows || !columns) return;
  const cellText = Array.from({ length: rows }, () => Array.from({ length: columns }, () => ''));
  const newTable = createTableNode(cellText);

  Transforms.insertNodes(editor, newTable as CustomElement, {
    mode: 'highest',
    at: [editor.children.length],
  });
};

export const deleteTable = (editor: BaseEditor & ReactEditor) => {
  Transforms.removeNodes(editor, {
    match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'table',
    mode: 'highest',
  });
};

const createRow = (cellText: string[]) => {
  const newRow = Array.from(cellText, (value) => createTableCell(value));
  return {
    type: 'table-row',
    children: newRow,
  };
};

const createTableCell = (text: string) => {
  return {
    type: 'table-cell',
    children: [{ text }],
  };
};

const createTableNode = (cellText: string[][]) => {
  const tableChildren = Array.from(cellText, (value) => createRow(value));
  const tableNode = { type: 'table', children: tableChildren };
  return tableNode;
};
