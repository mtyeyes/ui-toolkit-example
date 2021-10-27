import React, { FC, SVGAttributes } from 'react';
import styles from './tab.module.scss';
import cn from 'classnames';

export type TabProps = (TabWithIconProps & TabStateProps) | (TabWithoutIconProps & TabStateProps);

export interface TabWithIconProps {
  icon: 'left' | 'right' | 'only';
  iconSrc: FC<SVGAttributes<SVGAElement>>;
  name: string;
}

export interface TabWithoutIconProps {
  icon?: 'none';
  iconSrc?: undefined;
  name: string;
}

interface TabStateProps {
  isChecked: boolean;
  setIsChecked: (tabChecked: string) => void;
  groupName: string;
}

export const Tab = ({ icon = 'none', isChecked, setIsChecked, groupName, name, iconSrc }: TabProps) => {
  const handleChange = () => setIsChecked(name);
  const tabNameWithoutWhitespaces = name.replaceAll(' ', '');
  const Icon = icon !== 'none' && iconSrc;

  return (
    <li className={cn({ [styles.checked]: isChecked }, styles.tab)}>
      <input
        className={styles.input}
        checked={isChecked}
        id={`${tabNameWithoutWhitespaces}-tab`}
        onChange={handleChange}
        type="radio"
        name={groupName}
      />
      <label className={styles.label} htmlFor={`${tabNameWithoutWhitespaces}-tab`}>
        {Icon && <Icon className={cn(styles[icon], styles.icon)} />}
        {icon !== 'only' && <span className={styles.text}>{name}</span>}
      </label>
    </li>
  );
};
