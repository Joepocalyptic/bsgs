import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/oiv3zcy.css"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body className="bg-blue-dark">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
