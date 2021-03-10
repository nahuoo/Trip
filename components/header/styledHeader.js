import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const MitadNegra = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
`;

export const MitadImagen = styled.span`
  @keyframes cambio {
    0% {
      clip-path: polygon(100% 0, 100% 100%, 100% 100%, 100% 50%, 100% 0);
    }
    12% {
      clip-path: polygon(100% 0, 100% 100%, 50% 100%, 75% 50%, 51% 0);
    }
    24% {
      clip-path: polygon(100% 0, 100% 100%, 50% 100%, 25% 50%, 51% 0);
    }
    36% {
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 52%, 0 0);
    }

    48% {
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 52%, 0 0);
    }
    60% {
      clip-path: polygon(100% 0, 100% 100%, 50% 100%, 25% 50%, 51% 0);
    }
    72% {
      clip-path: polygon(100% 0, 100% 100%, 50% 100%, 75% 50%, 51% 0);
    }
    100% {
      clip-path: polygon(100% 0, 100% 100%, 100% 100%, 100% 50%, 100% 0);
    }
  }
  display: flex;
  font-size: 5em;
  color: black;
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  animation: cambio 8s ease infinite;
  justify-content: center;
  align-items: center;
`;
