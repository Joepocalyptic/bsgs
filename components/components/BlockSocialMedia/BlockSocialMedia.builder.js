import {Builder} from '@builder.io/react/lite'
import BlockSocialMedia from './BlockSocialMedia'

Builder.registerComponent(BlockSocialMedia, {
    name: 'Social Media',
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
                name: "url",
                type: "text",
                required: true,
                defaultValue: "https://facebook.com/facebook",
                friendlyName: "Facebook page URL"
            }],
            defaultValue: {
                url: "https://facebook.com/facebook"
            },
            friendlyName: "Facebook Settings"
        }
    ],
});