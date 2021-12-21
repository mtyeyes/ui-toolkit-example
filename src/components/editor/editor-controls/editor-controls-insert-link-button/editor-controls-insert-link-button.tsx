import React, { useState, useEffect } from 'react';

import { Button, Tooltip, Popover } from '../../../../index';
import { LinkSimple } from 'phosphor-react';

export interface EditorControlsInsertLinkButtonProps {
  insertLink: (linkText: string, linkHref: string) => void;
  isToolbarVisibile: boolean;
}

export const EditorControlsInsertLinkButton = ({
  insertLink,
  isToolbarVisibile,
}: EditorControlsInsertLinkButtonProps) => {
  const [tooltipAnchor, setTooltipAnchor] = useState<HTMLButtonElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const [linkHref, setLinkHref] = useState('');
  const [linkText, setLinkText] = useState('');

  const resetState = () => {
    setIsEnabled(false);
    setLinkHref('');
    setLinkText('');
  };

  useEffect(() => {
    if (!isToolbarVisibile) resetState();
  }, [isToolbarVisibile]);

  return (
    <>
      <Button
        ref={setTooltipAnchor}
        theme="onLight"
        impact="none"
        icon="only"
        size="small"
        iconComponent={<LinkSimple size="24px" />}
        onClick={() => {
          setIsEnabled((prevState) => !prevState);
        }}
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
      />
      <Tooltip
        isVisible={!isEnabled && (isHovered || isFocused)}
        size="small"
        theme="dark"
        position="top"
        align="center"
        referenceElement={tooltipAnchor}
      >
        {'Ссылка'}
      </Tooltip>
      <Popover
        type="input"
        handleCancel={() => setIsEnabled(false)}
        handlePaste={() => {
          insertLink(linkText, linkHref);
          resetState();
        }}
        isPasteButtonDisabled={linkHref === '' || linkText === ''}
        pasteButtonText="Вставить"
        cancelButtonText="Отменить"
        referenceElement={tooltipAnchor}
        position="top"
        align="center"
        isVisible={isEnabled}
        inputOneValue={linkText}
        setInputOneValue={(value) => {
          setLinkText(value || '');
        }}
        inputOnePlaceholder="Текст ссылки"
        inputTwoValue={linkHref}
        setInputTwoValue={(value) => {
          setLinkHref(value || '');
        }}
        inputTwoPlaceholder="http://"
      />
    </>
  );
};
