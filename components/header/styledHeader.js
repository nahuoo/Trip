import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export const MitadBlanca = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
`

export const MitadNegra = styled(animated.span)`
  @keyframes cambio {
    0% {
      clip-path: polygon(120% 0%, 100% 0%, 100% 100%, 120% 100%, 100% 50%);
    }
    100% {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, -25% 50%);
    }
  }

  z-index: ${props => props.timing ? 0 : -1};
  display: flex;
  font-size: 5em;
  color: white;
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  animation: cambio 4s ease 2000ms;
  justify-content: center;
  align-items: center;
`

export const H1 = styled(animated.h1)`
  align-items:center;
`