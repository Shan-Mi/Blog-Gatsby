import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';
const TitleStyle = css`
  .scale-up-hor-left {
    -webkit-animation: scale-up-hor-left 0.4s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
`;
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(227,223,71)`,
      background: `linear-gradient(90deg, rgba(227,223,71,1) 0%, rgba(255,146,87,1) 32%, rgba(0,212,255,1) 100%)`,
      marginBottom: `1.45rem`,
      height: `12vh`,
      transform: `translate(0, -20%) rotate(-2deg)`,
      transition: ``,
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
        transform: `rotate(2deg)`,
        paddingTop: `50px`,
      }}
    >
      <h1
        className="scale-up-for-left"
        style={{ margin: 0, fontFamily: `'Nerko One', cursive` }}
      >
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
