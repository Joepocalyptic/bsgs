import {SplitType} from "@components/Content";
import React from "react";
import LinkButton from "@components/LinkButton";
import {Post} from "../BlockNewsEvents";
import {calculateColor} from "@lib/utils";
import { Calendar, luxonLocalizer } from "react-big-calendar"
import { DateTime } from "luxon"

type EventsProps = {
    darkBackground: boolean,
    split: SplitType
    events: Post[]
}

export default class EventsContent extends React.Component<EventsProps> {
    static defaultProps = {
        darkBackground: false,
        screenName: "google",
        split: SplitType.Left
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                + calculateColor(this.props.darkBackground, true)
            }>
                <div className="flex flex-1 flex-col gap-4">
                    <h3 className="font-heading uppercase text-center text-3xl">Events</h3>

                    {this.props.events.length !== 0 && <div>
                        <Calendar localizer={luxonLocalizer(DateTime)} />
                    </div>}

                    <div
                        className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === SplitType.Right ? "block lg:hidden" : "")}/>
                    <div
                        className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === SplitType.Left ? "block lg:hidden" : "")}/>

                    <LinkButton darkBackground={!this.props.darkBackground} text="Calendar" url="/calendar"
                                nested={true}/>
                </div>
            </section>
        )
    }
}