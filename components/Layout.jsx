import React, { Fragment } from 'react';

// Import libraries
import PropTypes from 'prop-types';

// Import components
import Navbar from './Navbar';
import TextHero from './TextHero';
import Footer from './Footer';

import '../styles/global.css';

function Layout({
  isTransparentNav,
  hasNoContact,
  hideHero,
  heroText,
  isCompact,
  children,
}) {
  return (
    <Fragment>
      <Navbar transparent={isTransparentNav} noContact={hasNoContact} />
      {!hideHero && <TextHero compact={isCompact}>{heroText}</TextHero>}
      {children}
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  isTransparentNav: PropTypes.bool,
  hasNoContact: PropTypes.bool,
  hideHero: PropTypes.bool,
  heroText: PropTypes.string,
  isCompact: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Layout.defaultProps = {
  isTransparentNav: false,
  hasNoContact: false,
  isCompact: false,
  hideHero: false,
  heroText: '',
};

export default Layout;
