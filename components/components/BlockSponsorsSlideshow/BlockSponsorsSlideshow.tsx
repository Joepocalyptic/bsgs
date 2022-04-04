import React from "react"
import {calculateColor} from "@lib/utils";
import {builder} from "@builder.io/react/lite";
import Slideshow, {SlideshowBlock} from "@components/Slideshow";

type Sponsor = {
    name: string,
    logo: string
    blurb: string
}

type SponsorsSlideshowProps = {
    darkBackground: boolean
}

type SponsorsSlideshowState = {
    sponsors: SlideshowBlock[]
}

export default class BlockSponsorsSlideshow extends React.Component<SponsorsSlideshowProps, SponsorsSlideshowState> {
    state: SponsorsSlideshowState = {
        sponsors: []
    }

    componentDidMount() {
        builder.getAll('sponsor', {
            options: { noTargeting: true }
        }).then(posts => {
            this.setState({
                sponsors: posts.map(post => (post.data as Sponsor)).map(sponsor => ({
                    title: sponsor.name,
                    image: sponsor.logo,
                    blurb: sponsor.blurb
                } as SlideshowBlock))
            })
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)} id="sponsors">
                <section className="container mx-auto py-8 flex flex-col gap-8">
                    <h2 className="text-4xl px-4 font-heading uppercase text-center text-white">Sponsors</h2>

                    <div className="relative px-4 lg:px-24">
                        <Slideshow aos="fade" darkBackground={this.props.darkBackground} blocks={this.state.sponsors} />
                    </div>
                </section>
            </div>

        )
    }
}