import React from 'react'
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"
import WeddingApp from '../App'

export const PaletteTree = () => (
    <Palette>
        <Category name="Wedding App">
            <Component name="Main App">
                <Variant>
                    <WeddingApp/>
                </Variant>
            </Component>
        </Category>
    </Palette>
)