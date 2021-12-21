import React, { ReactNode, useState } from 'react';

import { Button, Tooltip } from '../../../../index';

export interface EditorControlsButtonProps {
  iconComponent: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  tooltip: string;
}

export const EditorControlsButton = ({ iconComponent, onClick, isDisabled, tooltip }: EditorControlsButtonProps) => {
  const [tooltipAnchor, setTooltipAnchor] = useState<HTMLButtonElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Button
        ref={setTooltipAnchor}
        theme="onLight"
        impact="none"
        icon="only"
        size="small"
        iconComponent={iconComponent}
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        isDisabled={isDisabled}
      />
      <Tooltip
        isVisible={isHovered || isFocused}
        size="small"
        theme="dark"
        position="top"
        align="center"
        referenceElement={tooltipAnchor}
      >
        {tooltip}
      </Tooltip>
    </>
  );
};
