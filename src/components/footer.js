import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { NavLink } from './nav-link'

import Dandelion from './dandelion'

const Footer = ({ siteTitle }) => (
  <footer
    css={`
      background: #141618;
      position: relative;
      text-align: center;
      width: 100vw;
      padding: 3rem calc((100vw - 1140px) / 2) 2rem;
      color: #b5b3b3;

      > * {
        margin-bottom: 30px;
      }

      hr {
        opacity: 0.1;
        background-color: #fff;
      }

      ul {
        font-weight: 700;
        padding-left: 0;
        list-style: none;
        text-transform: uppercase;
        margin-top: 3px;

        li {
          display: inline-block;
          padding-right: 1rem;
          font-size: 1.125rem;
          margin: 0;

          a {
            opacity: 0.8;
          }
        }
      }

      .active {
        opacity: 1;
        color: #fff;
      }
    `}
  >
    <div>
      <Link to='/'>
        <Dandelion fill='#b5b3b3' />
      </Link>
    </div>
    <ul>
      <li>
        <Link activeClassName='active' to='/writing'>
          Writing
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/about'>
          About
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/contact'>
          Get in Touch
        </Link>
      </li>
    </ul>
    <hr />
    <div>
      © {new Date().getFullYear()} Brett Bloxom - Built with 💜 using <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
