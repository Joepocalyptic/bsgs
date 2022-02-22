import React from "react";
import Image from "next/image"

export enum SplitType {
    None,
    Left,
    Right
}

type ContentProps = {
    darkBackground: boolean,
    heading: string,
    content: string,
    image: string,
    split: SplitType
}

export default class Content extends React.Component<ContentProps> {
    static defaultProps = {
        darkBackground: false,
        heading: null,
        content: "",
        image: null,
        split: SplitType.None
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl "
                + (this.props.darkBackground ? "bg-blue-normal " : "bg-blue-dark ")
            }>
                <div className="flex flex-1 flex-col gap-4">
                    {this.props.heading &&
                    <h3 className={"font-heading uppercase text-center text-3xl " + (this.props.split !== SplitType.None ? "" : "lg:text-left")}>{this.props.heading}</h3>}
                    {this.props.image && (
                        <img srcSet={`
                                     ${this.props.image}?width=1920 1920w,
                                     ${this.props.image}?width=720 720w,
                                     ${this.props.image}?width=500 500w,
                                     ${this.props.image}?width=300 300w,
                                     ${this.props.image}?width=100 100w
                                 `}
                             alt=""
                             className={"block rounded-xl self-center w-full max-w-[20rem] " + (this.props.split !== SplitType.None ? "" : "lg:hidden")}/>)}
                    <div className="leading-8 text-lg break-words font-content flex flex-col gap-4"
                         dangerouslySetInnerHTML={{__html: this.props.content}}/>

                    <div
                        className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === SplitType.Right ? "block lg:hidden" : "")}/>
                    <div
                        className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === SplitType.Left ? "block lg:hidden" : "")}/>
                </div>
                {(this.props.image && this.props.split === SplitType.None) && (
                    <img src={this.props.image + "?width=320"} alt=""
                         className="hidden lg:block rounded-xl self-center max-w-[20rem] max-h-[20rem]"/>)}
            </section>
        )
    }
}
