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
  height: 40vh;
  background: transparent;
  padding: ${(props) => props.p};
`

export const ContainerIzquierdo = styled.div.attrs(props => ({
  style: {
    transform: props => props.t
  }}))`
  background: transparent;
  width: 60%;
  padding-top: 5px;
  font-size: 1.5em;
  line-height: 1.6;
  color: white;
  z-index: 2;
  
`
export const ContainerDerecho = styled.div.attrs(props => ({
  style: {
    transform: props => props.t
  }}))`
  background: transparent;
  width: 50%;
  padding-top: 5px;
  font-size: 1.5em;
  line-height: 1.6;
  color: white;
  
`

export const Img = styled.img.attrs(props => ({
  style: {
    transform: props => props.t
  }}))`
  width: 30%;
  opacity: 0.8;
  z-index: 1;
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  
`
