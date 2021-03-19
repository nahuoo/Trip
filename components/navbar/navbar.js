import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSpring } from 'react-spring'
import {
  Div,
  Nav,
  Logo,
  Burger,
  Line,
  Line2,
  ContainerBurger,
} from './styledNavbar'

export const Navbar = (props) => {
  const [navbarHeight, setNavbarHeight] = useState(false)
  const [prevSetY, setPrevSetY] = useState(0)
  const [currentSetY, setCurrentSetY] = useState(0)
  const [toogle, setToogle] = useState(false)

  const handleClick = () => {
    setToogle(!toogle)
  }
 
  
  const handleScroll = () => {
    setCurrentSetY(window.pageYOffset)
    if (currentSetY < prevSetY) {
      setNavbarHeight(true)
    } else {
      setNavbarHeight(false)
    }
    if (window.pageYOffset == 0) {
      setNavbarHeight(true)
    }

    setPrevSetY(currentSetY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentSetY])

  const FadeIn = useSpring({
    config: { duration: 250, mass: 50, tension: 5000, friction: 100 },
    height: toogle.toString() ? '99%' : '10%',
    width: toogle.toString() ? 200 : 'undefined',
    from: { x: 200 },
  })

  const NavFadeIn = useSpring({
    config: { duration: 400, mass: 5, tension: 2000, friction: 200 },
    color: toogle ? 'red' : 'black',
    opacity: toogle ? 1 : 0,
    from: { color: 'black', opacity: 0 },
  })

  return (
    <>
      <Div
        color={props.color}
        height={navbarHeight}
        active={toogle}
        style={FadeIn}
      >
        <Logo active={toogle}>
          <Link href="/" passHref>
            <a href="/caseStudies">TRIP</a>
          </Link>
        </Logo>
        <Nav active={toogle} style={NavFadeIn}>
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
        <Burger onClick={handleClick}>
          <Line active={toogle} />
          <Line2 active={toogle} />
        </Burger>
      </Div>
    </>
  )
}
