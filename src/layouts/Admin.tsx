import React from 'react';
import PropTypes from 'prop-types';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar';
import Sidebar from 'components/Sidebar/Sidebar';
import HeaderStats from 'components/Headers/HeaderStats';
import FooterAdmin from 'components/Footers/FooterAdmin';

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-[16rem] bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full mt-8">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

Admin.propTypes = {
  children: PropTypes.node.isRequired,
};
