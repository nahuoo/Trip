import styled from 'styled-components'

export const Div = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.color};
`

export const Nav = styled.span`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 2em;
`

export const Link = styled.div`
  padding-right: 2em;
`
