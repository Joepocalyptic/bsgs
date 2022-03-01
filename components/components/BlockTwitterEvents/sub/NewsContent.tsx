import {SplitType} from "@components/Content";
import React from "react";
import {Timeline} from "react-twitter-widgets"

type EventsProps = {
    darkBackground: boolean,
    split: SplitType
}

export default class NewsContent extends React.Component<EventsProps> {
    static defaultProps = {
        darkBackground: false,
        screenName: "google",
        split: SplitType.Left
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl "
                + (this.props.darkBackground ? "bg-blue-normal " : "bg-blue-dark ")
            }>
                <div className="flex flex-1 flex-col gap-4">
                    <h3 className="font-heading uppercase text-center text-3xl">News</h3>

                    <div
                        className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === SplitType.Right ? "block lg:hidden" : "")}/>
                    <div
                        className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === SplitType.Left ? "block lg:hidden" : "")}/>
                </div>
            </section>
        )
    }
}