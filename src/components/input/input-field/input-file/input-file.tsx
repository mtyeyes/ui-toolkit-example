import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './input-file.module.scss';
import cn from 'classnames';

import { Chip } from '../../../../index';
import { InputIcon } from '../input-icon/input-icon';
import { FolderOpen } from 'phosphor-react';

export interface InputFileProps {
  id: string;
  setValue?: (fileList: FileList | null) => void;
  placeholder?: string;
  isDisabled?: boolean;
}

export const InputFile = ({ id, placeholder, setValue, isDisabled }: InputFileProps) => {
  const [filesNames, setFilesNames] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const names: string[] = [];
    if (e.currentTarget.files?.length !== 0) {
      for (let i = 0; i < e.currentTarget.files!.length; i++) {
        names.push(e.currentTarget.files![i].name);
      }
    }
    setFilesNames(names);
    if (setValue !== undefined) setValue(e.currentTarget.files);
  };

  const removeFile = (fileName: string) => {
    if (inputRef.current === null || inputRef.current.files === null) return;
    const dt = new DataTransfer();
    const files = inputRef.current.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.name !== fileName) dt.items.add(file);
    }

    inputRef.current.files = dt.files;
    if (setValue !== undefined) setValue(inputRef.current.files);
    setFilesNames((prevValue) => prevValue.filter((name) => name !== fileName));
  };

  const labelClassName = cn({ [styles.disabled]: isDisabled }, styles.label);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        multiple
        id={id}
        name={id}
        disabled={isDisabled}
        onChange={handleChange}
        className={styles.input}
      />
      <InputIcon isDisabled={isDisabled}>
        <FolderOpen size="24px" />
      </InputIcon>
      {filesNames.length === 0 && (
        <label className={cn(labelClassName, styles.text)} htmlFor={id}>
          {placeholder}
        </label>
      )}
      {filesNames.map((name: string) => {
        const nameWithoutExtension = name.split('.').slice(0, -1).join('.');

        return (
          <Chip
            theme="dark"
            isDisabled={isDisabled}
            withIcon
            onClick={() => {
              removeFile(name);
            }}
            key={nameWithoutExtension}
          >
            {nameWithoutExtension}
          </Chip>
        );
      })}
    </>
  );
};
