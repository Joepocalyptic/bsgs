import React from "react"

import LinkButton from "@components/LinkButton";
import {calculateColor} from "@lib/utils";
import {builder} from "@builder.io/react/lite";
import {Post} from "@components/components/BlockNewsEvents/BlockNewsEvents";

type Sponsor = {

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
        builder.getAll('news-post', {
            options: {noTargeting: true},
            limit: 2,
            omit: "data.blocks"
        }).then(posts => {
            this.setState({
                sponsors: posts.map(post => (post.data as Post))
            })
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <h2 className="text-4xl font-heading uppercase text-center text-white">Sponsors</h2>



                    <LinkButton text="All Sponsors" url="/sponsors" newTab={false} darkBackground={this.props.darkBackground} />
                </section>
            </div>

        )
    }
}