import React, { useEffect } from 'react';
import styles from './pagination.module.scss';
import cn from 'classnames';

import { Button } from '../../index';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {
  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderControls = () => {
    const btnPattern = (() => {
      if (totalPages <= 1) return [];
      if (totalPages <= 5) return [...Array(totalPages)].map((blank, i) => i + 1);
      if (totalPages > 5 && currentPage < 4) return [1, 2, 3, 'ellipsis', totalPages];
      if (currentPage >= totalPages - 2) return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages];
      return [1, 'ellipsis', currentPage, 'ellipsis', totalPages];
    })();

    const mapBtnPatternCallback = (value: string | number, i: number) => {
      if (value === 'ellipsis')
        return (
          <li>
            <p key={`eli-${i}`} className={styles.ellipsis}>
              …
            </p>
          </li>
        );

      const handleClick = () => {
        setCurrentPage(value as number);
      };
      const isCurrent = value === currentPage;

      return (
        <li>
          <button
            key={`${value}-${i}`}
            type="button"
            onClick={isCurrent ? undefined : handleClick}
            disabled={isCurrent}
            className={cn({ [styles.current]: isCurrent }, styles.btn)}
          >
            {value}
          </button>
        </li>
      );
    };

    return btnPattern.map(mapBtnPatternCallback);
    return;
  };

  return (
    <div className={styles.wrapper}>
      {totalPages > 1 && (
        <Button
          size="small"
          impact="none"
          icon="only"
          iconComponent={<ArrowLeft size="24px" />}
          onClick={handlePreviousClick}
          isDisabled={currentPage <= 1}
        />
      )}
      <ul className={styles.list}>{renderControls()}</ul>
      {totalPages > 1 && (
        <Button
          size="small"
          impact="none"
          icon="only"
          iconComponent={<ArrowRight size="24px" />}
          onClick={handleNextClick}
          isDisabled={currentPage >= totalPages}
        />
      )}
    </div>
  );
};
