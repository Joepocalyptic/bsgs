import { Builder } from '@builder.io/react/lite'
import BlockSlideshow from './BlockSlideshow'

Builder.registerComponent(BlockSlideshow, {
    name: 'Slideshow Header',
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
            friendlyName: "Image",
            defaultValue: [{image: ""}]
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