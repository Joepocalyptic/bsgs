import {BorderType} from "@components/Content";
import React from "react";
import { Link } from "@components/Link/Link";
import LinkButton from "@components/LinkButton";
import {Post} from "../BlockNewsEvents";
import {calculateColor, formatDateFromConstructorString} from "@lib/utils";

type NewsPostProps = {
    darkBackground: boolean
    post: Post
}

type NewsProps = {
    darkBackground: boolean,
    split: BorderType
    news: Post[]
}

class NewsContentPost extends React.Component<NewsPostProps> {
    render() {
        return (
            <li>
                <Link href={this.props.post.url}
                   className={"overflow-hidden flex rounded-lg shadow-lg group transform hover:-translate-y-1 " +
                       "transition hover:shadow-xl ease-in-out underline-offset-2 cursor-pointer" + calculateColor(this.props.darkBackground)}>
                    {this.props.post.image && <div className="w-1/3">
                        <img className="w-full h-full object-cover" src={`${this.props.post.image}?width=250`} alt=""/>
                    </div>}
                    <div className="flex-1 p-4 flex flex-col gap-2">
                        <h4 className="group-hover:underline font-heading uppercase text-xl">{this.props.post.title}</h4>
                        <p className="font-content">{this.props.post.blurb}</p>
                        <div
                            className="font-content uppercase text-[0.7rem] lg:text-right">
                            <div className="hidden lg:inline">
                                <span className="group-hover:underline inline">Click to read
                                    more</span>
                                <span className="mx-1 hidden lg:inline"> | </span>
                            </div>
                            <span className="block text-right lg:inline lg:text-left">
                                {formatDateFromConstructorString(this.props.post.date)}
                            </span>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

export default class NewsContent extends React.Component<NewsProps> {
    static defaultProps = {
        darkBackground: false,
        news: [],
        split: BorderType.Left
    }

    render() {
        return (
            <section className={
                "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                + calculateColor(this.props.darkBackground, true)
            }>
                <div className="flex flex-1 flex-col gap-4">
                    <h3 className="font-heading uppercase text-center text-3xl">News</h3>

                    {this.props.news?.length !== 0 ? <ul className="flex-1 flex flex-col gap-4">
                        {this.props.news.map((post, index) =>
                            <NewsContentPost post={post} darkBackground={this.props.darkBackground} key={index}/>
                        )}
                    </ul> : <p className="font-content text-center">No recent news found.</p>}

                    <div
                        className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === BorderType.Right ? "block lg:hidden" : "")}/>
                    <div
                        className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full " + (this.props.split === BorderType.Left ? "block lg:hidden" : "")}/>

                    <LinkButton darkBackground={!this.props.darkBackground} text="All News" url="/news"
                                nested={true}/>
                </div>
            </section>
        )
    }
}