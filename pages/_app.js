import "styles/globals.css"
import React, {useEffect} from "react"
import {Builder} from "@builder.io/react/lite"
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3"
import "aos/dist/aos.css"
import AOS from "aos"

import '@config/builder'
import {recaptchaSiteKey} from "@config/recaptcha";

import BSGSHeader from "@components/BSGSHeader";
import BSGSFooter from "@components/BSGSFooter";


import 'styles/CalendarStyle.scss';
import Head from "next/head";
import {useRouter} from "next/router";

const App = ({Component, pageProps}) => {
    const router = useRouter()

    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: "ease-in-out",
            delay: 0,
            once: true,
            disable: function () {
                return window.innerWidth < 1024 || Builder.isPreviewing || Builder.isEditing || router.isFallback;
            }
        })
    })

    return <>
        <Head>
            <title>Bay State Girls Softball</title>
        </Head>
        <BSGSHeader />
        <GoogleReCaptchaProvider
            reCaptchaKey={recaptchaSiteKey}
            scriptProps={{
                async: true,
                defer: true
            }}>
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
        <BSGSFooter />
    </>
}

export default App