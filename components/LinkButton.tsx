import React from "react";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";
import {calculateColor} from "@lib/utils";

type ContentProps = {
    darkBackground: boolean,
    text: any,
    url: string,
    nested: boolean
}

export default class LinkButton extends React.Component<ContentProps> {
    static defaultProps = {
        darkBackground: false,
        text: "",
        url: "",
        nested: false
    }

    render() {
        return (
            <a href={this.props.url ?? ""}
               className={
                   "mx-auto self-start flex gap-2 transition-all ease-in-out hover:gap-4 relative " +
                   "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8"
                   + calculateColor(this.props.darkBackground, true)
                   + (this.props.nested ? "shadow-lg rounded-lg" : "shadow-xl rounded-2xl lg:mx-0")
               }
            >
                {this.props.text}
                <HiArrowRight/>
            </a>
        )
    }
}
