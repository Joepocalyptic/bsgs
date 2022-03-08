import React from "react"
import { BorderType } from "@components/Content";
import TwitterContent from "./sub/TwitterContent";
import FacebookContent from "./sub/FacebookContent";
import {calculateColor} from "@lib/utils";

type SocialMediaProps = {
    darkBackground: boolean
    twitter: {
        screenName: string
    }
    facebook: {
        url: string
    }
}

export default class BlockSocialMedia extends React.Component<SocialMediaProps, any> {
    static defaultProps = {
        darkBackground: false,
        twitter: {
            screenName: "google"
        },
        facebook: {
            url: "facebook"
        }
    }

    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <h2 className="text-4xl font-heading uppercase text-center text-white">Social Media</h2>
                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <TwitterContent screenName={this.props.twitter.screenName} darkBackground={this.props.darkBackground} split={BorderType.Left} />
                        <FacebookContent url={this.props.facebook.url} darkBackground={this.props.darkBackground} split={BorderType.Right} />
                    </div>
                </section>
            </div>
        )
    }
}
