import React from "react"
import {BorderType} from "@components/Content"
import {builder} from "@builder.io/react/lite"
import {calculateColor} from "@lib/utils"
import NewsEventsContent from "@components/components/BlockNewsEvents/NewsEventsContent";


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

    componentDidMount() {
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
            omit: "data.blocks"
        }).then(posts => {
            this.setState({
                events: posts.map(post => (post.data as Post))
            })
        })
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <h2 className="text-4xl font-heading uppercase text-center text-white">Keep Up-To-Date</h2>
                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <NewsEventsContent
                            darkBackground={this.props.darkBackground}
                            split={BorderType.Left}
                            posts={this.state.news}
                            title="News"
                            buttonText="All News"
                            buttonUrl="/news"
                            aos="fade"
                        />
                        <NewsEventsContent
                            darkBackground={this.props.darkBackground}
                            split={BorderType.Right}
                            posts={this.state.events}
                            title="Events"
                            buttonText="Calendar"
                            buttonUrl="/calendar"
                            aos="fade"
                        />
                    </div>
                </section>
            </div>
        )
    }
}
