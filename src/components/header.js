import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavLink from './nav-link'
import Dandelion from './dandelion'
import ToggleTheme from './toggle-theme'

const StyledHeader = styled.header`
  padding: 1rem calc((100vw - var(--header-width)) / 2) 1rem;
  width: 100%;
  box-shadow: var(--header-shadow);
  letter-spacing: 0.08em;
  position: fixed;
  top: 0;
  background: var(--header-bg);
  z-index: 10;
  transition: background 0.3s;

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

  .active {
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    .header-icon {
      svg {
        width: 75px;
        height: 75px;
      }
      > span {
        display: none;
      }
    }

    ul {
      flex: 1;
      li:not(:last-child) {
        margin-right: 0.75rem;
      }
      li:last-child {
        margin-left: auto;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <nav>
      <NavLink to='/' className='header-icon' fontWeight='700'>
        <Dandelion id='header-dandelion' />
        <span>{siteTitle}</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/writing' activeClassName='active'>
            Writing
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
