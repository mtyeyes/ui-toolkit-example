import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { VoidElementsType, ImageElementType } from '../editor-utils/editor-utils';

const withVoid = (editor: BaseEditor & ReactEditor) => {
  editor.isVoid = (element) => {
    const voidElementsTypes: (VoidElementsType | ImageElementType)[] = ['image', 'separator'];
    return (voidElementsTypes as string[]).includes(element.type);
  };

  return editor;
};

export default withVoid;
