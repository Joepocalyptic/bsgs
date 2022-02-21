import "styles/globals.css"
import React from "react"
import Head from "next/head";

import {Builder, builder} from '@builder.io/react'
import builderConfig from '@config/builder'

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";

import "@components/components/BlockSlideshow/BlockSlideshow.builder"
import "@components/components/BlockContent/BlockContent.builder"


builder.init(builderConfig.apiKey)

Builder.set({customInsertMenu: true})

Builder.register('insertMenu', {
    name: "Blocks",
    items: [
        { name: "Slideshow" },
        { name: "Content" }
    ]
})

const MyApp = ({Component, pageProps}) => {
    return <>
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/oiv3zcy.css" />
            <title>Bay State Girls Softball</title>
        </Head>

        <BSGSHeader navigation={builder.get('navigation').promise().then(({ data }) => data)}/>
        <Component {...pageProps} />
        <BSGSFooter />
    </>
}
export default MyApp