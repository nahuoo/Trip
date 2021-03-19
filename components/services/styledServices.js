import styled from 'styled-components'
import { animated } from 'react-spring'

export const Div = styled(animated.div)`
  background: black;
  color:white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  p {
    grid-column: 1 / 4;
    margin: 0;
    text-align: center;
    font-size: 4em;
  }
  ul {  
      font-size: 1.2em;
      letter-spacing: 0.2em;
      
  }
  li{
    letter-spacing: normal;
    margin: 1em;
    list-style:none;
      color: grey;
  }
  @media (max-width: 960px) {
  display:flex;
  flex-direction:column;
  margin-top: 50vh;
  
  }
`
export const Container = styled.div`
  border-radius: 5%;
  -moz-box-shadow: -6px 10px 19px #000000;
  -webkit-box-shadow: -6px 10px 19px #000000;
  box-shadow: -6px 10px 19px rgba(10,10,10,3.2);
  padding: 1em;
  margin: 2em;

  @media (max-width: 960px) {
  display:flex;
  flex-direction:column;
  margin-left: 10vw;
  }
`
