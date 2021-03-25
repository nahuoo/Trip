import React from 'react'
import { Wrapper, Animacion } from './styledSpinner'

export const Spinner = () => {
    return(
        <Wrapper>
            <Animacion><p>cargando...</p></Animacion>
        </Wrapper>
    )
}