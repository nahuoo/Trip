import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: black;
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  background: black;
  padding: ${(props) => props.p};
  margin-top: ${(props) => props.m};
`

export const ContainerIzquierdo = styled.div.attrs((props) => ({
  style: {
    transform: (props) => props.t,
  },
}))`
  background: transparent;
  width: 60%;
  padding-top: 5px;
  font-size: 1.5em;
  line-height: 1.6;
  color: white;
  z-index: 2;
  margin: 10% 0;
`
export const ContainerDerecho = styled.div.attrs((props) => ({
  style: {
    transform: (props) => props.t,
  },
}))`
  background: transparent;
  width: 50%;
  padding-top: 5px;
  font-size: 1.6em;
  line-height: 1.6;
  color: white;
  margin: 10% 0;
`

export const Img = styled.img.attrs((props) => ({
  style: {
    transform: (props) => props.t,
  },
}))`
  width: 30%;
  opacity: 0.8;
  z-index: 1;
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  box-shadow: 30px -30px rgba(243, 241, 242, 0.1);;
`

export const LetrasGris = styled.div`
  font-size: 30em;
  color: grey;
  width: 100vw;
  text-align: center;
  letter-spacing: 60px;
  opacity: 0.1;
  user-select: none;
`
export const LetraGris = styled.p`
  margin-top: -20%;
  margin-left: 30%;
  color: grey;
  position: absolute;
  font-size: 40em;
  opacity: 0.1;
  writing-mode: tb-rl;
`
