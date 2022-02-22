import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import LinkButton from "@components/LinkButton";
import Content, {SplitType} from "@components/Content";

type SplitContentBlock = {
    heading: string,
    content: string, // Preformatted HTML
    image: string
}

type ContentProps = {
    heading: string,
    blocks: {
        block1: SplitContentBlock
        block2: SplitContentBlock
    }[],
    button: {
        text: any,
        url: string
    },
    darkBackground: boolean
}

export default class BlockSplitContent extends React.Component<ContentProps, {}> {
    render() {
        // @ts-ignore
        return (
            <div className={this.props.darkBackground ? "bg-blue-dark" : "bg-blue-normal"}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    {(this.props.heading) &&
                    <h2 className="text-4xl font-heading uppercase text-center text-white">{this.props.heading}</h2>}

                    {this.props.blocks?.map((block: any, index: number) => (
                        <div key={index} className="flex gap-8 justify-stretch flex-col lg:flex-row">
                            <Content
                                darkBackground={this.props.darkBackground}
                                image={block.block1.image}
                                heading={block.block1.heading}
                                content={block.block1.content}
                                split={SplitType.Left}
                            />
                            <Content
                                darkBackground={this.props.darkBackground}
                                image={block.block2.image}
                                heading={block.block2.heading}
                                content={block.block2.content}
                                split={SplitType.Right}
                            />
                        </div>
                    ))}


                    {(this.props.button && this.props.button !== 5 && this.props.button.text !== "") &&
                    <LinkButton text={this.props.button.text} url={this.props.button.url} darkBackground={this.props.darkBackground}/>}
                </section>
            </div>

        )
    }

}