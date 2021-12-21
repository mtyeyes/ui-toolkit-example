import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

import { LinkElementType } from '../editor-utils/editor-utils';

const withInline = (editor: BaseEditor & ReactEditor) => {
  editor.isInline = (element) => {
    const inlineElementsTypes: LinkElementType[] = ['link'];
    return (inlineElementsTypes as string[]).includes(element.type);
  };

  return editor;
};

export default withInline;
