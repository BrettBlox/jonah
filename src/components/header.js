import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import NavLink  from './nav-link'

const Header = ({ siteTitle }) => <header>{siteTitle}</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
