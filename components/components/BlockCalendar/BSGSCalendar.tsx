import {Calendar, Event, luxonLocalizer} from "react-big-calendar";
import {DateTime} from "luxon";
import React from "react";
import {NextRouter, withRouter} from "next/router";

type CalendarProps = {
    height: number,
    events: Event[],
    router: NextRouter
}

class BSGSCalendar extends React.Component<CalendarProps, any> {

    static defaultProps  = {
        height: 0,
        events: []
    }

    render() {
        return <div className="root w-full">
            <style jsx>{`
              .root {
                height: ${this.props.height}px
              }
            `}</style>
            <Calendar
                localizer={luxonLocalizer(DateTime)}
                events={this.props.events}
                views={['month']}
                onSelectEvent={event => this.props.router.push(event.resource)}
            />
        </div>
    }
}

export default withRouter(BSGSCalendar)