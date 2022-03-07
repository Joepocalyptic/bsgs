import "styles/globals.css"
import React from "react"
import Head from "next/head";

import '@config/builder'

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";

import 'styles/CalendarStyle.scss';

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