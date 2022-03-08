import {BorderType} from "@components/Content";
import React from "react";
import {Timeline} from "react-twitter-widgets"
import {calculateColor} from "@lib/utils";

type FacebookProps = {
    darkBackground: boolean,
    url: string,
    split: BorderType
}

type FacebookState = {
    calculatedWidth: number
}

export default class FacebookContent extends React.Component<FacebookProps, FacebookState> {
    rootRef = React.createRef<HTMLDivElement>()

    state = {
        calculatedWidth: 0
    }

    static defaultProps = {
        darkBackground: false,
        url: "https://facebook.com/facebook",
        split: BorderType.Left
    }

    componentDidMount() {
        this.setState({
            calculatedWidth: this.rootRef?.current?.clientWidth!!
        })
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl "
                + calculateColor(this.props.darkBackground, true)
            }>
                <div className="flex flex-1 flex-col gap-4" ref={this.rootRef}>
                    <h3 className="font-heading uppercase text-center text-3xl">Facebook</h3>

                    <iframe
                        src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(this.props.url)}&tabs=timeline&width=${this.state.calculatedWidth}&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
                        height="400" width={Math.min(this.state.calculatedWidth, 500)} className="overflow-hidden rounded-lg self-center" scrolling="no" frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

                    <div
                        className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "
                            + (this.props.split === BorderType.Right ? "block lg:hidden" : "")}/>
                    <div
                        className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "
                            + (this.props.split === BorderType.Left ? "block lg:hidden" : "")}/>
                </div>
            </section>
        )
    }
}