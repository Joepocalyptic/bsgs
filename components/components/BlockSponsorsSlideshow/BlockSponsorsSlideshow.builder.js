import {Builder} from '@builder.io/react/lite'
import BlockSponsorsSlideshow from './BlockSponsorsSlideshow'

Builder.registerComponent(BlockSponsorsSlideshow, {
    name: 'Sponsors Slideshow',
    inputs: [
        {
            name: "darkBackground",
            type: "boolean",
            required: true,
            defaultValue: true,
            friendlyName: "Use dark background color"
        }
    ],
});