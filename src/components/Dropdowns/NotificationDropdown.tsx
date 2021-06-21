import React from 'react';
import { createPopper } from '@popperjs/core';

const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const handleDropdownPopoverClick = () => {
    if (dropdownPopoverShow) {
      // @ts-ignore
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: 'bottom-start',
      });
      setDropdownPopoverShow(true);
    } else {
      setDropdownPopoverShow(false);
    }
  };
  return (
    <>
      <a
        className="text-blueGray-500 block py-1 px-3"
        href="#pablo"
        // @ts-ignore
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          handleDropdownPopoverClick();
        }}
      >
        <i className="fas fa-bell" />
      </a>
      <div
        // @ts-ignore
        ref={popoverDropdownRef}
        className={
          `${dropdownPopoverShow ? 'block ' : 'hidden '
          }bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`
        }
      >
        {Array(4).fill('').map((i) => (
          <a
            key={i}
            href="#pablo"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            onClick={(e) => e.preventDefault()}
          >
            Action
            {' '}
            {i}
          </a>
        ))}
      </div>
    </>
  );
};

export default NotificationDropdown;
