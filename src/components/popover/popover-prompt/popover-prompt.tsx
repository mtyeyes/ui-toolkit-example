import React from 'react';
import styles from './popover-prompt.module.scss';

import { Button } from '../../../index';

export interface PopoverPromptProps {
  type: 'prompt';
  title: string;
  TitleComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  description: string;
  handleCancel: () => void;
  handleDelete: () => void;
}

export const PopoverPrompt = ({
  title,
  TitleComponent = 'h6',
  description,
  handleCancel,
  handleDelete,
}: PopoverPromptProps) => {
  const Title = TitleComponent !== undefined ? TitleComponent : 'h6';

  return (
    <>
      <div className={styles.textWrapper}>
        <Title className={styles.title}>{title}</Title>
        <p className={styles.text}>{description}</p>
      </div>
      <div className={styles.actions}>
        <Button theme="onLight" impact="destructive" size="small" onClick={handleDelete}>
          Delete
        </Button>
        <Button theme="onLight" impact="none" size="small" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </>
  );
};
