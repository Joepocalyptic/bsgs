// @ts-nocheck

import React from "react"
import LinkButton from "@components/LinkButton";
import Content, {BorderType} from "@components/Content";
import {calculateColor} from "@lib/utils";

type SplitContentBlock = {
    heading: string,
    content: string, // Preformatted HTML
    image: string
}

type SplitContentProps = {
    heading: string,
    blocks: {
        block1: SplitContentBlock
        block2: SplitContentBlock,
        block3: SplitContentBlock
    }[],
    button: {
        text: any,
        url: string
    },
    darkBackground: boolean
}

export default class BlockTripleContent extends React.Component<SplitContentProps, {}> {
    render() {
        return (
            <div className={calculateColor(this.props.darkBackground)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    {(this.props.heading) &&
                    <h2 className="text-4xl font-heading uppercase text-center text-white">{this.props.heading}</h2>}

                    {this.props.blocks?.map((block: any, index: number) => (
                        <div key={index} className="flex gap-8 justify-stretch flex-col lg:flex-row">
                            {block.block1 && <Content
                                darkBackground={this.props.darkBackground}
                                image={block.block1.image}
                                heading={block.block1.heading}
                                content={block.block1.content}
                                border={BorderType.Left}
                            />}
                            {block.block2 && <Content
                                darkBackground={this.props.darkBackground}
                                image={block.block2.image}
                                heading={block.block2.heading}
                                content={block.block2.content}
                                border={BorderType.None}
                            />}
                            {block.block3 && <Content
                                darkBackground={this.props.darkBackground}
                                image={block.block3.image}
                                heading={block.block3.heading}
                                content={block.block3.content}
                                border={BorderType.Right}
                            />}
                        </div>
                    ))}

                    {(this.props.button && this.props.button !== 5 && this.props.button.text !== "") &&
                    <LinkButton text={this.props.button.text} url={this.props.button.url} darkBackground={this.props.darkBackground}/>}
                </section>
            </div>

        )
    }

}