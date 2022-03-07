import "styles/globals.css"
import React from "react"
import Head from "next/head";
import {AnimatePresence} from 'framer-motion'

import '@config/builder'

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";

import 'styles/CalendarStyle.scss';

const App = ({Component, pageProps}) => {
    return <>
        <Head>
            <title>Bay State Girls Softball</title>
        </Head>

        <BSGSHeader />
        <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <Component {...pageProps} />
        </AnimatePresence>
        <BSGSFooter />
    </>
}

export default App