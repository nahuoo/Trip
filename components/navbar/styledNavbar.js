import styled from 'styled-components'

export const Div = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  background: black;
  width: 100%;
  height: ${props => props.height ? "3rem" : 0 };
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.color};
  z-index: 10;
  box-shadow: -6px 10px 19px rgba(10,10,10,3.2);
`

export const Nav = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  padding-right: 2em;
  animation: all 1s ;
  a{
    :hover{
      color:grey;
    }
  }

`

export const Logo = styled.div`
  justify-content: flex-start;
  font-size: 1rem;
`
