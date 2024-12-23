import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import WeddingApp from "../App.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/WeddingApp">
                <WeddingApp/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews