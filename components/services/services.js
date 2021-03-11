import { Div } from "./styledServices"
import {useSpring} from 'react-spring'

export const Services = () => {
    const fadeIn = useSpring({
        opacity:1,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' }
    })
    return(
        <Div style={fadeIn}>
            <p>p</p>
            <p>i</p>
            <p>t</p>
            <p>o</p>
        </Div>
    )
}