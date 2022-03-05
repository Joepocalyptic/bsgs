import React from "react"
import { SplitType } from "@components/Content";
import TwitterContent from "./sub/TwitterContent";
import FacebookContent from "./sub/FacebookContent";
import {calculateColor} from "@lib/utils";

type SocialMediaProps = {
    darkBackground: boolean
    twitter: {
        screenName: string
    }
    facebook: {
        screenName: string
    }
}

export default class BlockSocialMedia extends React.Component<SocialMediaProps, any> {
    static defaultProps = {
        darkBackground: false,
        twitter: {

        }
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <TwitterContent screenName={this.props.twitter.screenName} darkBackground={this.props.darkBackground} split={SplitType.Left} />
                        <FacebookContent screenName={this.props.facebook.screenName} darkBackground={this.props.darkBackground} split={SplitType.Left} />
                    </div>
                </section>
            </div>
        )
    }
}
