import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {BuilderComponent, Builder, builder} from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import '@builder.io/widgets'
import React from "react"

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
        revalidate: 30,
    }
}

export async function getStaticPaths() {
    const pages = await builder.getAll('page', {
        options: {noTargeting: true},
        omit: 'data.blocks',
    })

    return {
        paths: pages.map((page) => `${page.data?.url}`),
        fallback: true
    }
}

export default function Page({page}: InferGetStaticPropsType<typeof getStaticProps>) {
    const isLive = !Builder.isEditing && !Builder.isPreviewing
    if (!page && isLive) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex"/>
                    <title>404 | Bay State Girls Softball</title>
                </Head>
                <DefaultErrorPage statusCode={404}/>
            </>
        )
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{page.data.title} | Bay State Girls Softball</title>
            </Head>
            <BuilderComponent model="page" content={page}/>
        </>
    )
}
