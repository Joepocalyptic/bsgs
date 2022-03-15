import React from "react"

import { calculateColor } from "@lib/utils"
import Slideshow, {SlideshowBlock} from "@components/Slideshow"

type Sponsor = {
    name: string,
    logo: string
    blurb: string
}

type SponsorsSlideshowProps = {
    heading?: string
    darkBackground: boolean
    blocks: SlideshowBlock[]
}

export default class BlockSlideshowContent extends React.Component<SponsorsSlideshowProps> {
    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className="container mx-auto py-8 flex flex-col gap-8">
                    {this.props.heading &&
                        <h2 className="text-4xl px-4 font-heading uppercase text-center text-white">{this.props.heading}</h2>}

                    <div className="relative px-4 lg:px-24">
                        <Slideshow aos="fade" darkBackground={this.props.darkBackground} blocks={this.props.blocks} />
                    </div>
                </section>
            </div>

        )
    }
}