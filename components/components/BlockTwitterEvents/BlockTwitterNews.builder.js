import {Builder} from '@builder.io/react'
import BlockTwitterNews from './BlockTwitterNews'

Builder.registerComponent(BlockTwitterNews, {
    name: 'Twitter & News',
    inputs: [
        {
            name: "darkBackground",
            type: "boolean",
            required: true,
            defaultValue: true,
            friendlyName: "Use dark background color"
        },
        {
            name: "twitter",
            type: "object",
            required: true,
            subFields: [{
                name: "screenName",
                type: "text",
                required: true,
                defaultValue: "google",
                friendlyName: "Screen Name"
            }],
            defaultValue: {
                screenName: "google"
            },
            friendlyName: "Twitter Settings"
        }
    ],
});