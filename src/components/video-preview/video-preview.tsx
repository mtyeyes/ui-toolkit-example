import React from 'react';
import styles from './video-preview.module.scss';

import { PlayCircle } from 'phosphor-react';
import { Meta } from '../../index';

export interface VideoPreviewProps {
  title: string;
  TitleComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  videoType: string[];
  videoPreviewSrc: string;
  LinkComponent: keyof JSX.IntrinsicElements;
  href: string;
}

export const VideoPreview = ({
  title,
  TitleComponent,
  videoType,
  videoPreviewSrc,
  LinkComponent,
  href,
}: VideoPreviewProps) => {
  const Title = TitleComponent !== undefined ? TitleComponent : 'h6';

  return (
    <article className={styles.wrapper}>
      <LinkComponent className={styles.link} href={href} />
      <div className={styles.previewWrapper}>
        <img className={styles.previewImg} src={videoPreviewSrc} />
        <PlayCircle weight="fill" size="32px" className={styles.playIcon} />
      </div>
      <div className={styles.infoWrapper}>
        <Title className={styles.title}>{title}</Title>
        <Meta
          data={videoType.map((str) => {
            return { children: str };
          })}
        />
      </div>
    </article>
  );
};
