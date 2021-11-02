import React, { useState } from 'react';
import styles from './expander.module.scss';
import cn from 'classnames';

import { Plus, Minus } from 'phosphor-react';

export interface ExpanderProps {
  label: string;
  description: string;
  labelTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Expander = ({ label, labelTag: LabelTag = 'h6', description }: ExpanderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className={cn({ [styles.expanded]: isExpanded }, styles.container)}>
      <div className={styles.headerWrapper}>
        <LabelTag className={styles.label} onClick={handleClick}>
          {label}
        </LabelTag>
        <button className={styles.btn} onClick={handleClick}>
          {isExpanded ? <Minus size="24px" /> : <Plus size="24px" />}
        </button>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
