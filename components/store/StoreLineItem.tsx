import React from "react";
import {calculateColor} from "@lib/utils";
import {Product} from "@chec/commerce.js/types/product"
import {Cart} from "@chec/commerce.js/types/cart";
import {LineItem} from "@chec/commerce.js/types/line-item";
import commerce from "@lib/commerce";
import {HiMinusCircle} from "@react-icons/all-files/hi/HiMinusCircle";
import {HiPlusCircle} from "@react-icons/all-files/hi/HiPlusCircle";
import {HiTrash} from "@react-icons/all-files/hi/HiTrash";

export type StoreLineItemProps = {
    lineItem: LineItem
    cart: Cart,
    setCart: (cart: Cart) => void
    selectProduct: (product: Product) => void,
}

export type StoreLineItemState = {
    disabled: boolean
}


export default class StoreLineItem extends React.Component<StoreLineItemProps, StoreLineItemState> {
    state = {
        disabled: false
    }

    decrementItem = async() => {
        this.setState({disabled: true})
        await commerce.cart.update(this.props.lineItem.id, {quantity: this.props.lineItem.quantity - 1})
        this.setState({disabled: false})
    }

    incrementItem = async() => {
        this.setState({disabled: true})
        await commerce.cart.update(this.props.lineItem.id, {quantity: this.props.lineItem.quantity + 1})
        this.setState({disabled: false})
    }

    removeItem = async() => {
        this.setState({disabled: true})
        await commerce.cart.remove(this.props.lineItem.id)
        this.setState({disabled: false})
    }

    render() {
        return (
            <li>
                <div className={"items-center overflow-hidden flex rounded-lg shadow-lg ease-in-out" + calculateColor(true)}>
                    {this.props.lineItem.image && <button className="w-1/3" onClick={async () => {
                        let product = await commerce.products.retrieve(this.props.lineItem.product_id)
                        this.props.selectProduct(product)
                    }}>
                        <img className="w-full h-full object-cover max-h-[8rem]" src={this.props.lineItem.image.url} alt=""/>
                    </button>}
                    <div className="flex-1 p-4 flex flex-col gap-2">
                        <h4 className="font-heading uppercase text-xl">{this.props.lineItem.name}</h4>
                        <div className="flex items-center gap-4">
                            <span className="font-heading uppercase text-xl -mb-[3px]">{this.props.lineItem.price.formatted_with_symbol}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    disabled={this.state.disabled}
                                    onClick={this.decrementItem}
                                    className="transition text-lg ease-in-out hover:text-yellow disabled:text-gray-400 disabled:hover:text-gray-400">
                                    <HiMinusCircle/>
                                </button>
                                <span>{this.props.lineItem.quantity}</span>
                                <button
                                    disabled={this.state.disabled}
                                    onClick={this.incrementItem}
                                    className="transition text-lg ease-in-out hover:text-yellow disabled:text-gray-400 disabled:hover:text-gray-400">
                                    <HiPlusCircle/>
                                </button>
                                <button
                                    disabled={this.state.disabled}
                                    onClick={this.removeItem}
                                    className="transition text-lg ease-in-out hover:text-yellow disabled:text-gray-400 disabled:hover:text-gray-400">
                                    <HiTrash/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
