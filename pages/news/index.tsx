import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {BuilderComponent, Builder, builder, BuilderContent} from '@builder.io/react/lite'
import Head from 'next/head'
import '@builder.io/widgets'
import React from "react"
import {useRouter} from "next/router";
import BlockHeader from "@components/components/BlockHeader/BlockHeader";
import Custom404 from "../404";
import Content, {BorderType} from "@components/Content";
import {calculateColor, formatDateFromConstructorString} from "@lib/utils";
import {Post} from "@components/components/BlockNewsEvents/BlockNewsEvents";
import LinkButton from "@components/LinkButton";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";
import {Link} from "@components/Link/Link";
import {DateTime} from "luxon";

export async function getStaticProps() {
    const posts = (await builder.getAll('news-post', {
        options: {noTargeting: true},
        omit: 'data.components',
    }))

    return {
        props: {
            posts,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5,
    }
}

export default function NewsIndex({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="All news posts"/>

                <title>All News | Bay State Girls Softball</title>
            </Head>

            <BlockHeader title={"All News Posts"}/>
            <div className={calculateColor(false)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    {posts.map(post => post.data as Post).map((post, index) =>
                        <section
                            key={index}
                            data-aos="aos"
                            className={"flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                                + calculateColor(true)
                            }>
                            <div className="flex flex-1 flex-col gap-4">
                                <h3 className="font-heading uppercase text-center text-3xl lg:text-left">{post.title}</h3>
                                {post.image && <img srcSet={`
                                     ${post.image}?width=1920 1920w,
                                     ${post.image}?width=720 720w,
                                     ${post.image}?width=500 500w,
                                     ${post.image}?width=300 300w,
                                     ${post.image}?width=100 100w
                                 `} alt="" className="block rounded-lg shadow-lg self-center w-full max-w-[20rem] block lg:hidden"/>}
                                <div className={"leading-8 break-words flex flex-col gap-4"}>
                                    <p className="uppercase text-sm">{formatDateFromConstructorString(post.date)}</p>
                                    <p>{post.blurb}</p>
                                    <Link href={post.url ?? ""}
                                          className={
                                              "mx-auto self-start flex gap-2 transition-all ease-in-out hover:gap-4 relative group " +
                                              "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8 shadow-lg rounded-lg lg:mx-0"
                                              + calculateColor(false)
                                          }
                                    >
                                        See More
                                        <HiArrowRight className="group-hover:text-yellow transition ease-in-out"/>
                                    </Link>
                                </div>

                                <div
                                    className="absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "/>
                                <div
                                    className="absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "/>
                            </div>

                            {post.image && <img src={post.image + "?width=320"} alt=""
                                                className="hidden lg:block rounded-lg shadow-lg self-center max-w-[20rem] max-h-[20rem]"/>}
                        </section>
                    )}
                </section>
            </div>
        </>
    )
}
