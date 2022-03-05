import {Builder} from '@builder.io/react'
import BlockNewsEvents from './BlockNewsEvents'

Builder.registerComponent(BlockNewsEvents, {
    name: 'News & Events',
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