import { Transforms, BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export const insertImage = (editor: BaseEditor & ReactEditor, imageSrc: string) => {
  Transforms.insertNodes(
    editor,
    { type: 'image', src: imageSrc, children: [{ text: '' }] },
    { mode: 'highest', at: [editor.children.length] },
  );
};
