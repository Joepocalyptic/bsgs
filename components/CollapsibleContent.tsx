import React from "react";
import {calculateColor} from "@lib/utils";
import {BorderType, ContentProps} from "@components/Content";
import {HiChevronDown} from "@react-icons/all-files/hi/HiChevronDown";
import {HiChevronUp} from "@react-icons/all-files/hi/HiChevronUp";

type CollapsibleContentState = {
    collapsed: boolean
}

export default class Content extends React.Component<ContentProps, CollapsibleContentState> {
    state = {
        collapsed: true
    }

    setCollapsed = () => {
        this.setState((oldState) => ({
            collapsed: !oldState.collapsed
        }))
    }

    static defaultProps = {
        darkBackground: false,
        heading: null,
        content: "",
        image: null,
        border: BorderType.Both,
        centerText: Boolean
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                + calculateColor(this.props.darkBackground, true)
            }>
                {
                    <>
                        <div className="flex flex-1 flex-col gap-4">
                            <div className="flex items-center">
                                {(this.props.heading &&
                                    <h3 className={"flex-1 font-heading uppercase text-center text-3xl " + ((this.props.border !== BorderType.Both) ? "" : "lg:text-left")}>{this.props.heading}</h3>)}
                                <button className="text-4xl" onClick={() => this.setCollapsed()}>
                                    {this.state.collapsed ? <HiChevronDown /> : <HiChevronUp />}
                                </button>
                            </div>
                            {!this.state.collapsed && <>
                                {this.props.image && (
                                    <img srcSet={`
                                     ${this.props.image}?width=1920 1920w,
                                     ${this.props.image}?width=720 720w,
                                     ${this.props.image}?width=500 500w,
                                     ${this.props.image}?width=300 300w,
                                     ${this.props.image}?width=100 100w
                                 `}
                                         alt=""
                                         className={"block rounded-lg shadow-lg self-center w-full max-w-[20rem] " + ((this.props.border !== BorderType.Both && this.props.border !== BorderType.None) ? "" : "lg:hidden")}/>)}
                                <div
                                    className={"cms-content leading-8 break-words font-content flex flex-col gap-4" + (this.props.centerText ? " text-center" : "")}
                                    dangerouslySetInnerHTML={{__html: this.props.content}}/>
                            </>}
                            <div
                                className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "
                                    + (this.props.border === BorderType.Right || this.props.border === BorderType.None ? "block lg:hidden" : "")}/>
                            <div
                                className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "
                                    + (this.props.border === BorderType.Left || this.props.border === BorderType.None ? "block lg:hidden" : "")}/>
                        </div>
                        {(!this.state.collapsed && this.props.image && (this.props.border === BorderType.Both || this.props.border === BorderType.None)) && (
                            <img src={this.props.image + "?width=320"} alt=""
                                 className="hidden lg:block rounded-lg shadow-lg self-center max-w-[20rem] max-h-[20rem]"/>)}
                    </>
                }
            </section>
        )
    }
}