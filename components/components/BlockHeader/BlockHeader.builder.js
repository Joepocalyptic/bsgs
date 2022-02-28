import { Builder } from '@builder.io/react'
import BlockHeader from './BlockHeader'

Builder.registerComponent(BlockHeader, {
    name: 'Simple Header',
    inputs: [
        {
            name: 'title',
            type: 'string',
            required: true,
            defaultValue: 'Page Header',
            friendlyName: "Page title text"
        }, {
            name: 'image',
            type: 'file',
            allowedFileTypes: ["png", "jpg", "jpeg"],
            required: false,
            friendlyName: "Background image (optional)"
        },
    ],
});