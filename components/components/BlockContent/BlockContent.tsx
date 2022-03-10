// @ts-nocheck

import React from "react"

import Content, {BorderType} from "@components/Content";
import LinkButton from "@components/LinkButton";
import {calculateColor} from "@lib/utils";

export type ContentBlock = {
    heading: string,
    content: string, // Preformatted HTML
    image: string,
    centerText: boolean
}

type ContentProps = {
    heading: string,
    blocks: ContentBlock[],
    button: {
        text: any,
        url: string,
        newTab: boolean
    },
    darkBackground: boolean
}

export default class BlockContent extends React.Component<ContentProps, {}> {
    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    {(this.props.heading) &&
                    <h2 className="text-4xl font-heading uppercase text-center text-white">{this.props.heading}</h2>}
                    {this.props.blocks?.map((block: any, index: number) => (
                        <Content
                            darkBackground={this.props.darkBackground}
                            key={index}
                            image={block.image}
                            heading={block.heading}
                            content={block.content}
                            border={BorderType.Both}
                            centerText={block.centerText}
                            aos="fade"
                        />
                    ))}
                    {(this.props.button && this.props.button !== 5 && this.props.button.text !== "") &&
                    <LinkButton aos="fade" text={this.props.button.text} url={this.props.button.url} newTab={this.props.button.newTab} darkBackground={this.props.darkBackground}/>}
                </section>
            </div>

        )
    }
}