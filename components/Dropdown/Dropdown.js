import { useEffect, useState, useRef } from 'react';
import styles from './Dropdown.module.css';
import Select from './Select';

// Prepend with 'https://' and uncomment line 46
const options = [
  { value: 'www.google.com', label: 'Careers' },
  { value: 'www.google.com', label: 'Field Input 1' },
  { value: 'www.google.com', label: 'Field Input 2' },
  { value: 'www.google.com', label: 'Field Input 3' },
  { value: 'www.google.com', label: 'Field Input 4' },
];

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const refHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', refHandler);
    return () => {
      document.removeEventListener('mousedown', refHandler);
    };
  });
  return domNode;
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    setSelectedItem(options[0]);
  }, []);

  const toggleSelectMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (index) => {
    setSelectedItem(options[index]);
    // window.open(data[index].value, '_blank');
    toggleSelectMenu();
  };

  const domNode = useClickOutside(() => {
    if (isOpen) setIsOpen(!isOpen);
  });

  return (
    <div ref={domNode} className={styles.dropdownWrapper}>
      <div
        className={styles.selectedItem}
        aria-haspopup
        role="button"
        tabIndex={0}
        onKeyDown={toggleSelectMenu}
        onClick={toggleSelectMenu}>
        {selectedItem.label}
      </div>
      {isOpen && (
        <ul className={styles.ul_select}>
          {options.map((item, index) => (
            <li key={item.label} className={styles.li_select}>
              <Select item={item} onclick={() => handleSelected(index)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
