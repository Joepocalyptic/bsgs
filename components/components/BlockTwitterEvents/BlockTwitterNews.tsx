// @ts-nocheck

import React from "react"
import { SplitType } from "@components/Content";
import TwitterContent from "./sub/TwitterContent";
import NewsContent from "./sub/NewsContent";


type TwitterEventsProps = {
    darkBackground: boolean,
    twitter: {
        screenName: string
    }
}

export default class BlockTwitterNews extends React.Component<TwitterEventsProps, {}> {
    render() {
        return (
            <div className={this.props.darkBackground ? "bg-blue-dark" : "bg-blue-normal"}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    {(this.props.heading) &&
                    <h2 className="text-4xl font-heading uppercase text-center text-white">{this.props.heading}</h2>}

                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <TwitterContent screenName={this.props.twitter.screenName} darkBackground={this.props.darkBackground} split={SplitType.Left} />
                        <NewsContent darkBackground={this.props.darkBackground} split={SplitType.Right} />
                    </div>

                </section>
            </div>

        )
    }
}
