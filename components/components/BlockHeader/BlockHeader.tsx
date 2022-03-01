// @ts-nocheck

import React from "react"

type HeaderProps = {
    title: string,
    image: any
}

export default class BlockHeader extends React.Component<HeaderProps> {
    static defaultProps = {
        title: "Page Title",
        image: ""
    }
    
    render() {
        return (
            <section className="px-4 grid place-items-center h-64 bg-blue-dark
            text-white font-heading uppercase text-7xl text-center relative">
                {(this.props.image && this.props.image !== 5 && this.props.image.text !== "") &&
                <img className="absolute top-0 left-0 z-0 h-full w-full object-cover select-none filter brightness-[60%] select-none"
                srcSet={`
                    ${this.props.image}?width=1920 1920w,
                    ${this.props.image}?width=720 720w,
                    ${this.props.image}?width=500 500w,
                    ${this.props.image}?width=300 300w,
                    ${this.props.image}?width=100 100w
                `}
                alt="" />}
                <h1 className="z-[3]">{this.props.title}</h1>
            </section>
        )
    }
}