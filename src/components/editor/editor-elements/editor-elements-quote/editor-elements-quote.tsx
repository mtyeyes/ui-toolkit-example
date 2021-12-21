import React from 'react';
import { RenderElementProps } from 'slate-react';

import { Blockqoute } from '../../../../index';

export const EditorElementsQuote = ({ children, attributes }: RenderElementProps) => {
  return (
    <span {...attributes}>
      <Blockqoute>{children}</Blockqoute>
    </span>
  );
};
