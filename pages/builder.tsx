import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {BuilderComponent, Builder, builder} from '@builder.io/react/lite'
import Head from 'next/head'
import '@builder.io/widgets'
import React from "react"
import {useRouter} from "next/router";
import Custom404 from "./404";

export async function getStaticProps({params}: GetStaticPropsContext<{ page: string[] }>) {
    const page =
        (await builder
            .get('page', {
                userAttributes: {
                    urlPath: '/' + (params?.page?.join('/') || ''),
                },
            })
            .toPromise()) || null

    return {
        props: {
            page,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5,
    }
}

export default function Page({page}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={page?.data.description} />
                <meta name="robots" content="noindex" />

                <title>{page?.data.title} | Bay State Girls Softball</title>
            </Head>
            <BuilderComponent model="page" content={page}/>
        </>
    )
}
