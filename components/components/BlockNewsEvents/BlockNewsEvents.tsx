import React from "react"
import {SplitType} from "@components/Content";
import NewsContent from "./sub/NewsContent";
import EventsContent from "./sub/EventsContent";
import {builder} from "@builder.io/react";
import {calculateColor} from "@lib/utils";


type NewsEventsProps = {
    darkBackground: boolean,
}

type NewsEventsState = {
    news: Post[]
    events: Post[]
}

export type Post = {
    title: string
    url: string
    image?: string
    date: string
    blurb: string
}

export default class BlockNewsEvents extends React.Component<NewsEventsProps, NewsEventsState> {
    state: NewsEventsState = {
        news: [],
        events: []
    }

    constructor(props: NewsEventsProps) {
        super(props)
        builder.getAll('news-post', {
            options: {noTargeting: true},
            limit: 2,
            omit: "data.blocks"
        }).then(posts => {
            this.setState({
                news: posts.map(post => (post.data as Post))
            })
        })

        builder.getAll('event-post', {
            options: {noTargeting: true},
            limit: 2,
            query: {
                "data.event": false
            },
            omit: "data.blocks"
        }).then(posts => {
            this.setState({
                news: posts.map(post => (post.data as Post))
            })
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <NewsContent darkBackground={this.props.darkBackground} split={SplitType.Right}
                                     news={this.state.news}/>
                        <EventsContent darkBackground={this.props.darkBackground} split={SplitType.Right}
                                       events={this.state.events}/>
                    </div>
                </section>
            </div>
        )
    }
}
