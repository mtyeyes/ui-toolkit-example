import React from 'react';
import styles from './breadcrumbs.module.scss';
import cn from 'classnames';

import { House } from 'phosphor-react';

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
    const isCurrent = i === paths.length;
    const linkPath = isHome ? basepath : `${basepath}/${paths.slice(0, i).join('/')}`;

    return (
      <>
        {i !== 0 && <div className={styles.separator} />}
        <li className={styles.item} key={path}>
          <Link
            href={isCurrent ? undefined : linkPath}
            className={cn({ [styles.home]: isHome, [styles.current]: isCurrent }, styles.link)}
          >
            {isHome ? <House size="24px" className={styles.icon} /> : pathsNames?.[i - 1] || path}
          </Link>
        </li>
      </>
    );
  };

  return <ul className={styles.list}>{[basepath, ...paths].map(mapLinksCallback)}</ul>;
};
