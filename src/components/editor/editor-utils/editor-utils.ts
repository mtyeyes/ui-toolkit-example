import { Editor, Transforms, Element as SlateElement, BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type ElementTypes =
  | TextElementTypes
  | LinkElementType
  | ImageElementType
  | ListElementTypes
  | VoidElementsType
  | TableElementsTypes;
export type TextElementTypes =
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'foreword'
  | 'main'
  | 'caption'
  | 'quote';
export type ListElementTypes = 'numbered-list' | 'bulleted-list';
export type ListItemElementType = 'list-item';
export type LinkElementType = 'link';
export type ImageElementType = 'image';
export type VoidElementsType = 'separator';
export type TableElementsTypes = 'table' | 'table-row' | 'table-cell';
export type Alignment = 'left' | 'center' | 'right';

export const LIST_TYPES: ListElementTypes[] = ['numbered-list', 'bulleted-list'];

export type CustomElement =
  | TextElement
  | LinkElement
  | VoidElement
  | ImageElement
  | ListElement
  | ListItemElement
  | TableElement
  | TableRowElement
  | TableCellElement;

export interface TextElement {
  type: TextElementTypes;
  alignment?: Alignment;
  children: CustomText[];
}

export interface LinkElement {
  type: LinkElementType;
  alignment?: Alignment;
  href: string;
  children: CustomText[];
}

export interface VoidElement {
  type: VoidElementsType;
  children: VoidText[];
}

export interface ImageElement {
  type: ImageElementType;
  children: VoidText[];
  src: string;
}

export interface ListElement {
  type: ListElementTypes;
  children: ListItemElement[];
}

export interface ListItemElement {
  type: ListItemElementType;
  children: CustomText[];
}

export interface TableElement {
  type: 'table';
  children: TableRowElement[];
}

export interface TableRowElement {
  type: 'table-row';
  children: TableCellElement[];
}

export interface TableCellElement {
  type: 'table-cell';
  children: CustomText[];
}

export type CustomText = { text: string };

export type VoidText = { text: '' };

export interface InsertNodeProps {
  editor: BaseEditor & ReactEditor;
  type?: ElementTypes;
  children?: CustomText[];
}

export const insertNode = ({ editor, type = 'main', children = [{ text: '' }] }: InsertNodeProps) => {
  Transforms.insertNodes(editor, { type, children } as CustomElement, {
    mode: 'highest',
    at: [editor.children.length],
  });
};

export const toggleBlock = (editor: BaseEditor & ReactEditor, format: ElementTypes) => {
  const isActive = isBlockActive(editor, format);
  const isList = (LIST_TYPES as string[]).includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => (LIST_TYPES as string[]).includes((n as CustomElement).type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? 'main' : isList ? 'list-item' : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block as CustomElement);
  }
};

const isBlockActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Editor.nodes(editor, {
    at: Editor.unhangRange(editor, selection),
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  return !!match;
};

export const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format);

  isActive ? Editor.removeMark(editor, format) : Editor.addMark(editor, format, true);
};

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks = Editor.marks(editor) as { [key: string]: boolean };
  return marks ? marks[format] === true : false;
};
