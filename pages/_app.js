import "styles/globals.css"
import React, {useEffect} from "react"
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import "aos/dist/aos.css"
import AOS from "aos"

import '@config/builder'
import {recaptchaSiteKey} from "@config/recaptcha";

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";


import 'styles/CalendarStyle.scss';

const App = ({Component, pageProps}) => {
    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: "ease-in-out",
            delay: 0,
            once: true
        })
    })

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