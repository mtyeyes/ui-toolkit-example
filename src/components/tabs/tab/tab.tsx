import React, { FC, SVGAttributes } from 'react';
import styles from './tab.module.scss';
import cn from 'classnames';

export type TabProps = (TabWithIconProps & TabStateProps) | (TabWithoutIconProps & TabStateProps);

export interface TabWithIconProps {
  icon: 'left' | 'right' | 'only';
  iconComponent: FC<SVGAttributes<SVGAElement>>;
  name: string;
}

export interface TabWithoutIconProps {
  icon?: 'none';
  iconComponent?: undefined;
  name: string;
}

interface TabStateProps {
  isChecked: boolean;
  setIsChecked: (tabChecked: string) => void;
  groupName: string;
}

export const Tab = ({ icon = 'none', isChecked, setIsChecked, groupName, name, iconComponent }: TabProps) => {
  const handleChange = () => setIsChecked(name);
  const tabNameWithoutWhitespaces = name.replaceAll(' ', '');

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
        {icon !== 'none' && iconComponent !== undefined && (
          <div className={cn(styles[icon], styles.iconWrapper)}>{iconComponent}</div>
        )}
        {icon !== 'only' && <span className={styles.text}>{name}</span>}
      </label>
    </li>
  );
};
