import {Builder, builder} from "@builder.io/react";

if (!process.env.BUILDER_PUBLIC_KEY) {
  throw new Error('Missing env variable BUILDER_PUBLIC_KEY')
}

builder.init(process.env.BUILDER_PUBLIC_KEY)

Builder.set({customInsertMenu: true})

Builder.register('insertMenu', {
  name: "Headers",
  items: [
    { name: "Simple Header" },
    { name: "Slideshow Header" },
  ]
})

Builder.register('insertMenu', {
  name: "Content",
  items: [
    { name: "Content" },
    { name: "Split Content" }
  ]
})

Builder.register('insertMenu', {
  name: "Special",
  items: [
    { name: "News & Events" }
  ]
})