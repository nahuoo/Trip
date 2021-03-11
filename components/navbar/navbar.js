import { Div, Nav, Link } from './styledNavbar'

export const Navbar = (props) => {
  return (
    <Div color={props.color}>
      <Nav>
        <Link>Trabajos</Link>
        <Link>Ideales</Link>
        <Link>Contacto</Link>
      </Nav>
    </Div>
  )
}
