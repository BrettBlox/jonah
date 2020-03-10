import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from './nav-link'

const Header = ({ siteTitle }) => (
  <header
    css={`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5 rem;
      padding: 2rem calc((100vw - 960px) / 2) 2rem;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    `}
  >
    <div>{siteTitle}</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
