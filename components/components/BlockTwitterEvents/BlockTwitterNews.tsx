import React from "react"
import { SplitType } from "@components/Content";
import TwitterContent from "./sub/TwitterContent";
import NewsContent from "./sub/NewsContent";
import { builder } from "@builder.io/react";
import {calculateColor} from "@lib/utils";


type TwitterEventsProps = {
    darkBackground: boolean,
    twitter: {
        screenName: string
    }
}

type EventsState = {
    posts: Post[]
}

export type Post = {
    title: string
    url: string
    image?: string
    date: string
    blurb: string
}

export default class BlockTwitterNews extends React.Component<TwitterEventsProps, EventsState> {
    state: EventsState = {
        posts: []
    }

    constructor(props: TwitterEventsProps) {
        super(props)
        builder.getAll('news-post', {
            options: { noTargeting: true },
            limit: 3,
            omit: "data.blocks"
        }).then(posts => {
            this.setState({
                posts: posts.map(post => (post.data as Post))
            })
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <TwitterContent screenName={this.props.twitter.screenName} darkBackground={this.props.darkBackground} split={SplitType.Left} />
                        <NewsContent darkBackground={this.props.darkBackground} split={SplitType.Right} posts={this.state.posts} />
                    </div>
                </section>
            </div>
        )
    }
}
