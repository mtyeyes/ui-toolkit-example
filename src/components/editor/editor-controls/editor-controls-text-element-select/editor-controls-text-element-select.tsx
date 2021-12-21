import React, { useState, useEffect } from 'react';
import styles from './editor-controls-text-element-select.module.scss';

import { EditorControlsButton } from '../editor-controls';
import { Dropdown } from '../../../../index';
import { TextElementTypes } from '../../editor-utils/editor-utils';
import { TextT } from 'phosphor-react';

export interface EditorControlsTextElementSelectProps {
  selectElement: (element: TextElementTypes) => void;
  isToolbarVisibile: boolean;
}

export const EditorControlsTextElementSelect = ({
  selectElement,
  isToolbarVisibile,
}: EditorControlsTextElementSelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isToolbarVisibile) setIsExpanded(false);
  }, [isToolbarVisibile]);

  const handleClick = (element: TextElementTypes) => {
    selectElement(element);
    setIsExpanded(false);
  };

  return (
    <div className={styles.wrapper}>
      <EditorControlsButton
        iconComponent={<TextT size="24px" />}
        onClick={() => {
          setIsExpanded((prevState) => !prevState);
        }}
        tooltip="Размер текста"
      />
      <Dropdown isExpanded={isExpanded} isSearchable={false}>
        {{
          controls: [
            {
              type: 'label',
              onClick: () => {
                handleClick('heading2');
              },
              children: 'Заголовок 2',
              key: 'h2',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('heading3');
              },
              children: 'Заголовок 3',
              key: 'h3',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('heading4');
              },
              children: 'Заголовок 4',
              key: 'h4',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('heading5');
              },
              children: 'Заголовок 5',
              key: 'h5',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('heading6');
              },
              children: 'Заголовок 6',
              key: 'h6',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('foreword');
              },
              children: 'Вступительный текст',
              key: 'foreword',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('main');
              },
              children: 'Основной текст',
              key: 'main',
            },
            {
              type: 'label',
              onClick: () => {
                handleClick('caption');
              },
              children: 'Подпись',
              key: 'caption',
            },
          ],
        }}
      </Dropdown>
    </div>
  );
};
