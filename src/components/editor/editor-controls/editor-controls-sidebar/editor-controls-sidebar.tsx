import React, { useState, useRef } from 'react';
import { useSlate } from 'slate-react';
import styles from './editor-controls-sidebar.module.scss';

import { Button } from '../../../../index';
import { insertNode, ElementTypes } from '../../editor-utils/editor-utils';
import {
  EditorControlsToolbarWrapper as ToolbarWrapper,
  EditorControlsSeparator as ControlsSeparator,
  EditorControlsButton as ControlsButton,
  EditorControlsTextElementSelect as TextElementSelect,
  EditorControlsInsertTableButton as InsertTableButton,
  EditorControlsInsertLinkButton as InsertLinkButton,
  EditorControlsInsertImageButton as InsertImageButton,
} from '../editor-controls';
import { insertLink } from '../../editor-utils/editor-utils-link';
import { insertList } from '../../editor-utils/editor-utils-list';
import { insertTable } from '../../editor-utils/editor-utils-table';
import { insertImage } from '../../editor-utils/editor-utils-image';
import { Plus, ListBullets, ListNumbers, Quotes, Divide } from 'phosphor-react';
import useCloseExpandable from '../../../../utils/hooks/use-close-expandable';

export const EditorControlsSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toolbarRef = useRef(null);
  const editor = useSlate();
  useCloseExpandable(
    isOpen,
    () => {
      setIsOpen(false);
    },
    toolbarRef.current,
  );

  const insertNodeElement = (elementType: ElementTypes) => {
    insertNode({ editor, type: elementType });
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.btn}
        size="small"
        theme="onLight"
        impact="none"
        icon="only"
        iconComponent={<Plus size="24px" />}
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      />
      <ToolbarWrapper ref={toolbarRef} isVisible={isOpen} className={styles.toolbar}>
        <TextElementSelect
          selectElement={(element) => {
            insertNodeElement(element);
          }}
          isToolbarVisibile={isOpen}
        />
        <ControlsSeparator />
        <ControlsButton
          tooltip="Ненумерованный список"
          iconComponent={<ListBullets size="24px" />}
          onClick={() => {
            insertList(editor, 'bulleted-list');
            setIsOpen(false);
          }}
        />
        <ControlsButton
          tooltip="Нумерованный список"
          iconComponent={<ListNumbers size="24px" />}
          onClick={() => {
            insertList(editor, 'numbered-list');
            setIsOpen(false);
          }}
        />
        <ControlsSeparator />
        <ControlsButton
          tooltip="Разделитель"
          iconComponent={<Divide size="24px" />}
          onClick={() => {
            insertNodeElement('separator');
          }}
        />
        <ControlsButton
          tooltip="Цитата"
          iconComponent={<Quotes size="24px" />}
          onClick={() => {
            insertNodeElement('quote');
          }}
        />
        <InsertLinkButton
          isToolbarVisibile={isOpen}
          insertLink={(linkText, linkHref) => {
            insertLink(editor, linkHref, linkText);
            setIsOpen(false);
          }}
        />
        <InsertTableButton
          insertTable={(columns, rows) => {
            insertTable(editor, columns, rows);
            setIsOpen(false);
          }}
          isToolbarVisibile={isOpen}
        />
        <InsertImageButton
          insertImage={(imgSrc) => {
            insertImage(editor, imgSrc);
            setIsOpen(false);
          }}
        />
      </ToolbarWrapper>
    </div>
  );
};
