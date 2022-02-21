import { Builder } from '@builder.io/react'
import BlockSlideshow from './BlockSlideshow'

Builder.registerComponent(BlockSlideshow, {
    name: 'Slideshow',
    inputs: [
        {
            name: 'title',
            type: 'string',
            required: true,
            defaultValue: 'Bay State Girls Softball',
            friendlyName: "Title text"
        },
        {
            name: 'images',
            type: 'list',
            subFields: [{
                name: "image",
                type: "file",
                allowedFileTypes: ['png', 'jpeg', 'jpg']
            }],
            required: true,
            friendlyName: "Image"
        },
        {
            name: "imageDuration",
            type: "number",
            required: true,
            friendlyName: "Image duration (seconds)",
            defaultValue: 5
        }
    ],
});