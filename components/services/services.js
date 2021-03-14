import { Container, Div } from "./styledServices"
import {useSpring} from 'react-spring'

export const Services = () => {
    const fadeIn = useSpring({
        opacity:1,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' }
    })
    return(
        <Div style={fadeIn}>
            
            <p>Servicios ofrecidos</p>
            <Container>
            <ul> Estrategias Integrales
                <li>
                    Investigación y anláisis
                </li>
                <li>
                    Estrategia de posicionamiento
                </li>
                <li>
                    Datos demográficos
                </li>
                <li>
                    Campañas de marketing digital y social
                </li>
            </ul>
            </Container>
            <Container>
            <ul>
                Marca
                <li>
                    Identidad
                </li>
                <li>
                    posicionamiento
                </li>
                <li>
                    Dirección artística
                </li>
                <li>
                    Asesoramiento e imágen
                </li>
            </ul>
            </Container>
            <Container>
            <ul>
                Tecnólogia
                <li>
                    Desarrollo de Aplicaciones Web
                </li>
                <li>
                    Aplicaciones móviles
                </li>
                <li>
                    Aplicaciones de escritorio
                </li>
            </ul>
            </Container>
        </Div>
    )
}