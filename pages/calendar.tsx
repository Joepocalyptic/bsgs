import Head from 'next/head'
import {builder} from "@builder.io/react/lite"
import {Event} from "react-big-calendar"
import '@builder.io/widgets'
import React from "react"
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import BSGSCalendar from "@components/BSGSCalendar";
import {calculateColor} from "@lib/utils";
import TwitterContent from "@components/components/BlockSocialMedia/sub/TwitterContent";
import {BorderType} from "@components/Content";
import FacebookContent from "@components/components/BlockSocialMedia/sub/FacebookContent";
import BlockHeader from "@components/components/BlockHeader/BlockHeader";

type UnformattedEvent = {
    title: string
    url: string
    image?: string
    date: string
    endDate: string
    blurb: string
}

function convertEventToCalendarFormat(event: UnformattedEvent): Event {
    return {
        allDay: true,
        title: event.title,
        start: new Date(event.date),
        end: new Date(event.endDate),
        resource: event.url
    }
}

export async function getStaticProps() {

    const events =
        (await builder
            .getAll('event-post', {
                options: {noTargeting: true},
                limit: 20,
                omit: "data.blocks"
            })).map(event => event.data as UnformattedEvent)

    return {
        props: {
            events: events
        },
        revalidate: 5,
    }
}

export default function NewsPost({events}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Events calendar" />
                <title>Events Calendar | Bay State Girls Softball</title>
            </Head>
            <BlockHeader title="Events Calendar" />
            <div className={calculateColor(false)}>
                <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                    <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                        <section className={
                            "flex flex-1 gap-24 relative overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                            + calculateColor(false, true)
                        }>
                            <div className="flex flex-1 flex-col gap-4">
                                <BSGSCalendar height={800} events={events.map(convertEventToCalendarFormat)} />
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}
