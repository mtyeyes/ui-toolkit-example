import { useEffect } from 'react';

const useCloseModal = (isModalOpen: boolean, setIsModalOpen: () => void, container: Node | null) => {
  useEffect(() => {
    const closeOnClickOutside = (e: MouseEvent) => {
      if (container && !container.contains(e.target as Node)) closeDropdownMenu();
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDropdownMenu();
      }
      if (e.key === 'Tab' && container && !container.contains(e.target as Node)) {
        closeDropdownMenu();
      }
    };

    const clearEventListeners = () => {
      document.removeEventListener('click', closeOnClickOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };

    const closeDropdownMenu = () => {
      setIsModalOpen();
      clearEventListeners();
    };

    if (isModalOpen) {
      document.addEventListener('click', closeOnClickOutside);
      document.addEventListener('keydown', closeOnEscape);
    }
    return clearEventListeners;
  }, [isModalOpen]);
};

export default useCloseModal;
