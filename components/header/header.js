import { MitadNegra, MitadImagen, Div } from "./styledHeader";
import {Navbar} from '../navbar/navbar'

export const Header = () => {
  return (
    <Div>
      <MitadNegra>
        <Navbar color='white'/>
        <h1>TRIP</h1>
        <p>Soluciones digitales</p>
      </MitadNegra>
      <MitadImagen>
        <Navbar color='black'/>
        <h1>TRIP</h1>
        <p>We craft brands</p>
      </MitadImagen>
    </Div>
  );
};
