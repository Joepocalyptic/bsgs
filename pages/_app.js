import "styles/globals.css"
import React from "react"
import Head from "next/head";

import {Builder, builder} from '@builder.io/react'
import builderConfig from '@config/builder'

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";

import "@components/components/BlockContent/BlockContent.builder"
import "@components/components/BlockSplitContent/BlockSplitContent.builder"

import "@components/components/BlockHeader/BlockHeader.builder"
import "@components/components/BlockSlideshow/BlockSlideshow.builder"

import "@components/components/BlockTwitterEvents/BlockTwitterNews.builder"

builder.init(builderConfig.apiKey)

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
        { name: "Twitter & News" }
    ]
})

const MyApp = ({Component, pageProps}) => {
    return <>
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/oiv3zcy.css" />
            <link rel="icon" href="/favicon.ico"/>
            <title>Bay State Girls Softball</title>
        </Head>

        <BSGSHeader navigation={builder.get('navigation').promise().then(({ data }) => data)}/>
        <Component {...pageProps} />
        <BSGSFooter />
    </>
}

export default MyApp