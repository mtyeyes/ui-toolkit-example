import React from 'react';
import styles from './table-cell.module.scss';
import cn from 'classnames';

import { UserCard, UserCardProps, Toggle, ToggleProps, Badge, BadgeProps } from '../../../../index';
import { TableMenuBtn, TableMenuBtnProps } from './table-menu-btn/table-menu-btn';

export type TableCellProps = SpecificTableCellProps & CommonTableCellProps;

export type SpecificTableCellProps =
  | TableCellHeaderPropsWithType
  | TableCellTextPropsWithType
  | TableCellNumericPropsWithType
  | TableCellUserCardPropsWithType
  | TableCellTogglePropsWithType
  | TableCellBadgePropsWithType
  | TableCellExpandableMenuPropsWithType;

type TableCellUserCardPropsWithType = UserCardProps & {
  cellType: 'usercard';
};

interface TableCellHeaderPropsWithType {
  cellType: 'header';
  children: string;
}

interface TableCellNumericPropsWithType {
  cellType: 'numeric';
  children: string;
}

interface TableCellTogglePropsWithType extends ToggleProps {
  cellType: 'toggle';
}

interface TableCellExpandableMenuPropsWithType extends TableMenuBtnProps {
  cellType: 'menu';
}

interface TableCellBadgePropsWithType extends BadgeProps {
  cellType: 'badge';
}

interface TableCellTextPropsWithType {
  cellType?: 'text';
  children: string;
}

export interface CommonTableCellProps {
  isHeader: boolean;
  isCondensed: boolean;
}

export const TableCell = ({ isCondensed, isHeader, ...props }: TableCellProps) => {
  const WrapperComponent: keyof JSX.IntrinsicElements = isHeader ? 'th' : 'td';
  const wrapperClassName = isHeader ? cn(styles.cell, styles.header) : cn(styles.cell, styles.data);

  if (props.cellType === 'header') {
    const { cellType, children } = props;
    return <WrapperComponent className={wrapperClassName}>{children}</WrapperComponent>;
  }
  if (props.cellType === 'numeric') {
    const { cellType, children } = props;
    return <WrapperComponent className={cn(wrapperClassName, styles.numeric)}>{children}</WrapperComponent>;
  }
  if (props.cellType === 'toggle') {
    const { cellType, ...toggleProps } = props;
    return (
      <WrapperComponent className={cn({ [styles.condensed]: isCondensed }, wrapperClassName, styles.toggle)}>
        <Toggle {...toggleProps} />
      </WrapperComponent>
    );
  }
  if (props.cellType === 'badge') {
    const { cellType, ...badgeProps } = props;
    return (
      <WrapperComponent className={wrapperClassName}>
        <Badge {...badgeProps} />
      </WrapperComponent>
    );
  }
  if (props.cellType === 'menu') {
    const { cellType, ...menuProps } = props;
    return (
      <WrapperComponent className={cn({ [styles.condensed]: isCondensed }, wrapperClassName, styles.menuBtn)}>
        <TableMenuBtn {...menuProps} />
      </WrapperComponent>
    );
  }
  if (props.cellType === 'usercard') {
    const { cellType, ...userCardProps } = props;
    return (
      <WrapperComponent className={wrapperClassName}>
        <UserCard size={isCondensed ? 'small' : 'medium'} {...userCardProps} />
      </WrapperComponent>
    );
  }
  const { cellType, children } = props;
  return <WrapperComponent className={wrapperClassName}>{children}</WrapperComponent>;
};
