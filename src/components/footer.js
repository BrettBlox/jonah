import React from 'react'
import styled from 'styled-components'
import NavLink from './nav-link'
import Subscribe from './subscribe'
import Dandelion from './dandelion'

const StyledFooter = styled.footer`
  background: var(--footer-bg);
  text-align: center;
  width: 100vw;
  padding: 4rem calc((100vw - var(--header-width)) / 2) 1rem;
  color: var(--light);

  > * {
    margin-bottom: 2rem;
  }

  hr {
    opacity: 0.3;
    background-color: var(--light);
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
    color: var(--white);
    opacity: 1;
    font-weight: 700;
  }
`

const Footer = () => (
  <StyledFooter>
    <Subscribe />
    <div>
      <NavLink to='/'>
        <Dandelion id='footer-dandelion' title='Footer Dandelion Logo' />
      </NavLink>
    </div>
    <ul>
      <li>
        <NavLink
          fontWeight='400'
          color='var(--light)'
          activeClassName='active'
          to='/writing'
        >
          Writing
        </NavLink>
      </li>
      <li>
        <NavLink
          fontWeight='400'
          color='var(--light)'
          activeClassName='active'
          to='/about'
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          fontWeight='400'
          color='var(--light)'
          activeClassName='active'
          to='/contact'
        >
          Get in Touch
        </NavLink>
      </li>
    </ul>
    <hr />
    <div>
      All Materials © The Humdrum Dandelion {new Date().getFullYear()} <br />
      Built with{' '}
      <Dandelion
        id='copyright'
        title='Copyright Dandelion Logo'
        width='30'
        height='35'
      />{' '}
      by Brett Bloxom
    </div>
  </StyledFooter>
)

export default Footer
