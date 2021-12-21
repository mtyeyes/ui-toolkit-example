import React from 'react';
import { RenderElementProps } from 'slate-react';

import { Separator as SeparatorComponent } from '../../../../index';

export const EditorElementsSeparator = ({ attributes, children }: RenderElementProps) => {
  return (
    <div {...attributes}>
      <SeparatorComponent offsetSize="small" />
      {children}
    </div>
  );
};
