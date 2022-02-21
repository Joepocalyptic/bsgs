import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";

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
        text: string,
        url: string
    },
    darkBackground: boolean
}

export default class BlockContent extends React.Component<ContentProps, {}> {
    render() {
        console.log(this.props.button)
        return (
            <div className={this.props.darkBackground ? "bg-blue-dark" : "bg-blue-normal"}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    {(this.props.heading) &&
                    <h2 className="text-4xl font-heading uppercase text-center text-white">{this.props.heading}</h2>}
                    {this.props.blocks?.map((block: any, index: number) => (
                        <section key={index} className={
                            "content-block flex gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl "
                            + (this.props.darkBackground ? "bg-blue-normal " : "bg-blue-dark ")
                        }>
                            <div className="flex flex-1 flex-col gap-4">
                                {block.heading &&
                                <h3 className="font-heading uppercase text-center lg:text-left text-3xl">{block.heading}</h3>}
                                {block.image && (<img src={block.image}
                                     className="block lg:hidden rounded-xl self-center w-full max-w-[20rem]"/>)}
                                <div className="leading-8 text-lg font-content flex flex-col gap-4"
                                     dangerouslySetInnerHTML={{__html: block.content}}/>
                                {block.leftBorder &&
                                <div className="absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"/>}
                                {block.rightBorder &&
                                <div className="absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"/>}
                            </div>
                            {block.image && (<img src={block.image} alt=""
                                 className="hidden lg:block rounded-xl self-center max-w-[20rem] max-h-[20rem]"/>)}
                        </section>
                    ))}
                    {(this.props.button && this.props.button.text !== "") &&
                    <a href={this.props.button.url ?? ""}
                       className={
                           "shadow-xl self-start mx-auto lg:mx-0 flex gap-2 transition-all ease-in-out hover:gap-4 relative " +
                           "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-4 "
                           + (this.props.darkBackground ? "bg-blue-normal " : "bg-blue-dark")
                       }
                    >
                        {this.props.button.text}
                        <HiArrowRight/>
                    </a>
                    }
                </section>
            </div>

        )
    }

}