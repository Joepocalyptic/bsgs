import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {BuilderComponent, Builder, builder} from '@builder.io/react'
import DefaultErrorPage from 'next/error'
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

export async function getStaticPaths() {
    const pages = await builder.getAll('page', {
        options: {noTargeting: true},
        omit: 'data.components',
    })

    return {
        paths: pages.map((page) => `${page.data?.url}`),
        fallback: true
    }
}

export default function Page({page}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const isLive = !Builder.isEditing && !Builder.isPreviewing
    if (!router.isFallback && !page && isLive) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex" />
                    <title>404 | Bay State Girls Softball</title>
                </Head>
                <Custom404 />
            </>
        )
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={page?.data.description} />

                <title>{page?.data.title} | Bay State Girls Softball</title>
            </Head>
            <BuilderComponent model="page" content={page}/>
        </>
    )
}
