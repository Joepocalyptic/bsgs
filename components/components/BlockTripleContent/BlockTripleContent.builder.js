import {Builder} from '@builder.io/react'
import BlockTripleContent from './BlockTripleContent'

Builder.registerComponent(BlockTripleContent, {
    name: 'Triple Content',
    inputs: [
        {
            name: 'heading',
            type: 'string',
            required: false,
            defaultValue: 'Content Heading',
            friendlyName: "Heading text"
        }, {
            name: 'blocks',
            type: 'list',
            required: true,
            subFields: [{
                name: "block1",
                type: "object",
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
                }, {
                    name: "image",
                    type: "file",
                    required: false,
                    allowedFileTypes: ["jpeg", "jpg", "png"],
                    friendlyName: "Image",
                }, {
                    name: "centerText",
                    type: "boolean",
                    required: true,
                    friendlyName: "Center text",
                    defaultValue: false
                }],
                required: true,
                friendlyName: "Block One"
            }, {
                name: "block2",
                type: "object",
                subFields: [{
                    name: "heading",
                    type: "text",
                    required: false,
                    defaultValue: "Paragraph 2",
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
                }, {
                    name: "centerText",
                    type: "boolean",
                    required: true,
                    friendlyName: "Center text",
                    defaultValue: false
                }],
                required: true,
                friendlyName: "Block Two"
            }, {
                name: "block3",
                type: "object",
                subFields: [{
                    name: "heading",
                    type: "text",
                    required: false,
                    defaultValue: "Paragraph 3",
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
                }, {
                    name: "image",
                    type: "file",
                    required: false,
                    allowedFileTypes: ["jpeg", "jpg", "png"],
                    friendlyName: "Image",
                }, {
                    name: "centerText",
                    type: "boolean",
                    required: true,
                    friendlyName: "Center text",
                    defaultValue: false
                }],
                required: true,
                friendlyName: "Block Three"
            }],
            friendlyName: "Content Blocks",
            defaultValue: [{
                block1: {
                    heading: "Paragraph 1",
                    content: "<p>Paragraphs here</p><p>Hello, world!</p>",
                    centerText: false
                },
                block2: {
                    heading: "Paragraph 2",
                    content: "<p>Paragraphs here</p><p>Hello, world!</p>",
                    centerText: false
                },
                block3: {
                    heading: "Paragraph 3",
                    content: "<p>Paragraphs here</p><p>Hello, world!</p>",
                    centerText: false
                }
            }]
        }, {
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
        }, {
            name: "darkBackground",
            type: "boolean",
            required: true,
            defaultValue: true,
            friendlyName: "Use dark background color"
        }
    ],
});