import React from 'react';
import PropTypes from 'prop-types';

// components

import Navbar from 'components/Navbars/AuthNavbar';
import FooterSmall from 'components/Footers/FooterSmall';

export default function Auth({ children }) {
  return (
    <>
      <Navbar />
      <main className="h-full">
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          />
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
