import React from 'react';
import styles from './vaccancy.module.scss';

import { Meta, DescriptionList, DescriptionType } from '../../../index';
import { CardTitle, CardTitleProps } from '../card-title/card-title';

export interface VaccancyProps extends CardTitleProps {
  type: 'vaccancy';
  vaccancyDescriptions: DescriptionType[];
  totalViews: number;
  date: string;
}

export const Vaccancy = ({ vaccancyDescriptions, totalViews, date, ...titleProps }: VaccancyProps) => {
  return (
    <>
      <CardTitle {...titleProps} />
      <Meta data={[{ type: 'views', children: totalViews }, { children: date }]} />
      <div className={styles.descriptionWrapper}>
        <DescriptionList isCondensed isVertical={false}>
          {vaccancyDescriptions}
        </DescriptionList>
      </div>
    </>
  );
};
