import { MitadBlanca, MitadNegra, Div, H1 } from './styledHeader'
import { Navbar } from '../navbar/navbar'
import { useSpring } from 'react-spring'
import { useState, useEffect } from 'react'

export const Header = () => {
  const [timing, setTiming] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTiming(true)
      console.log(timing)
    }, 2000)
  }, [])

  const opacityAnimation = useSpring({
    backgroundColor: 'black',
    config: { duration: 3200, delay: 4000, mass: 2 },
    from: { backgroundColor: 'white' },
  })

  const FadeIn = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: !timing ? 1 : 0 ,
    x:  !timing ? 0 : 1,
    height: !timing ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <Div>
      <MitadBlanca>
        <H1 style={FadeIn}>TRIP</H1>
      </MitadBlanca>
      <MitadNegra style={opacityAnimation} timing={timing}>
        <Navbar color="white" />
        <p>We craft brands</p>
      </MitadNegra>
    </Div>
  )
}
