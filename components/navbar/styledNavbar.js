import styled from 'styled-components'
import { animated } from 'react-spring'

export const Div = styled(animated.div)`
  position: fixed;
  transition: all 0.3s ease-in-out;
  display: flex;
  background: black;
  width: 100%;
  transform: ${(props) => (props.height ? '' : 'translateY(-100%)')};
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.color};
  z-index: 10;
  box-shadow: -6px 10px 19px rgba(250, 250, 250, 0.2);
  font-family: 'Roboto', sans-serif;

  @media (max-width: 600px) {
    height: ${(props) => (props.active ? '100%' : '3rem')};
    top: ${(props) => (props.active ? '0%' : '')};
    right: 0;
    flex-direction: ${(props) => (props.active ? 'column-revers' : 'row')};
    transform: ${(props) => (props.height ? '' : '')};
  }
`

export const Burger = styled.div`
  position: ${(props) => (props.active ? 'absolute' : '')};
  margin-right: 1em;
  left: 30%;
  top: 5%;
  background-color: rgba(255, 125, 125, 0);
  display: flex;
  flex-direction: column;
  user-select: none;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 601px) {
    display: none;
  }
`

export const Line = styled.span`
  background-color: white;
  height: 4px;
  width: 50px;
  margin-top: 0.5rem;
  transition: transform 500ms;
  transform: ${(props) => (props.active ? 'rotate(-225deg)' : '')};
  user-select: none;
`

export const Line2 = styled.span`
  background-color: white;
  height: 4px;
  width: 50px;
  transition: all 0.5s ease-in-out;
  margin-top: ${(props) => (props.active ? '-.2rem' : '.5rem')};
  transform: ${(props) => (props.active ? 'rotate(45deg)' : '')};
  user-select: none;
`
export const Nav = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  padding-right: 2em;
  animation: all 1s;
  a {
    :hover {
      color: grey;
    }
  }
  @media (max-width: 600px) {
    display: ${(props) => (props.active ? '' : 'none')};
    flex-direction: column;
    justify-content: center;
    margin-left: 1.5rem;
  }
`

export const Logo = styled.div`
  justify-content: flex-start;
  font-size: 1rem;
  padding-left: 1rem;
  display: ${(props) => (props.active ? 'none' : '')};
  a {
    font-family: 'Anton', sans-serif;
    font-size: 1.3rem;
  }
`
