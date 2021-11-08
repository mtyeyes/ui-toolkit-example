import { useEffect } from 'react';

const useCloseExpandable = (isExpanded: boolean, closeExpanded: () => void, container: Node | null) => {
  useEffect(() => {
    const closeOnClickOutside = (e: MouseEvent) => {
      if (container && !container.contains(e.target as Node)) shrinkExpanded();
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        shrinkExpanded();
      }
      if (e.key === 'Tab' && container && !container.contains(e.target as Node)) {
        shrinkExpanded();
      }
    };

    const clearEventListeners = () => {
      document.removeEventListener('click', closeOnClickOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };

    const shrinkExpanded = () => {
      closeExpanded();
      clearEventListeners();
    };

    if (isExpanded) {
      document.addEventListener('click', closeOnClickOutside);
      document.addEventListener('keydown', closeOnEscape);
    }
    return clearEventListeners;
  }, [isExpanded]);
};

export default useCloseExpandable;
