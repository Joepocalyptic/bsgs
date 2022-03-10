import React from "react"

import LinkButton from "@components/LinkButton";
import { calculateColor } from "@lib/utils";
import { builder } from "@builder.io/react/lite";
import SponsorsMenu from "@components/components/BlockSponsorsSlideshow/sub/SponsorsMenu";
import { Link } from "@components/Link/Link";
import { HiArrowRight } from "@react-icons/all-files/hi/HiArrowRight";

export type Sponsor = {
    logo: string,
    name: string,
    blurb: string,
}

type SponsorsSlideshowProps = {
    darkBackground: boolean
}

type SponsorsSlideshowState = {
    sponsors: Sponsor[]
}

export default class BlockSponsorsSlideshow extends React.Component<SponsorsSlideshowProps, SponsorsSlideshowState> {
    state: SponsorsSlideshowState = {
        sponsors: []
    }

    componentDidMount() {
        builder.getAll('sponsor', {
            options: { noTargeting: true },
            limit: 2
        }).then(posts => {
            this.setState({
                sponsors: posts.map(post => (post.data as Sponsor))
            })
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className="container mx-auto px-4 py-8 flex flex-col gap-8">
                    <h2 className="text-4xl font-heading uppercase text-center text-white">Sponsors</h2>

                    <SponsorsMenu aos="fade" darkBackground={this.props.darkBackground} sponsors={this.state.sponsors} />

                    <Link
                        data-aos={"fade"}
                        href="/sponsors"
                        className={
                            "mx-auto self-start flex gap-2 transition-all ease-in-out hover:gap-4 relative group " +
                            "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8 shadow-xl rounded-2xl"
                            + calculateColor(this.props.darkBackground, true)
                        }
                    >
                        Sponsors Page
                        <HiArrowRight className="group-hover:text-yellow transition ease-in-out" />
                    </Link>
                </section>
            </div>

        )
    }
}