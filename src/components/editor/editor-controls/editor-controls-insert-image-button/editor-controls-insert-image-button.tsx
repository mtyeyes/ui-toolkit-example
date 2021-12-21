import React, { useRef, ChangeEvent } from 'react';
import styles from './editor-controls-insert-image-button.module.scss';

import { EditorControlsButton } from '../editor-controls';
import { ImageSquare } from 'phosphor-react';
import { readFile } from '../../../../utils/read-file';

export interface EditorControlsInsertImageButtonProps {
  insertImage: (imageSrc: string) => void;
}

export const EditorControlsInsertImageButton = ({ insertImage }: EditorControlsInsertImageButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length !== 0) {
      readFile(e.currentTarget.files?.[0]!, insertImage);
    }
  };

  return (
    <>
      <input className={styles.hiddenInput} onChange={handleChange} type="file" ref={inputRef} />
      <EditorControlsButton
        iconComponent={<ImageSquare size="24px" />}
        tooltip="Вставить изображение"
        onClick={() => inputRef.current?.click()}
      />
    </>
  );
};
