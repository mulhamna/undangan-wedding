import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import WeddingApp from '../App'

export const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/WeddingApp">
                <WeddingApp/>
            </ComponentPreview>
        </Previews>
    )
}

export const useInitial = () => {
    return {
        components: {}
    }
}