import { Builder } from '@builder.io/react'
import BlockContent from './BlockContent'

Builder.registerComponent(BlockContent, {
    name: 'Content',
    inputs: [
        {
            name: 'heading',
            type: 'string',
            required: false,
            defaultValue: 'Content Heading',
            friendlyName: "Heading text"
        },
        {
            name: 'blocks',
            type: 'list',
            required: true,
            subFields: [{
                name: "heading",
                type: "text",
                required: false,
                defaultValue: "Paragraph 1",
                friendlyName: "Header"
            }, {
                name: "content",
                type: "richText",
                required: true,
                defaultValue: "<p>Paragraphs here</p><p>Hello, world!</p>",
                friendlyName: "Content"
            }, {
                name: "image",
                type: "file",
                required: false,
                allowedFileTypes: ["jpeg", "jpg", "png"],
                friendlyName: "Image",
            }],
            friendlyName: "Content blocks"
        },
        {
            name: "button",
            type: "object",
            required: true,
            subFields: [{
                name: "text",
                type: "text",
                defaultValue: "See More",
                required: false,
                friendlyName: "Display text (leave blank to disable button)"
            }, {
                name: "url",
                type: "url",
                defaultValue: "/home",
                required: false,
                friendlyName: "URL/link"
            }],
            friendlyName: "Button",
            defaultValue: 5
        },
        {
            name: "darkBackground",
            type: "boolean",
            required: true,
            defaultValue: true,
            friendlyName: "Use dark background color"
        }
    ],
});