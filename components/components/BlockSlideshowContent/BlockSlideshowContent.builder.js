import {Builder} from '@builder.io/react/lite'
import BlockSlideshowContent from './BlockSlideshowContent'

Builder.registerComponent(BlockSlideshowContent, {
    name: 'Slideshow Content',
    inputs: [
        {
            name: "heading",
            type: "text",
            required: false,
            friendlyName: "Content Heading"
        },
        {
            name: "darkBackground",
            type: "boolean",
            required: true,
            defaultValue: true,
            friendlyName: "Use dark background color"
        },
        {
            name: "blocks",
            type: "list",
            required: true,
            subFields: [{
                name: "title",
                type: "text",
                required: true,
                defaultValue: "New Slide",
                friendlyName: "Title"
            }, {
                name: "image",
                type: "file",
                allowedFileTypes: ["jpg", "jpeg", "png"],
                required: false,
                friendlyName: "Image"
            }, {
                name: "blurb",
                type: "html",
                required: true,
                defaultValue: "<p>Paragraph 1</p><p>Paragraph 2</p>",
                friendlyName: "Blurb"
            }],
            defaultValue: [{
                title: "New Slide",
                blurb: "<p>Paragraph 1</p><p>Paragraph 2</p>"
            }, {
                title: "New Slide",
                blurb: "<p>Paragraph 1</p><p>Paragraph 2</p>"
            }, {
                title: "New Slide",
                blurb: "<p>Paragraph 1</p><p>Paragraph 2</p>"
            }],
            friendlyName: "Slideshow blocks"
        }
    ],
});