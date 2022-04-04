import type {InferGetStaticPropsType} from 'next'
import Head from 'next/head'
import '@builder.io/widgets'
import React, {useEffect, useState} from "react"
import BlockHeader from "@components/components/BlockHeader/BlockHeader"
import {calculateColor} from "@lib/utils"
import commerce from "@lib/commerce"
import StoreProduct from "@components/store/StoreProduct"
import {Product} from "@chec/commerce.js/types/product"
import StoreItemModal from "@components/store/StoreItemModal";
import {Cart} from "@chec/commerce.js/types/cart";
import StoreCartModal from "@components/store/StoreCartModal";
import {HiShoppingCart} from "@react-icons/all-files/hi/HiShoppingCart";

export async function getStaticProps() {
    const merchant = await commerce.merchants.about();
    const {data: products} = await commerce.products.list();

    return {
        props: {
            merchant,
            products
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 60 seconds
        revalidate: 2,
    }
}

export default function Store({merchant, products}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined)
    const [itemModalIsOpen, setItemModalIsOpen] = React.useState(false)
    const [cartModalIsOpen, setCartModalIsOpen] = React.useState(false)

    const [cart, setCart] = React.useState<Cart>({} as Cart)

    async function initCart() {
        setCart(await commerce.cart.retrieve())
    }

    useEffect(() => {
        initCart()
    })

    function changeCurrentProduct(product: Product) {
        setCurrentProduct(product)
        openItemModal()
    }

    function openItemModal() {
        setItemModalIsOpen(true)
    }

    function closeItemModal() {
        setItemModalIsOpen(false)
    }

    function openCartModal() {
        setCartModalIsOpen(true)
    }

    function closeCartModal() {
        setCartModalIsOpen(false)
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="The official store of the Bay State Girls Softball League."/>
                <title>Store | Bay State Girls Softball</title>
            </Head>

            <BlockHeader title={"Store"}/>
            <div className={calculateColor(false)}>
                <section
                    className={"container mx-auto px-4 py-8 flex flex-col gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                    {products.map((product, index) =>
                        <StoreProduct selectProduct={changeCurrentProduct}
                                      product={product}
                                      key={index}
                                      cart={cart}
                                      setCart={setCart}/>)}
                </section>
            </div>
            <StoreCartModal
                selectProduct={changeCurrentProduct}
                closeModal={closeCartModal}
                modalIsOpen={cartModalIsOpen}
                cart={cart}
                setCart={setCart}
            />
            <StoreItemModal
                closeModal={closeItemModal}
                modalIsOpen={itemModalIsOpen}
                currentProduct={currentProduct}
                cart={cart}
                setCart={setCart}
            />
            <button
                onClick={openCartModal}
                className={"border-yellow border-2 text-4xl rounded-full bg-blue-light p-4 text-white fixed right-8 bottom-8 " + (cartModalIsOpen ? "hidden" : "")}>
                <HiShoppingCart />
            </button>
        </>
    )
}
