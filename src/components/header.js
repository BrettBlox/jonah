import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import NavLink from './nav-link'
import Dandelion from './dandelion'

const Header = ({ siteTitle }) => (
  <header
    css={`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem calc((100vw - var(--header-width)) / 2) 1rem;
      width: 100%;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 3vw;
      }

      .header-icon {
        display: flex;
        align-items: center;
        font-size: calc(14px + (1.5rem - 14) * ((100vw - 300px) / (1400 - 300)));

        svg {
          margin-right: 0.5rem;
          vertical-align: middle;
          justify-self: flex-start;
        }
      }

      nav {
        a:not(:last-child) {
          margin-right: 1rem;
        }
      }
    `}
  >
    <div>
      <NavLink to='/' className='header-icon'>
        <Dandelion id='header-dandelion' />
        <span>{siteTitle}</span>
      </NavLink>
      <nav>
        <NavLink to='/writing'>Writing</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
