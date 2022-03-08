import { Builder } from '@builder.io/react/lite'
import BlockCalendar from './BlockCalendar'

Builder.registerComponent(BlockCalendar, {
    name: 'Events Calendar',
    inputs: [
        {
            name: 'height',
            type: 'number',
            required: true,
            defaultValue: '800',
            friendlyName: "Height (in pixels) of the calendar"
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