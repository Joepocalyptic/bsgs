import {Calendar, luxonLocalizer} from "react-big-calendar";
import {DateTime} from "luxon";
import React from "react";

export default function BSGSCalendar() {
    return <div className="h-[400px]">
        <Calendar
            localizer={luxonLocalizer(DateTime)}
            events={[
                {
                    'title': 'My event',
                    'allDay': false,
                    'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
                    'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM
                }
            ]}
            view="month"
            views={['month']}
        />
    </div>
}