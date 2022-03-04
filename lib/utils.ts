import { DateTime } from "luxon"

export function calculateColor(darkBackground: boolean, inverted: boolean = false): string {
    return inverted != darkBackground ? " bg-blue-dark " : " bg-blue-normal "
}

export function formatDateFromConstructorString(constString: string) {
    return DateTime
        .fromJSDate(new Date(constString))
        .toLocaleString(DateTime.DATE_MED)
}