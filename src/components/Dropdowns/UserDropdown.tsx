import React from 'react';
import { createPopper } from '@popperjs/core';

const UserDropdown = (): JSX.Element => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    // @ts-ignore
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        // @ts-ignore
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          /* eslint-disable-next-line */
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
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
            key={`user-dropdown-${i}`}
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

export default UserDropdown;
