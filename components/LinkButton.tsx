import React from "react";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";

type ContentProps = {
    darkBackground: boolean,
    text: any,
    url: string

}

export default class LinkButton extends React.Component<ContentProps> {
    static defaultProps = {
        darkBackground: false,
        text: "",
        url: ""
    }

    render() {
        return (
            <a href={this.props.url ?? ""}
               className={
                   "shadow-xl self-start mx-auto lg:mx-0 flex gap-2 transition-all ease-in-out hover:gap-4 relative " +
                   "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-4 "
                   + (this.props.darkBackground ? "bg-blue-normal " : "bg-blue-dark")
               }
            >
                {this.props.text}
                <HiArrowRight/>
            </a>
        )
    }
}
