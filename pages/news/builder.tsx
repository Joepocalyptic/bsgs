import Head from 'next/head'
import {builder, BuilderComponent} from "@builder.io/react/lite"
import '@builder.io/widgets'
import React from "react"
import BlockHeader from "@components/components/BlockHeader/BlockHeader";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";

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

export default function NewsPost({post}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={post?.data.description} />
                <meta name="robots" content="noindex"/>

                <title>New Page | Bay State Girls Softball</title>
            </Head>
            <BlockHeader title={post?.data.title} image={post?.data.image} />
            <BuilderComponent model="news-post" content={post}/>
        </>
    )
}
