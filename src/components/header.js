import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import NavLink from './nav-link'
import Dandelion from './dandelion'

const Header = ({ siteTitle }) => (
  <header
    css={`
      padding: 1rem calc((100vw - var(--header-width)) / 2) 1rem;
      width: 100%;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
      letter-spacing: 0.08em;
      position: fixed;
      top: 0;
      background: rgba(255, 255, 255, 0.9);
      z-index: 10;

      nav {
        display: flex;
        justify-content: space-between;
        width: var(--max-width);
        max-width: 90vw;
        margin: 0 auto;
      }

      .header-icon {
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.5rem;
          margin-left: -1rem;
          vertical-align: middle;
        }
      }

      ul {
        display: flex;
        align-items: center;

        li:not(:last-child) {
          margin-right: 1rem;
        }
      }

      @media screen and (max-width: 600px) {
        .header-icon {
          > span {
            display: none;
          }
        }
      }
    `}
  >
    <nav>
      <NavLink to='/' className='header-icon' fontWeight='700'>
        <Dandelion id='header-dandelion' />
        <span>{siteTitle}</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/writing'>Writing</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
