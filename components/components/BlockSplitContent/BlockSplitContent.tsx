// @ts-nocheck

import React from "react"
import LinkButton from "@components/LinkButton";
import Content, {BorderType} from "@components/Content";
import {calculateColor} from "@lib/utils";
import {ContentBlock} from "@components/components/BlockContent/BlockContent";

type SplitContentProps = {
    heading: string,
    blocks: {
        block1: ContentBlock
        block2: ContentBlock
    }[],
    button: {
        text: any,
        url: string,
        newTab: boolean
    },
    darkBackground: boolean
}

export default class BlockSplitContent extends React.Component<SplitContentProps, {}> {
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
                                centerText={block.block1.centerText}
                            />}
                            {block.block2 && <Content
                                darkBackground={this.props.darkBackground}
                                image={block.block2.image}
                                heading={block.block2.heading}
                                content={block.block2.content}
                                border={BorderType.Right}
                                centerText={block.block2.centerText}
                            />}
                        </div>
                    ))}

                    {(this.props.button && this.props.button !== 5 && this.props.button.text !== "") &&
                    <LinkButton text={this.props.button.text} url={this.props.button.url} newTab={this.props.button.newTab} darkBackground={this.props.darkBackground}/>}
                </section>
            </div>

        )
    }

}