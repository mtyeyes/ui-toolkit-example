import React from 'react';
import styles from './breadcrumbs.module.scss';
import cn from 'classnames';

import HomeIcon from '../../resources/icons/home.svg';

export interface BreadcrumbsProps {
  basepath: LinkPath;
  paths: LinkPath[];
  pathsNames: string[];
  Link: keyof JSX.IntrinsicElements;
}

type LinkPath = string;

export const Breadcrumbs = ({ basepath, paths, pathsNames, Link }: BreadcrumbsProps) => {
  const mapLinksCallback = (path: LinkPath, i: number) => {
    const isHome = path === basepath;
    const linkPath = isHome ? basepath : `${basepath}/${paths.slice(0, i).join('/')}`;

    return (
      <>
        {i !== 0 && <div className={styles.separator} />}
        <li className={styles.item} key={path}>
          <Link href={linkPath} className={cn({ [styles.home]: isHome }, styles.link)}>
            {isHome ? <HomeIcon className={styles.icon} /> : pathsNames?.[i - 1] || path}
          </Link>
        </li>
      </>
    );
  };

  return <ul className={styles.list}>{[basepath, ...paths].map(mapLinksCallback)}</ul>;
};
