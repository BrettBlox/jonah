import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled(Link)`
  color: ${props => (props.color ? props.color : 'var(--grey-900)')};
  text-decoration: none;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)};
  text-transform: uppercase;
  font-size: calc(14px + (18 - 14) * ((100vw - 400px) / (1600 - 400)));
  letter-spacing: 3.5px;
`

export default NavLink
