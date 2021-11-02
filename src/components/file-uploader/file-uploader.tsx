import React, { useState, ChangeEvent, DragEvent, useRef } from 'react';
import styles from './file-uploader.module.scss';
import cn from 'classnames';

import { Avatar } from '../../index';

export interface FileUploaderProps {
  id: string;
  file: any;
  setFile: (file: any) => void;
}

export const FileUploader = ({ id, file, setFile }: FileUploaderProps) => {
  const [isDrag, setIsDrag] = useState(false);
  const wrapperRef = useRef(null);

  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFile(e.target?.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length !== 0) {
      readFile(e.currentTarget.files?.[0]!);
    }
  };

  const handleDrop = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDrag(false);

    const dt = e.dataTransfer;
    const files = dt.files;

    if (files?.[0]) {
      readFile(files?.[0]);
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
      <Avatar
        type={file ? 'photo' : 'icon'}
        size="large"
        onError={() => {
          setFile(null);
        }}
        avatarSrc={file ? file : undefined}
      />
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
