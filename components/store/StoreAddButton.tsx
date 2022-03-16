import React from "react";
import {calculateColor} from "@lib/utils";
import {Cart} from "@chec/commerce.js/types/cart";
import commerce from "@lib/commerce";
import {toast} from "react-hot-toast";
import {HiPlusCircle} from "@react-icons/all-files/hi/HiPlusCircle";

type StoreAddButtonProps = {
    productID: string | undefined,
    darkBackground: boolean,
    center: boolean,
    cart: Cart
    setCart: (cart: Cart) => void
}

type StoreAddButtonState = {
    disabled: boolean
}


export default class StoreAddButton extends React.Component<StoreAddButtonProps, StoreAddButtonState> {
    state = {
        disabled: false
    }

    handleAddToCart = async () => {
        this.setState({disabled: true})
        await toast.promise(
            commerce.cart.add(this.props.productID!!),
            {
                loading: "Adding to cart...",
                success: (data) => {
                    this.props.setCart(data.cart)
                    return `Added ${data.product_name} to cart!`
                },
                error: "Error adding item to cart!"
            },
            {
                style: {
                    color: "white",
                    background: "black",
                    borderRadius: ".5rem"
                }
            }
        )
        this.setState({disabled: false})
    }

    render() {
        return (
            <button
                disabled={this.state.disabled}
                className={
                    "flex items-center gap-2 transition-all justify-center ease-in-out hover:gap-4 relative group disabled:bg-black disabled:text-gray-400 disabled:hover:gap-2 " +
                    "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8 shadow-lg rounded-lg mx-0"
                    + calculateColor(this.props.darkBackground)
                    + (this.props.center ? "self-center w-full" : "self-start")
                }
                onClick={this.handleAddToCart}
            >
                Add to Cart
                <HiPlusCircle className="group-hover:text-yellow group-disabled:group-hover:text-inherit transition ease-in-out"/>
            </button>
        )
    }
}
