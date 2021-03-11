import {
  Div,
  ContainerIzquierdo,
  ContainerDerecho,
  Img,
  Filtro,
  Container,
  LetrasGris
} from './styledAbout'
import { useState, useEffect } from 'react'
import Parallax from 'react-rellax'

export const About = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
    console.log(offsetY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Div>
      <Container p="20% 10% 10% 10%">
        <Parallax speed={2}>
          <Parallax speed={-2}>
            <Img src="/mardel.jpg" alt="mar del plata" right="20%" top="0" />
          </Parallax>
          <ContainerIzquierdo>
            Somos un equipo interdisciplinario avocados en analizar y extraer la
            escencia de los desafíos en los negocios para presentar soluciónes
            innovadoras a nuestros clientes.
          </ContainerIzquierdo>
        </Parallax>
      </Container>
      <Container></Container>
      <Container p="10% 0% 10% 20%" m='0%'>
        <Parallax speed={3}>
          <Img src="/startup.jpg" alt="oficina" right="80%" />
        </Parallax>
       
        <Parallax speed={2}>
          <ContainerDerecho>
            Entendemos el camino de emprendedores, pequeñas y medianas empresas
            en tiempos de cambios por eso les proporcionamos herramientas
            ayudandolos en su crecimiento.
          </ContainerDerecho>
        </Parallax>
      </Container>
      <Parallax speed={-1}>
      <LetrasGris>
        TRIP
      </LetrasGris>
      </Parallax>
    
    </Div>
  )
}
