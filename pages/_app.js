import "styles/globals.css"
import React from "react"
import Head from "next/head";

import '@config/builder'

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";

import "@components/components/BlockContent/BlockContent.builder"
import "@components/components/BlockSplitContent/BlockSplitContent.builder"

import "@components/components/BlockHeader/BlockHeader.builder"
import "@components/components/BlockSlideshow/BlockSlideshow.builder"

import "@components/components/BlockTwitterEvents/BlockTwitterNews.builder"

const MyApp = ({Component, pageProps}) => {
    return <>
        <Head>
            <title>Bay State Girls Softball</title>
        </Head>

        <BSGSHeader />
        <Component {...pageProps} />
        <BSGSFooter />
    </>
}

export default MyApp