import "styles/globals.css"
import React from "react"
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import '@config/builder'
import {recaptchaSiteKey} from "@config/recaptcha";

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";


import 'styles/CalendarStyle.scss';

const App = ({Component, pageProps}) => {
    return <>
        <Head>
            <title>Bay State Girls Softball</title>
        </Head>

        <BSGSHeader />
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>

        <BSGSFooter />
    </>
}

export default App