import React from "react";
import {builder} from "@builder.io/react/lite";
import {Event} from "react-big-calendar";
import {calculateColor} from "@lib/utils";
import BSGSCalendar from "@components/components/BlockCalendar/BSGSCalendar";

type UnformattedEvent = {
    title: string
    url: string
    image?: string
    date: string
    endDate: string
    blurb: string
}

type CalendarProps = {
    darkBackground: boolean
    height: number
}

type CalendarState = {
    events: Event[]
}

function convertEventToCalendarFormat(event: UnformattedEvent): Event {
    return {
        allDay: true,
        title: event.title,
        start: new Date(event.date),
        end: new Date(event.endDate),
        resource: event.url
    }
}

export default class BlockCalendar extends React.Component<CalendarProps, CalendarState> {
    state: CalendarState = {
        events: []
    }

    async componentDidMount() {
        const events =
            (await builder.getAll('event-post', {
                options: {noTargeting: true},
                limit: 20,
                omit: "data.blocks"
            }))
                .map(event => event.data as UnformattedEvent)
                .map(convertEventToCalendarFormat)

        this.setState({
            events: events
        })
    }

    render() {
        return <div className={calculateColor(this.props.darkBackground)}>
            {this.props.darkBackground ? <style jsx global>{`
              .rbc-btn-group button {
                background-color: theme('colors.blue.dark') !important;
              }
              .rbc-month-view {
                @apply bg-blue-dark;
              }
              .rbc-month-row + .rbc-month-row, .rbc-day-bg + .rbc-day-bg, .rbc-header + .rbc-header, .rbc-header {
                border-color: theme('colors.blue.normal') !important;
              }
            `}</style> : <style jsx global>{`
              .rbc-btn-group button {
                background-color: theme('colors.blue.normal') !important;
              }
              .rbc-month-view {
                @apply bg-blue-normal;
              }
              .rbc-month-row + .rbc-month-row, .rbc-day-bg + .rbc-day-bg, .rbc-header + .rbc-header, .rbc-header {
                border-color: theme('colors.blue.dark') !important;
              }
            `}</style>}
            <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                    <section data-aos="fade" className={
                        "relative flex flex-1 gap-24 justify-stretch overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                        + calculateColor(this.props.darkBackground, true)
                    }>
                        <BSGSCalendar height={this.props.height} events={this.state.events}/>

                        <div
                            className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"}/>
                        <div
                            className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "}/>
                    </section>
                </div>
            </section>
        </div>
    }
}