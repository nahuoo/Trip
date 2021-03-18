import styled from 'styled-components'
export const BgAnimation = () => {
  return (
    <Div>
      <div className="squares">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="grey"></div>
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  height: 300vh;
  position: absolute;
  top: 3rem;

  .squares {
    height: 100%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
  }
  .square {
    animation: squares 12.5s linear infinite;
    align-self: flex-end;
    width: 1em;
    height: 1em;
    transform: translateY(100%);
    background: rgba(235, 235, 235, 0.2);
    &:nth-child(2) {
      height: 1.5em;
      width: 3em;
      animation-delay: 1s;
      animation-duration: 17s;
      -webkit-filter: blur(5px);
    }
    &:nth-child(3) {
      height: 2em;
      width: 1em;
      animation-delay: 1.5s;
      animation-duration: 8s;
      -webkit-filter: blur();
    }
    &:nth-child(4) {
      height: 1em;
      width: 1.5em;
      animation-delay: 0.5s;
      -webkit-filter: blur(3px);
      animation-duration: 13s;
    }
    &:nth-child(5) {
      height: 1.25em;
      width: 2em;
      animation-delay: 4s;
      -webkit-filter: blur(2px);
      animation-duration: 11s;
    }
    &:nth-child(6) {
      height: 2.5em;
      width: 2em;
      animation-delay: 2s;
      -webkit-filter: blur(1px);
      animation-duration: 9s;
    }
    &:nth-child(7) {
      height: 5em;
      width: 2em;
      -webkit-filter: blur(2.5px);
      animation-duration: 12s;
    }
    &:nth-child(8) {
      height: 1em;
      width: 3em;
      animation-delay: 5s;
      -webkit-filter: blur(6px);
      animation-duration: 18s;
    }
    &:nth-child(9) {
      height: 1.5em;
      width: 2em;
      -webkit-filter: blur(0.5px);
      animation-duration: 9s;
    }
    &:nth-child(9) {
      height: 3em;
      width: 2.4em;
      animation-delay: 6s;
      -webkit-filter: blur(0.5px);
      animation-duration: 12s;
    }
  }

  @keyframes squares {
    from {
      transform: translateY(100%) rotate(-50deg);
    }
    to {
      transform: translateY(calc(-300vh + -100%)) rotate(20deg);
    }
  }
`
