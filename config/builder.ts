import {Builder, builder} from "@builder.io/react/lite"

if (!process.env.BUILDER_PUBLIC_KEY) {
    throw new Error('Missing env variable BUILDER_PUBLIC_KEY')
}

builder.init(process.env.BUILDER_PUBLIC_KEY)

Builder.set({customInsertMenu: true})

// Headers
import "@components/components/BlockHeader/BlockHeader.builder"
import "@components/components/BlockSlideshow/BlockSlideshow.builder"

// Content
import "@components/components/BlockContent/BlockContent.builder"
import "@components/components/BlockSplitContent/BlockSplitContent.builder"
import "@components/components/BlockTripleContent/BlockTripleContent.builder"
import "@components/components/BlockCollapsibleContent/BlockCollapsibleContent.builder"

// Special
import "@components/components/BlockNewsEvents/BlockNewsEvents.builder"
import "@components/components/BlockSocialMedia/BlockSocialMedia.builder"
import "@components/components/BlockCalendar/BlockCalendar.builder"
import "@components/components/BlockContactForm/BlockContactForm.builder"
import "@components/components/BlockSponsorsSlideshow/BlockSponsorsSlideshow.builder"

Builder.register('insertMenu', {
    name: "Headers",
    items: [
        {name: "Simple Header"},
        {name: "Slideshow Header"},
    ]
})

Builder.register('insertMenu', {
    name: "Content",
    items: [
        {name: "Content"},
        {name: "Split Content"},
        {name: "Triple Content"},
        {name: "Collapsible Content"}
    ]
})

Builder.register('insertMenu', {
    name: "Special",
    items: [
        {name: "News & Events"},
        {name: "Social Media"},
        {name: "Events Calendar"},
        {name: "Contact Form"},
        {name: "Sponsors Slideshow"},
    ]
})