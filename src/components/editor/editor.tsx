import React, { useMemo, useState, useCallback, useEffect } from 'react';
import styles from './editor.module.scss';
import { createEditor, BaseEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, ReactEditor, RenderElementProps } from 'slate-react';
import { withHistory } from 'slate-history';

import { Label } from '../../index';
import { EditorLeaf } from './editor-leaf/editor-leaf';
import { EditorPlaceholder } from './editor-placeholder/editor-placeholder';
import { CustomElement, CustomText } from './editor-utils/editor-utils';
import withInline from './editor-plugins/with-inline';
import withVoid from './editor-plugins/with-void';
import {
  EditorElementsHeading as Heading,
  EditorElementsImage as Image,
  EditorElementsImageProps as ImageProps,
  EditorElementsLink as Link,
  EditorElementsLinkProps as LinkProps,
  EditorElementsOrderedList as OrderedList,
  EditorElementsUnorderedList as UnorderedList,
  EditorElementsListItem as ListItem,
  EditorElementsSeparator as Separator,
  EditorElementsTable as Table,
  EditorElementsTableRow as TableRow,
  EditorElementsTableCell as TableCell,
  EditorElementsText as Text,
  EditorElementsQuote as Quote,
} from './editor-elements/editor-elements';
import { EditorControlsToolbar } from './editor-controls/editor-controls';
import { EditorControlsSidebar } from './editor-controls/editor-controls';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export interface EditorProps {
  label: string;
  isRequired?: boolean;
  placeholder: string;
  initialState?: CustomElement[];
  synchronizeEditorStateOnUpdate: (newState: Descendant[]) => void;
}

export const Editor = ({
  label,
  isRequired = false,
  placeholder,
  initialState,
  synchronizeEditorStateOnUpdate,
}: EditorProps) => {
  const [editorState, setEditorState] = useState<Descendant[]>(initialState !== undefined ? initialState : []);
  const editor = useMemo(() => withReact(withHistory(withVoid(withInline(createEditor())))), []);
  const renderLeaf = useCallback((props) => {
    return <EditorLeaf {...props} />;
  }, []);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    synchronizeEditorStateOnUpdate(editorState);
  }, [editorState]);

  const Element = (props: RenderElementProps) => {
    switch (props.element.type) {
      case 'separator':
        return <Separator {...props} />;
      case 'link':
        return <Link {...(props as LinkProps)} />;
      case 'image':
        return <Image {...(props as ImageProps)} />;
      case 'bulleted-list':
        return <UnorderedList {...props} />;
      case 'numbered-list':
        return <OrderedList {...props} />;
      case 'list-item':
        return <ListItem {...props} />;
      case 'table':
        return <Table {...props} />;
      case 'table-row':
        return <TableRow {...props} />;
      case 'table-cell':
        return <TableCell {...props} />;
      case 'quote':
        return <Quote {...props} />;
      case 'heading2':
        return <Heading {...props} />;
      case 'heading3':
        return <Heading {...props} />;
      case 'heading4':
        return <Heading {...props} />;
      case 'heading5':
        return <Heading {...props} />;
      case 'heading6':
        return <Heading {...props} />;
      case 'foreword':
        return <Text {...props} />;
      case 'main':
        return <Text {...props} />;
      case 'caption':
        return <Text {...props} />;
      default:
        return <Text {...props} />;
    }
  };

  return (
    <section>
      <Label className={styles.label} isRequired={isRequired}>
        {label}
      </Label>
      <div ref={setWrapperRef} className={styles.wrapper}>
        <div className={styles.resizableContainer}>
          <div className={styles.editor}>
            <Slate editor={editor} value={editorState} onChange={setEditorState}>
              <EditorControlsSidebar />
              <EditorControlsToolbar parentRef={wrapperRef} />
              <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder={placeholder}
                renderPlaceholder={({ children, attributes }) => (
                  <EditorPlaceholder attributes={attributes}>{children}</EditorPlaceholder>
                )}
              />
            </Slate>
          </div>
        </div>
      </div>
    </section>
  );
};
