import React, { useState, useEffect } from 'react';
import { Range, Editor, Transforms } from 'slate';
import { useSlate, ReactEditor } from 'slate-react';
import { usePopper } from 'react-popper';
import styles from './editor-controls-toolbar.module.scss';

import { toggleBlock, toggleMark, Alignment } from '../../editor-utils/editor-utils';
import {
  EditorControlsToolbarWrapper as ToolbarWrapper,
  EditorControlsSeparator as ControlsSeparator,
  EditorControlsButton as ControlsButton,
  EditorControlsTextElementSelect as TextElementSelect,
  EditorControlsInsertLinkButton as InsertLinkButton,
} from '../editor-controls';
import { applyLink } from '../../editor-utils/editor-utils-link';
import {
  TextBolder,
  TextStrikethrough,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  ListBullets,
  ListNumbers,
  Quotes,
} from 'phosphor-react';

export interface EditorControlsToolbarProps {
  parentRef: HTMLDivElement | null;
}

export const EditorControlsToolbar = ({ parentRef }: EditorControlsToolbarProps) => {
  const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState({
    top: '40px',
    left: '0px',
  });
  const editor = useSlate();
  const {
    styles: popperStyles,
    attributes,
    forceUpdate,
  } = usePopper(anchorElement, popperElement, {
    placement: 'top',
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
    ],
  });

  useEffect(() => {
    if (forceUpdate !== null && isOpen) {
      forceUpdate();
      setTimeout(() => {
        if (isOpen) forceUpdate();
      }, 200);
    }
  }, [isOpen, editor.selection, forceUpdate]);

  useEffect(() => {
    const { selection } = editor;
    if (popperElement === null || parentRef === null) return;

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      setIsOpen(false);
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection!.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    const parentRect = parentRef.getBoundingClientRect();
    setAnchorPosition({
      top: `${rect.top - parentRect.top}px`,
      left: `${rect.left - parentRect.left + window.pageXOffset + rect.width / 2}px`,
    });
    setIsOpen(true);
  }, [popperElement, editor.selection, parentRef]);

  const modifyAlignment = (alignment: Alignment) => {
    Transforms.setNodes(editor, { alignment });
    setIsOpen(false);
  };

  return (
    <div
      className={styles.anchor}
      ref={setAnchorElement}
      style={{
        ...anchorPosition,
      }}
    >
      <ToolbarWrapper ref={setPopperElement} isVisible={isOpen} style={popperStyles.popper} {...attributes.popper}>
        <TextElementSelect
          selectElement={(element) => {
            toggleBlock(editor, element);
          }}
          isToolbarVisibile={isOpen}
        />
        <ControlsButton
          iconComponent={<TextBolder size="24px" />}
          onClick={() => toggleMark(editor, 'bold')}
          tooltip="Жирный"
        />
        <ControlsButton
          tooltip="Перечеркнутый"
          iconComponent={<TextStrikethrough size="24px" />}
          onClick={() => toggleMark(editor, 'strikethrough')}
        />
        <ControlsSeparator />
        <ControlsButton
          tooltip="По левому краю"
          iconComponent={<TextAlignLeft size="24px" />}
          onClick={() => {
            modifyAlignment('left');
          }}
        />
        <ControlsButton
          tooltip="По центру"
          iconComponent={<TextAlignCenter size="24px" />}
          onClick={() => {
            modifyAlignment('center');
          }}
        />
        <ControlsButton
          tooltip="По правому краю"
          iconComponent={<TextAlignRight size="24px" />}
          onClick={() => {
            modifyAlignment('right');
          }}
        />
        <ControlsSeparator />
        <ControlsButton
          tooltip="Ненумерованный список"
          iconComponent={<ListBullets size="24px" />}
          onClick={() => toggleBlock(editor, 'bulleted-list')}
        />
        <ControlsButton
          tooltip="Нумерованный список"
          iconComponent={<ListNumbers size="24px" />}
          onClick={() => toggleBlock(editor, 'numbered-list')}
        />
        <ControlsSeparator />
        <ControlsButton
          tooltip="Цитата"
          iconComponent={<Quotes size="24px" />}
          onClick={() => toggleBlock(editor, 'quote')}
        />
        <InsertLinkButton
          isToolbarVisibile={isOpen}
          insertLink={(linkText, linkHref) => {
            applyLink(editor, linkHref, linkText);
            setIsOpen(false);
          }}
        />
      </ToolbarWrapper>
    </div>
  );
};
