import React from "react";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";
import {calculateColor} from "@lib/utils";
import {Link} from "@components/Link/Link";

type LinkButtonProps = {
    darkBackground: boolean
    text: any
    url: string
    newTab: boolean
    nested: boolean
    aos: string
}

export default class LinkButton extends React.Component<LinkButtonProps> {
    static defaultProps = {
        darkBackground: false,
        text: "",
        url: "",
        newTab: false,
        nested: false,
        aos: ""
    }

    render() {
        return (
            <Link data-aos={this.props.aos} href={this.props.url ?? ""}
               target={this.props.newTab ? "_blank" : "_self"}
               className={
                   "mx-auto items-center self-start flex gap-2 transition-all ease-in-out hover:gap-4 relative group " +
                   "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8"
                   + calculateColor(this.props.darkBackground, true)
                   + (this.props.nested ? "shadow-lg rounded-lg" : "shadow-xl rounded-2xl lg:mx-0")
               }
            >
                {this.props.text}
                <HiArrowRight className="group-hover:text-yellow transition ease-in-out"/>
            </Link>
        )
    }
}
