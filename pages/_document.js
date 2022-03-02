import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/oiv3zcy.css"/>
                <link rel="icon" href="/favicon.ico"/>
                <title>Bay State Girls Softball</title>
            </Head>
            <body className="bg-blue-dark">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
