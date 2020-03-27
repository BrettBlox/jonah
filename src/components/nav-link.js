import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled(Link)`
  color: ${props => (props.color ? props.color : '#333')};
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
`

export default NavLink
