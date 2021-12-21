import React from 'react';
import { RenderElementProps } from 'slate-react';
import { List as ListComponent, ListItem as ListItemComponent } from '../../../../index';

export const EditorElementsOrderedList = ({ children, attributes }: RenderElementProps) => (
  <div {...attributes}>
    <ListComponent type="ordered" isCondensed>
      {children}
    </ListComponent>
  </div>
);

export const EditorElementsUnorderedList = ({ children, attributes }: RenderElementProps) => (
  <div {...attributes}>
    <ListComponent type="unordered" isCondensed>
      {children}
    </ListComponent>
  </div>
);

export const EditorElementsListItem = ({ children, attributes }: RenderElementProps) => (
  <ListItemComponent {...attributes}>{children}</ListItemComponent>
);
