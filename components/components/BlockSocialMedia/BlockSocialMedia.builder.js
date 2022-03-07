import {Builder} from '@builder.io/react/lite'
import BlockSocialMedia from './BlockSocialMedia'

Builder.registerComponent(BlockSocialMedia, {
    name: 'Social media',
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
        },
        {
            name: "facebook",
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
            friendlyName: "Facebook Settings"
        }
    ],
});