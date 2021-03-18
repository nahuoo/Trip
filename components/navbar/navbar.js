import {useState, useEffect} from 'react'
import Link from 'next/link'
import { Div, Nav, Logo } from './styledNavbar'

export const Navbar = (props) => {

  const [navbarHeight, setNavbarHeight] = useState(false)
  const [offSetY, setOffsetY] = useState(0)
  const [currentSetY, setCurrentSetY] = useState(0)
  
  const handleScroll = () => {
    
    setCurrentSetY(window.pageYOffset)
    
    console.log(currentSetY)
    if (currentSetY < offSetY) {
      setNavbarHeight(false)
      setOffSetY(currentSetY)

    } else {
      setNavbarHeight(true);
    }
    setOffsetY(window.pageYOffset)}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Div color={props.color} height={navbarHeight}>
      <Logo>
        <Link href="/" passHref>
          <a href="/caseStudies">TRIP</a>
        </Link>
      </Logo>
      <Nav>
        <Link href="/caseStudies" passHref>
          <a>Trabajos</a>
        </Link>
        <Link href="/ideales" passHref>
          <a>Ideales</a>
        </Link>
        <Link href="/contacto" passHref>
          <a>Contacto</a>
        </Link>
      </Nav>
    </Div>
  )
}
