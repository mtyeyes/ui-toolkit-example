import { Editor, Transforms, Path, Element, BaseEditor, Node } from 'slate';
import { ReactEditor } from 'slate-react';
import { CustomElement, LinkElement } from './editor-utils';

const createTextNode = (children: Node[] = [{ text: '' }]) => ({
  type: 'main',
  children,
});

const createLinkNode = (href: string, text: string): LinkElement => ({
  type: 'link',
  href,
  children: [{ text }],
});

export const insertLink = (editor: BaseEditor & ReactEditor, href: string, text: string) => {
  const link = createLinkNode(href, text);
  Transforms.insertNodes(editor, { href, ...createTextNode([link]) } as CustomElement, {
    at: [editor.children.length],
  });
};

export const applyLink = (editor: BaseEditor & ReactEditor, href: string, text: string) => {
  if (!href) return;

  const { selection } = editor;
  const link = createLinkNode(href, text);

  ReactEditor.focus(editor);

  if (!selection) return;
  const [parentNode, parentPath] = Editor.parent(editor, selection.focus?.path);

  if ((parentNode as CustomElement).type === 'link') {
    removeLink(editor);
  }

  if (editor.isVoid(parentNode as CustomElement)) {
    Transforms.insertNodes(editor, createTextNode([link]) as CustomElement, {
      at: Path.next(parentPath),
      select: true,
    });
  } else {
    Transforms.insertNodes(editor, link, { select: true });
  }
};

export const removeLink = (editor: BaseEditor & ReactEditor, opts = {}) => {
  Transforms.unwrapNodes(editor, {
    ...opts,
    match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
  });
};
