import React from "react"

import LinkButton from "@components/LinkButton";
import {calculateColor} from "@lib/utils";
import {builder} from "@builder.io/react/lite";
import SponsorsMenu from "@components/components/BlockSponsorsSlideshow/sub/SponsorsMenu";

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
        /*builder.getAll('sponsor', {
            options: {noTargeting: true},
            limit: 2
        }).then(posts => {
            this.setState({
                sponsors: posts.map(post => (post.data as Sponsor))
            })
        })*/
        this.setState({
            sponsors: [
                {name: "Test 1", blurb: "", logo: ""},
                {name: "Test 2", blurb: "", logo: ""},
                {name: "Test 3", blurb: "", logo: ""},
                {name: "Test 3", blurb: "", logo: ""},
                {name: "Test 3", blurb: "", logo: ""},
                {name: "Test 3", blurb: "", logo: ""},
                {name: "Test 3", blurb: "", logo: ""},

            ]
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <h2 className="text-4xl font-heading uppercase text-center text-white">Sponsors</h2>

                    <SponsorsMenu darkBackground={this.props.darkBackground} sponsors={this.state.sponsors} />

                    <LinkButton text="All Sponsors" url="/sponsors" newTab={false} darkBackground={this.props.darkBackground} />
                </section>
            </div>

        )
    }
}