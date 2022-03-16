import React from "react";
import {calculateColor} from "@lib/utils";
import {Product} from "@chec/commerce.js/types/product";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";

type StoreSeeMoreButtonProps = {
    product: Product
    darkBackground: boolean,
    selectProduct: (product: Product) => void
}



export default class StoreSeeMoreButton extends React.Component<StoreSeeMoreButtonProps> {
    state = {
        disabled: false
    }

    render() {
        return (
            <button
                disabled={this.state.disabled}
                className={
                    "flex items-center gap-2 transition-all w-full justify-center ease-in-out hover:gap-4 relative group disabled:bg-black disabled:text-gray-400 disabled:hover:gap-2 " +
                    "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8 shadow-lg rounded-lg mx-0 self-center"
                    + calculateColor(this.props.darkBackground)
                }
                onClick={() => this.props.selectProduct(this.props.product)}
            >
                See More
                <HiArrowRight className="group-hover:text-yellow group-disabled:group-hover:text-inherit transition ease-in-out"/>
            </button>
        )
    }
}
