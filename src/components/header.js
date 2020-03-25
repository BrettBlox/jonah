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
      height: 5 rem;
      padding: 1rem calc((100vw - 1140px) / 2) 1rem;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

      .header-icon {
        font-size: 1.5rem;
        svg {
          margin-right: 1rem;
          vertical-align: middle;
        }
      }

      nav {
        a:not(:last-child) {
          margin-right: 1rem;
        }
      }
    `}
  >
    <NavLink to='/' className='header-icon'>
      <Dandelion
        id='header-dandelion'
        css={`
          margin-left: -1rem;
        `}
      />
      <span>{siteTitle}</span>
    </NavLink>
    <nav>
      <NavLink to='/writing'>Writing</NavLink>
      <NavLink to='/about'>About</NavLink>
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
