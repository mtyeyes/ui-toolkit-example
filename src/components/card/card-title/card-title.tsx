import React from 'react';
import styles from './card-title.module.scss';

export interface CardTitleProps {
  title: string;
  TitleComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const CardTitle = ({ title, TitleComponent }: CardTitleProps) => {
  const Title = TitleComponent !== undefined ? TitleComponent : 'h6';

  return <Title className={styles.title}>{title}</Title>;
};
