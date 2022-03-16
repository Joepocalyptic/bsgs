import React from "react";
import {calculateColor} from "@lib/utils";
import {Link} from "@components/Link/Link";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";

type StoreCheckoutButtonProps = {
    url: string
}


export default class StoreCheckoutButton extends React.Component<StoreCheckoutButtonProps> {
    state = {
        disabled: false
    }

    render() {
        return (
            <Link href={this.props.url}
                className={
                    "flex gap-2 transition-all justify-center ease-in-out hover:gap-4 relative group " +
                    "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8 shadow-lg rounded-lg"
                    + calculateColor(false)
                }
            >
                Checkout
                <HiArrowRight className="group-hover:text-yellow transition ease-in-out"/>
            </Link>
        )
    }
}
