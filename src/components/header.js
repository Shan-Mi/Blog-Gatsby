import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(227,223,71)`,
      background: `linear-gradient(90deg, rgba(227,223,71,1) 0%, rgba(255,146,87,1) 32%, rgba(0,212,255,1) 100%)`,
      marginBottom: `1.45rem`,
      height: `12vh`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
        height: `12vh`,
      }}
    >
      <h1 style={{ margin: 0, fontFamily: `'Nerko One', cursive` }}>
        <Link
          to="/"
          style={{
            color: `#1e272e`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
