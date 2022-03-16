import type {InferGetStaticPropsType} from 'next'
import Head from 'next/head'
import '@builder.io/widgets'
import React from "react"
import BlockHeader from "@components/components/BlockHeader/BlockHeader";
import {calculateColor} from "@lib/utils";
import commerce from "@lib/commerce";
import StoreProduct from "@components/StoreProduct";

export async function getStaticProps() {
    const merchant = await commerce.merchants.about();
    const { data: categories } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();

    return {
        props: {
            merchant,
            categories,
            products
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 60 seconds
        revalidate: 60,
    }
}

export default function Store({merchant, categories, products}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="The official store of the Bay State Girls Softball League."/>
                <title>Store | Bay State Girls Softball</title>
            </Head>

            <BlockHeader title={"Store"}/>
            <div className={calculateColor(false)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                    {products.map((product, index) => <StoreProduct product={product} key={index} />)}
                </section>
            </div>
        </>
    )
}
