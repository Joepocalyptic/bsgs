import {SplitType} from "@components/Content";
import React from "react";
import {Timeline} from "react-twitter-widgets"
import {calculateColor} from "@lib/utils";

type TwitterProps = {
    darkBackground: boolean,
    screenName: string,
    split: SplitType
}

export default class TwitterContent extends React.Component<TwitterProps> {
    static defaultProps = {
        darkBackground: false,
        screenName: "google",
        split: SplitType.Left
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl "
                + calculateColor(this.props.darkBackground, true)
            }>
                <div className="flex flex-1 flex-col gap-4">
                    <h3 className="font-heading uppercase text-center text-3xl">Twitter</h3>

                    {this.props.darkBackground ? <style jsx global>{`
                      .twitter-timeline {
                      @apply bg-blue-dark
                      }
                    `}</style> : <style jsx global>{`
                      .twitter-timeline {
                      @apply bg-blue-normal
                      }
                    `}</style>}

                    <Timeline dataSource={{sourceType: "profile", screenName: this.props.screenName}}
                              options={{
                                  height: 400,
                                  chrome: "noheader,nofooter,transparent,noborders",
                                  dnt: "true",
                                  theme: "dark"
                              }}/>

                    <div
                        className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "
                            + (this.props.split === SplitType.Right ? "block lg:hidden" : "")}/>
                    <div
                        className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "
                            + (this.props.split === SplitType.Left ? "block lg:hidden" : "")}/>
                </div>
            </section>
        )
    }
}