export function calculateColor(darkBackground: boolean, inverted: boolean = false): string {
    return inverted != darkBackground ? " bg-blue-dark " : " bg-blue-normal "
}