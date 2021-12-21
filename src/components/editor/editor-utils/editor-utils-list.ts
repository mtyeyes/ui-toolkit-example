import { Transforms, BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { CustomElement, ListElementTypes } from './editor-utils';

export const insertList = (editor: BaseEditor & ReactEditor, type: ListElementTypes) => {
  const newList = createList(type);
  Transforms.insertNodes(editor, newList as CustomElement, { at: [editor.children.length] });
};

const createList = (type: ListElementTypes) => {
  const listChildren = [createListItem()];
  const listNode = { type: type, children: listChildren };
  return listNode;
};

const createListItem = () => {
  return {
    type: 'list-item',
    children: [{ text: '' }],
  };
};
