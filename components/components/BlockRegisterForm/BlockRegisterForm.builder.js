import { Builder } from '@builder.io/react/lite'
import BlockContactForm from './BlockRegisterForm'

Builder.registerComponent(BlockContactForm, {
    name: 'Register Form',
    inputs: [
        {
            name: "darkBackground",
            type: "boolean",
            required: true,
            defaultValue: true,
            friendlyName: "Use dark background color"
        }, {
            name: "formcakeKey",
            type: "text",
            required: true,
            defaultValue: "https://api.formcake.com/api/form/xxx",
            friendlyName: "Formcake form URL"
        }
    ],
});