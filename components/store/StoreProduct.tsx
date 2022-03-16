import React from "react";
import {calculateColor} from "@lib/utils";
import {Product} from "@chec/commerce.js/types/product"
import Image from "next/image"
import StoreAddButton from "@components/store/StoreAddButton";
import {Cart} from "@chec/commerce.js/types/cart";
import StoreSeeMoreButton from "@components/store/StoreSeeMoreButton";

export type StoreProductProps = {
    product: Product,
    selectProduct: (product: Product) => void,
    cart: Cart,
    setCart: (cart: Cart) => void
}


export default class StoreProduct extends React.Component<StoreProductProps> {
    render() {
        return (
            <section data-aos="fade" className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                + calculateColor(true)
            }>
                <div className="flex flex-1 flex-col gap-4">
                    <h3 className="font-heading uppercase text-center text-3xl">{this.props.product.name}</h3>
                    {this.props.product.image && (
                        <button onClick={() => this.props.selectProduct(this.props.product)}>
                            <Image
                                src={this.props.product.image?.url}
                                alt={this.props.product.name}
                                height={this.props.product.image.image_dimensions.height}
                                width={this.props.product.image.image_dimensions.width}
                                layout="responsive"
                                className="rounded-lg shadow-lg h-24 self-center"
                                sizes="(min-width: 0px) 100vw, (min-width: 1024px) 33vw, (min-width: 1600px) 25vw"/>
                        </button>
                    )}
                    <div className="cms-content leading-8 break-words flex flex-col gap-4 text-center">
                    </div>

                    <StoreAddButton productID={this.props.product?.id} darkBackground={false} center={true}
                                    cart={this.props.cart} setCart={this.props.setCart}/>
                    <StoreSeeMoreButton product={this.props.product} darkBackground={false} selectProduct={this.props.selectProduct} />

                    <div
                        className="absolute left-0 top-0 bg-yellow w-0.5 lg:w-[1px] h-full "/>
                    <div
                        className="absolute right-0 top-0 bg-yellow w-0.5 lg:w-[1px] h-full "/>
                </div>
            </section>
        )
    }
}
