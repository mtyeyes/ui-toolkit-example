import React, { useState, ChangeEvent, DragEvent, useRef } from 'react';
import styles from './file-uploader.module.scss';
import cn from 'classnames';

import { Avatar, AvatarProps } from '../../index';
import { readFile } from '../../utils/read-file';

export interface FileUploaderProps {
  id: string;
  file: string | null;
  setFile: (file: string | null) => void;
}

export const FileUploader = ({ id, file, setFile }: FileUploaderProps) => {
  const [isDrag, setIsDrag] = useState(false);
  const wrapperRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length !== 0) {
      readFile(e.currentTarget.files?.[0]!, setFile);
    }
  };

  const handleDrop = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDrag(false);

    const dt = e.dataTransfer;
    const files = dt.files;

    if (files?.[0]) {
      readFile(files?.[0], setFile);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDrag(true);
  };

  const handleDragOver = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDrag(false);
  };

  const avatarProps: AvatarProps = file
    ? {
        type: 'photo',
        avatarSrc: file,
        size: 'large',
        onError: () => {
          setFile(null);
        },
      }
    : { type: 'icon', size: 'large' };

  return (
    <form
      ref={wrapperRef}
      onSubmit={(e) => e.preventDefault()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn({ [styles.drag]: isDrag }, styles.wrapper)}
    >
      <Avatar {...avatarProps} />
      <div className={styles.inputContainer}>
        <span className={styles.dragNote}>Drag here or</span>
        <label htmlFor={id} className={styles.label}>
          Upload an image
        </label>
        <input id={id} name={id} onChange={handleChange} className={styles.input} type="file" />
        <p className={styles.caption}>At least 400x400px.</p>
      </div>
    </form>
  );
};
