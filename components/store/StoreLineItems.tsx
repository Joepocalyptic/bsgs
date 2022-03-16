import React from "react";
import {Product} from "@chec/commerce.js/types/product"
import {Cart} from "@chec/commerce.js/types/cart";
import StoreLineItem from "@components/store/StoreLineItem";

export type StoreLineItemsProps = {
    cart: Cart,
    setCart: (cart: Cart) => void
    selectProduct: (product: Product) => void
}


export default class StoreLineItems extends React.Component<StoreLineItemsProps> {
    render() {
        return (
            <ul className="rounded-lg flex h-[50vh] flex-col gap-8 overflow-y-scroll">
                {this.props.cart.line_items?.map((lineItem, index) =>
                    <StoreLineItem selectProduct={this.props.selectProduct} key={index} lineItem={lineItem} cart={this.props.cart} setCart={this.props.setCart} />
                )}
            </ul>
        )
    }
}
