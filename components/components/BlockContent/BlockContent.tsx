// @ts-nocheck

import React from "react"

import Content, {SplitType} from "@components/Content";
import LinkButton from "@components/LinkButton";

type ContentProps = {
    heading: string,
    blocks: {
        heading: string,
        content: string, // Preformatted HTML
        image: string,
        leftBorder: boolean,
        rightBorder: boolean
    }[],
    button: {
        text: any,
        url: string
    },
    darkBackground: boolean
}

export default class BlockContent extends React.Component<ContentProps, {}> {
    render() {
        return (
            <div className={this.props.darkBackground ? "bg-blue-dark" : "bg-blue-normal"}>
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
                            split={SplitType.None}
                        />
                    ))}
                    {(this.props.button && this.props.button !== 5 && this.props.button.text !== "") &&
                    <LinkButton text={this.props.button.text} url={this.props.button.url} darkBackground={this.props.darkBackground}/>}
                </section>
            </div>

        )
    }
}