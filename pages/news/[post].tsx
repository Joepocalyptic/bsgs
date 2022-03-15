import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {Builder, builder, BuilderComponent} from '@builder.io/react/lite'
import Head from 'next/head'
import '@builder.io/widgets'
import React from "react"
import {useRouter} from "next/router";
import BlockHeader from "@components/components/BlockHeader/BlockHeader";
import Custom404 from "../404";

export async function getStaticProps({params}: GetStaticPropsContext<{ post: string[] }>) {
    const post =
        (await builder
            .get('news-post', {
                userAttributes: {
                    urlPath: '/news/' + (params?.post),
                },
            })
            .toPromise()) || null

    return {
        props: {
            post,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5,
    }
}

export async function getStaticPaths() {
    const posts = await builder.getAll('news-post', {
        options: {noTargeting: true},
        omit: 'data.components',
    })

    return {
        paths: posts.map((post) => `${post.data?.url}`),
        fallback: true
    }
}

export default function NewsPost({post}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const isLive = !Builder.isEditing && !Builder.isPreviewing
    if (!router.isFallback && !post && isLive) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex"/>
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
                <meta name="description" content={post?.data.description} />

                <title>{post?.data.title} | Bay State Girls Softball</title>
            </Head>
            <BlockHeader title={post?.data.title} image={post?.data.image} />
            <BuilderComponent model="news-post" content={post}/>
        </>
    )
}
