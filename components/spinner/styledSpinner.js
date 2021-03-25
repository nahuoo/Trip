import styled from 'styled-components'

export const Animacion = styled.div`
  @keyframes pulse {
    50% {
      background: white;
    }
  }

  position: relative;
  height: 100%;
  background: black;
  animation: pulse 2s infinite;

  p {
    text-align: center;
    padding-top: 20%;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`
