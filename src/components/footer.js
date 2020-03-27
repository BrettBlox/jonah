import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import NavLink from './nav-link'

import Dandelion from './dandelion'

const Footer = ({ siteTitle }) => (
  <footer
    css={`
      background: var(--dark-grey);
      text-align: center;
      width: 100vw;
      padding: 3rem calc((100vw - var(--header-width)) / 2) 1rem;
      color: var(--beige);

      > * {
        margin-bottom: 2rem;
      }

      hr {
        opacity: 0.1;
        background-color: #fff;
        max-width: 96vw;
        margin-left: auto;
        margin-right: auto;
      }

      ul {
        padding: 0;
        list-style: none;
        text-transform: uppercase;
        margin-top: 3px;

        li {
          display: inline-block;
          margin: 0;
          &:not(:last-child) {
            padding-right: 1rem;
          }

          a {
            opacity: 0.8;
          }
        }
      }
      .active {
        color: #fff;
        opacity: 1;
        font-weight: 700;
      }
    `}
  >
    <div>
      <NavLink to='/'>
        <Dandelion id='footer-dandelion' title='Footer Dandelion Logo' />
      </NavLink>
    </div>
    <ul>
      <li>
        <NavLink fontWeight='400' color='var(--beige)' activeClassName='active' to='/writing'>
          Writing
        </NavLink>
      </li>
      <li>
        <NavLink fontWeight='400' color='var(--beige)' activeClassName='active' to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink fontWeight='400' color='var(--beige)' activeClassName='active' to='/contact'>
          Get in Touch
        </NavLink>
      </li>
    </ul>
    <hr />
    <div>
      All Materials © Jonah Swann {new Date().getFullYear()} <br />
      Built with <Dandelion id='copyright' title='Copyright Dandelion Logo' width='30' height='35' /> by Brett Bloxom
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
